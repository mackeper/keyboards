# Fat_cruiser

![fat_cruiser](../images/keymap.png)

*A single PCB keyboard that feels like a split one.*
*Small enough to place on top of a laptop keyboard.*

 Keyboard Maintainer: [Marcus Östling](https://github.com/mackeper)  
 Hardware Supported: Raspberry Pi Pico  
 Hardware Availability: *Links to where you can find this hardware*  

## Build

Make example for this keyboard (after setting up your build environment):

    make fat_cruiser:default

Flashing example for this keyboard:

    make fat_cruiser:default:flash

See the [build environment setup](https://docs.qmk.fm/#/getting_started_build_tools) and the [make instructions](https://docs.qmk.fm/#/getting_started_make_guide) for more information. Brand new to QMK? Start with our [Complete Newbs Guide](https://docs.qmk.fm/#/newbs).

## Bootloader

Enter the bootloader in 3 ways:

* **Bootmagic reset**: Hold down the key at (0,0) in the matrix (usually the top left key or Escape) and plug in the keyboard
* **Physical reset button**: Briefly press the button on the back of the PCB - some may have pads you must short instead
* **Keycode in layout**: Press the key mapped to `QK_BOOT` if it is available

## Develop

### Generate compiler_commands.json

`bear -- make fat_cruiser:default`
