#include "action.h"
#include "custom_keycodes.h"
#include "deferred_exec.h"
#include "quantum.h"

static deferred_token auto_click_cancel_token = INVALID_DEFERRED_TOKEN;
static bool key_down = false;
bool auto_click_enabled = false;
bool holding_auto_click = false;

/** Callback function for the timer
 * Return 0 to stop the timer, or a positive integer to continue
 */
uint32_t auto_click(uint32_t trigger_time, void *cb_arg) {
    if (key_down) {
        key_down = false;
        unregister_code(KC_MS_BTN1);
    } else {
        key_down = true;
        register_code(KC_MS_BTN1);
    }
    return 40;
}

void stop_auto_click(void) {
    auto_click_enabled = false;
    unregister_code(KC_MS_BTN1);
    cancel_deferred_exec(auto_click_cancel_token);
}

void start_auto_click(void) {
    auto_click_enabled = true;
    defer_exec(40, auto_click, NULL);
}

void toggle_auto_click(void) {
    if (auto_click_enabled) {
        stop_auto_click();
    } else {
        start_auto_click();
    }
}

bool process_record_user_auto_click(uint16_t keycode, keyrecord_t* record) {
    if (keycode != _AUTO_CLICK) {
        return true;
    }

    if (record->tap.count == 1 && record->event.pressed) { // press
        toggle_auto_click();
    }
    if (record->tap.count == 0 && record->event.pressed) { // hold
        holding_auto_click = true;
        toggle_auto_click();
    }
    if (!record->event.pressed) { // release
        if (holding_auto_click) {
            holding_auto_click = false;
            toggle_auto_click();
        }
    }
    return false;
}
