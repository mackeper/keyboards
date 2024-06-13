#pragma once

#include QMK_KEYBOARD_H
#include "quantum_keycodes.h"

enum custom_keycodes {
    V_OSL = SAFE_RANGE,
};

#define _GAMING_OSL LT(_GAMING_UTIL, KC_V)

bool process_record_user_custom(uint16_t keycode, keyrecord_t* record);
