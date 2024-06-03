// Copyright 2023 QMK
// SPDX-License-Identifier: GPL-2.0-or-later

#include QMK_KEYBOARD_H

enum Layer {
    _QWERTY,
    _NAVIGATION,
    _MOUSE,
    _MEDIA,
    _NUMBERS,
    _SYMBOLS,
    _FUNCTION_KEYS,
    _GAMING,
};

#define _KC_Å RALT(KC_W)
#define _KC_Ä RALT(KC_Q)
#define _KC_Ö RALT(KC_P)

#define _A_LGUI MT(MOD_LGUI, KC_A)
#define _S_LALT MT(MOD_LALT, KC_S)
#define _D_LCTL MT(MOD_LCTL, KC_D)
#define _F_LSFT MT(MOD_LSFT, KC_F)
#define _X_RALT MT(MOD_RALT, KC_X)

#define _SC_LGUI MT(MOD_LGUI, KC_SCLN)
#define _L_LALT MT(MOD_LALT, KC_L)
#define _K_LCTL MT(MOD_LCTL, KC_K)
#define _J_LSFT MT(MOD_LSFT, KC_J)
#define _DT_RALT MT(MOD_RALT, KC_DOT)

#define _LT_SPC LT(_NAVIGATION, KC_SPC)
#define _LT_BSPC LT(_MOUSE, KC_BSPC)
#define _LT_ESC LT(_MEDIA, KC_ESC)
#define _LT_ENT LT(_NUMBERS, KC_ENT)
#define _LT_TAB LT(_SYMBOLS, KC_TAB)
#define _LT_DEL LT(_FUNCTION_KEYS, KC_DEL)

const uint16_t PROGMEM keymaps[][MATRIX_ROWS][MATRIX_COLS] = {
    /*
     * ┌───┬───┬───┬───┬───┐   ┌───┬───┬───┬───┬───┐
     * │ Q │ W │ E │ R │ T │   │ Y │ U │ I │ O │ P │
     * ├───┼───┼───┼───┼───┤   ├───┼───┼───┼───┼───┤
     * │ A │ S │ D │ F │ G │   │ H │ J │ K │ L │ ; │
     * ├───┼───┼───┼───┼───┤   ├───┼───┼───┼───┼───┤
     * │ Z │ X │ C │ V │ B │   │ N │ M │ , │ . │ / │
     * └───┴───┼───┼───┼───┤   ├───┼───┼───┼───┴───┘
     *         │Esc│Bsc│Spc│   │Ent│Tab│Del│
     *         └───┴───┴───┘   └───┴───┴───┘
     */
    [_QWERTY] = LAYOUT_ortho_36(
        KC_Q,    KC_W,    KC_E,    KC_R,    KC_T,   /*,*/   KC_Y, KC_U,    KC_I,    KC_O,     KC_P,
        _A_LGUI, _S_LALT, _D_LCTL, _F_LSFT, KC_G,   /*,*/   KC_H, _J_LSFT, _K_LCTL, _L_LALT,  _SC_LGUI,
        KC_Z,    _X_RALT, KC_C,    KC_V,    KC_B,   /*,*/   KC_N, KC_M,    KC_COMM, _DT_RALT, KC_SLSH,
        _LT_ESC, _LT_BSPC, _LT_SPC, /*,*/ _LT_ENT, _LT_TAB, _LT_DEL
    ),
    [_NAVIGATION] = LAYOUT_ortho_36(
        TO(_GAMING), KC_NO,   KC_NO,   KC_NO,   KC_NO,  /*,*/   KC_NO,   KC_PSTE, KC_COPY, KC_CUT,  KC_UNDO,
        KC_LGUI,     KC_LALT, KC_LCTL, KC_LSFT, KC_NO,  /*,*/   KC_CAPS, KC_LEFT, KC_DOWN, KC_UP,   KC_RIGHT,
        KC_NO,       KC_RALT, KC_COPY, KC_PSTE, KC_NO,  /*,*/   KC_INS,  KC_HOME, KC_PGDN, KC_PGUP, KC_END,
        KC_NO,       KC_NO,   KC_NO,   /*,*/    KC_DEL, KC_ENT, KC_TAB
    ),
    [_MOUSE] = LAYOUT_ortho_36(
        TO(_GAMING), KC_NO,   KC_NO,   KC_NO,   KC_NO,   /*,*/    KC_NO, KC_PSTE, KC_COPY, KC_CUT,  KC_UNDO,
        KC_LGUI,     KC_LALT, KC_LCTL, KC_LSFT, KC_NO,   /*,*/    KC_NO, KC_MS_L, KC_MS_D, KC_MS_U, KC_MS_R,
        KC_NO,       KC_RALT, KC_NO,   KC_NO,   KC_NO,   /*,*/    KC_NO, KC_WH_L, KC_WH_D, KC_WH_U, KC_WH_R,
        KC_NO,       KC_NO,   KC_NO,   /*,*/    KC_BTN3, KC_BTN1, KC_BTN2
    ),
    [_MEDIA] = LAYOUT_ortho_36(
        TO(_GAMING), KC_NO,   KC_NO,   KC_NO,   KC_NO,   /*,*/    KC_NO, KC_NO,   KC_NO,   KC_NO,   KC_NO,
        KC_LGUI,     KC_LALT, KC_LCTL, KC_LSFT, KC_NO,   /*,*/    KC_NO, KC_MPRV, KC_VOLD, KC_VOLU, KC_MNXT,
        KC_NO,       KC_RALT, KC_NO,   KC_NO,   KC_NO,   /*,*/    KC_NO, _KC_Å,   _KC_Ä,   _KC_Ö,   KC_NO,
        KC_NO,       KC_NO,   KC_NO,   /*,*/    KC_MUTE, KC_MPLY, KC_MSTP
    ),
    [_NUMBERS] = LAYOUT_ortho_36(
        KC_ASTR, KC_7,    KC_8,    KC_9, KC_EQUAL, /*,*/  KC_NO, KC_NO,   KC_NO,   KC_NO,   KC_NO,
        KC_QUOT, KC_4,    KC_5,    KC_6, KC_PLUS,  /*,*/  KC_NO, KC_LSFT, KC_LCTL, KC_LALT, KC_LGUI,
        KC_GRV,  KC_1,    KC_2,    KC_3, KC_0,     /*,*/  KC_NO, KC_NO,   KC_NO,   KC_RALT, KC_NO,
        KC_NO, KC_BSLS, KC_MINS, /*,*/ KC_NO,    KC_NO, KC_NO
    ),
    [_SYMBOLS] = LAYOUT_ortho_36(
        KC_EXLM, KC_AT,   KC_HASH, KC_DLR,  KC_PERC, /*,*/  KC_NO, KC_NO,   KC_NO,   KC_NO,   KC_NO,
        KC_DQUO, KC_LBRC, KC_LCBR, KC_LPRN, KC_CIRC, /*,*/  KC_NO, KC_LSFT, KC_LCTL, KC_LALT, KC_LGUI,
        KC_TILD, KC_RBRC, KC_RCBR, KC_RPRN, KC_AMPR, /*,*/  KC_NO, KC_NO,   KC_NO,   KC_RALT, KC_NO,
        KC_NO,   KC_PIPE, KC_UNDS, /*,*/    KC_NO,   KC_NO, KC_NO
    ),
    [_FUNCTION_KEYS] = LAYOUT_ortho_36(
        KC_F12, KC_F7, KC_F8, KC_F9, KC_PSCR, /*,*/  KC_NO, KC_NO,   KC_NO,   KC_NO,   KC_NO,
        KC_F11, KC_F4, KC_F5, KC_F6, KC_SCRL, /*,*/  KC_NO, KC_LSFT, KC_LCTL, KC_LALT, KC_LGUI,
        KC_F10, KC_F1, KC_F2, KC_F3, KC_PAUS, /*,*/  KC_NO, KC_NO,   KC_NO,   KC_RALT, KC_NO,
        KC_NO,  KC_NO, KC_NO, /*,*/  KC_NO,   KC_NO, KC_NO
    ),
    [_GAMING] = LAYOUT_ortho_36(
        KC_Q,   KC_W,   KC_E,    KC_R, KC_T,   /*,*/   KC_Y, KC_U, KC_I,    KC_O,   KC_P,
        KC_A,   KC_S,   KC_D,    KC_F, KC_G,   /*,*/   KC_H, KC_J, KC_K,    KC_L,   KC_SCLN,
        KC_Z,   KC_X,   KC_C,    KC_V, KC_B,   /*,*/   KC_N, KC_M, KC_COMM, KC_DOT, KC_SLSH,
        KC_ESC, KC_BSPC, KC_SPC, /*,*/ KC_DEL, KC_ENT, KC_TAB
    ),
};
