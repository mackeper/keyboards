#pragma once

#include "quantum_keycodes.h"

enum custom_keycodes {
    V_OSL = SAFE_RANGE,
    _AUTO_CLICK,
};

#define _GAMING_OSL LT(_GAMING_UTIL, KC_V)
#define _CUT_RALT LT(KC_X, KC_RALT)
#define _FIX_ENTER LT(_NUMBERS, KC_ENT)
