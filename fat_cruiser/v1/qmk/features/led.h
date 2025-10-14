#pragma once

#include QMK_KEYBOARD_H

void keyboard_pre_init_user_led(void);
void layer_state_set_user_led(layer_state_t state);
void dynamic_macro_record_start_user_led(int8_t direction);
void dynamic_macro_record_end_user_led(int8_t direction);
