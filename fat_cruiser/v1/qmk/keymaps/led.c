#include QMK_KEYBOARD_H
#include "layers.h"
#include "led.h"

bool on_board_led_high = false;
bool on_board_led_blinking = false;
uint32_t blink_on_board_led_delay = 250;

void reset_on_board_led(void) {
    gpio_write_pin_low(GP25);
    on_board_led_high = false;
}

void set_on_board_led(void) {
    gpio_write_pin_high(GP25);
    on_board_led_high = true;
}

/** Callback function for the timer
 * Return 0 to stop the timer, or a positive integer to continue
 */
uint32_t blink_on_board_led(uint32_t trigger_time, void *cb_arg) {
    if (!on_board_led_blinking) {
        return blink_on_board_led_delay;
    }

    if (on_board_led_high) {
        reset_on_board_led();
    } else {
        set_on_board_led();
    }

    return blink_on_board_led_delay;
}

void keyboard_pre_init_user_led(void) {
    gpio_set_pin_output(GP25);
    defer_exec(blink_on_board_led_delay, blink_on_board_led, NULL);
}

void layer_state_set_user_led(layer_state_t state) {
    on_board_led_blinking = false;
    reset_on_board_led();

    switch (get_highest_layer(state)) {
        case _QWERTY:
            break;
        case _NAVIGATION:
            on_board_led_blinking = true;
            break;
        case _MOUSE:
            on_board_led_blinking = true;
            break;
        case _MEDIA:
            on_board_led_blinking = true;
            break;
        case _NUMBERS:
            on_board_led_blinking = true;
            break;
        case _SYMBOLS:
            on_board_led_blinking = true;
            break;
        case _FUNCTION_KEYS:
            on_board_led_blinking = true;
            break;
        case _GAMING:
            set_on_board_led();
            break;
        case _GAMING_UTIL:
            on_board_led_blinking = true;
            break;
        default:
            /* gpio_write_pin_low(GP25); */
            break;
    }
}
