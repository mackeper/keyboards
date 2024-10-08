# Fat Cruiser v2

<div align="center">

<!-- ![Logo](./images/fat_cruiser_v2.png) -->

</div>

See [keymap layout](./qmk/readme.md).

### Images :camera:

<details>
  <summary>Click to expand</summary>
  <div align="center">
    <img src="./images/kicad.jpg" />
  </div>
<div align="center">
</details>

### Dependencies :gear:

    - [KiCad](https://www.kicad.org/)
    - [QMK](https://qmk.fm/)
    - [Ergogen](https://github.com/berigora/ergogen)
        - `npm install -g ergogen`
    - [jscad](https://github.com/jscad/OpenJSCAD.org)
        - `npm install -g @jscad/cli`
    - [FreeRouting](https://freerouting.org/)

### Build :hammer:

From within `fat_cruiser/v2/`:

- `ergogen . && for i in output/cases/*.jscad; do npx @jscad/cli@1 "$i" -of stla; done`

### Parts :nut_and_bolt:

| Part                                                    | Price                  | Url                                                                                                                        |
|----------------                                         | ---------------        | ---------------                                                                                                            |
| PCB                                                     | €10.58 ( + €24.76 )    | [jlcpcb](https://jlcpcb.com/)                                                                                              |
| 40 Switches (Kalih choc purple)                         | €19.80                 | [splitkb](https://splitkb.com/products/kailh-low-profile-choc-switches?variant=47265452458331)                             |
| 40 Keycaps (Blank MBK Choc u1)                          | €16.36                 | [splitkb](https://splitkb.com/products/blank-mbk-choc-low-profile-keycaps?variant=31811491987533)                          |
| 100 SMT Diodes                                          | €2.49                  | [splitkb](https://splitkb.com/products/smd-diodes?variant=42283984027907)                                                  |
| Raspberry Pi Pico H                                     | €5.89                  | [elektrokit](https://www.electrokit.com/en/raspberry-pi-pico-h)                                                            |
| Total                                                   | €55.12                 |                                                                                                                            |
