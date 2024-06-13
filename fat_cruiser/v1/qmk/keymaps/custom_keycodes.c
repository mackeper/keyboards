#include QMK_KEYBOARD_H

#include "layers.h"
#include "custom_keycodes.h"

bool holding_v = false;

bool process_record_user_custom(uint16_t keycode, keyrecord_t* record) {
    switch (keycode) {
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
    }

    if (IS_LAYER_ON(_GAMING_UTIL) && !record->event.pressed) {
        clear_oneshot_layer_state(ONESHOT_PRESSED);
    }
    return true;
}


