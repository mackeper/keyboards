#include "action_layer.h"
#include "keycodes.h"
#include QMK_KEYBOARD_H

#include "layers.h"
#include "custom_keycodes.h"
#include "process_custom_keycodes.h"
#include "auto_click.h"

bool holding_cut_ralt = false;
bool holding_v = false;
bool holding_enter = false;

/**
 * Process a key event for the custom keycodes.
 * @param keycode The custom keycode as used in the keymap
 * @param record The key record contains information about the actual press
 * @return true if qmk should continue processing the key event, false otherwise
 */
bool process_record_user_custom(uint16_t keycode, keyrecord_t* record) {
    switch (keycode) {
        // Gaming One Shot Layer key also works as V when held
        case _GAMING_OSL:
            if (record->tap.count == 1 && record->event.pressed) { // press
                set_oneshot_layer(_GAMING_UTIL, ONESHOT_START);
            }
            if (record->tap.count == 0 && record->event.pressed) { // hold
                register_code(KC_V);
                holding_v = true;
            }
            if (!record->event.pressed) { // release
                if (holding_v) {
                    unregister_code(KC_V);
                    holding_v = false;
                }
            }
            return false;
        // Cut key also works as RALT when held
        case _CUT_RALT:
            if (record->tap.count == 1 && record->event.pressed) { // press
                tap_code16(C(KC_X));
            }
            if (record->tap.count == 0 && record->event.pressed) { // hold
                register_code(KC_RALT);
                holding_cut_ralt = true;
            }
            if (!record->event.pressed) { // release
                if (holding_cut_ralt) {
                    unregister_code(KC_RALT);
                    holding_cut_ralt = false;
                }
            }
            return false;
        case _AUTO_CLICK:
            if (!process_record_user_auto_click(keycode, record)) { return false; }

        case _FIX_ENTER:
            if (record->tap.count == 1 && record->event.pressed) { // press
                tap_code16(KC_ENTER);
            }
            if (record->tap.count == 0 && record->event.pressed) { // hold
                layer_on(_NUMBERS);
                holding_enter = true;
            }
            if (!record->event.pressed) { // release
                if (holding_enter) {
                    layer_off(_NUMBERS);
                    holding_enter = false;
                }
            }
            return false;
    }

    if (IS_LAYER_ON(_GAMING_UTIL) && !record->event.pressed) {
        clear_oneshot_layer_state(ONESHOT_PRESSED);
    }
    return true;
}


