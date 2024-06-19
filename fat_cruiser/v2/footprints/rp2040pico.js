// Raspberry Pi Pico rp2040 microcontroller
// Params
//  orientation: default is down
//    if down, power led will face the pcb
//    if up, power led will face away from pcb
module.exports = {
  params: {
    designator: "MCU",
    orientation: "down",

    GND: { type: "net", value: "GND" },
    VBUS: { type: "net", value: "VBUS" },
    VSYS: { type: "net", value: "VSYS" },
    _3V3_EN: { type: "net", value: "3V3_EN" },
    _3V3_OUT: { type: "net", value: "3V3_OUT" },
    ADC_VREF: { type: "net", value: "ADC_VREF" },
    RUN: { type: "net", value: "RUN" },
    P0: { type: "net", value: "P0" },
    P1: { type: "net", value: "P1" },
    P2: { type: "net", value: "P2" },
    P3: { type: "net", value: "P3" },
    P4: { type: "net", value: "P4" },
    P5: { type: "net", value: "P5" },
    P6: { type: "net", value: "P6" },
    P7: { type: "net", value: "P7" },
    P8: { type: "net", value: "P8" },
    P9: { type: "net", value: "P9" },
    P10: { type: "net", value: "P10" },
    P11: { type: "net", value: "P11" },
    P12: { type: "net", value: "P12" },
    P13: { type: "net", value: "P13" },
    P14: { type: "net", value: "P14" },
    P15: { type: "net", value: "P15" },
    P16: { type: "net", value: "P16" },
    P17: { type: "net", value: "P17" },
    P18: { type: "net", value: "P18" },
    P19: { type: "net", value: "P19" },
    P20: { type: "net", value: "P20" },
    P21: { type: "net", value: "P21" },
    P22: { type: "net", value: "P22" },
    P26: { type: "net", value: "P26" },
    P27: { type: "net", value: "P27" },
    P28: { type: "net", value: "P28" },
    SWDIO: { type: "net", value: "SWDIO" },
    SWCLOCK: { type: "net", value: "SWCLOCK" },
  },
  body: (p) => {
    const standard = `
      (module rp2040pico (layer F.Cu) (tedit 5B307E4C)
        ${p.at /* parametric position */}

        ${"" /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

        ${"" /* illustration of the (possible) USB port overhang */}
        (fp_line (start -26.8 -4) (end -26.8 4) (layer Dwgs.User) (width 0.15))
        (fp_line (start -26.8 4) (end -26.2 4) (layer Dwgs.User) (width 0.15))
        (fp_line (start -26.2 4) (end -26.2 -4) (layer Dwgs.User) (width 0.15))
        (fp_line (start -26.2 -4) (end -26.8 -4) (layer Dwgs.User) (width 0.15))

        (fp_line (start -26.2 -3.5) (end -26.2 3.5) (layer Dwgs.User) (width 0.15))
        (fp_line (start -26.2 3.5) (end -20.8 3.5) (layer Dwgs.User) (width 0.15))
        (fp_line (start -20.8 3.5) (end -20.8 -3.5) (layer Dwgs.User) (width 0.15))
        (fp_line (start -20.8 -3.5) (end -26.2 -3.5) (layer Dwgs.User) (width 0.15))

        ${"" /* component outline */}
        (fp_line (start -25.5 10.5) (end 25.5 10.5) (layer F.SilkS) (width 0.15))
        (fp_line (start 25.5 10.5) (end 25.5 -10.5) (layer F.SilkS) (width 0.15))
        (fp_line (start 25.5 -10.5) (end -25.5 -10.5) (layer F.SilkS) (width 0.15))
        (fp_line (start -25.5 -10.5) (end -25.5 10.5) (layer F.SilkS) (width 0.15))

        (fp_line (start -25.5 10.5) (end 25.5 10.5) (layer B.SilkS) (width 0.15))
        (fp_line (start 25.5 10.5) (end 25.5 -10.5) (layer B.SilkS) (width 0.15))
        (fp_line (start 25.5 -10.5) (end -25.5 -10.5) (layer B.SilkS) (width 0.15))
        (fp_line (start -25.5 -10.5) (end -25.5 10.5) (layer B.SilkS) (width 0.15))
    `;

    function pin_names(def_neg, def_pos, layer) {
      const effects = `(effects
        (font (size 0.8 0.8) (thickness 0.15))
        ${layer == "B.SilkS" ? "(justify mirror)" : ""}
      )`;
      const mounting_holes = true;
      const mounting_holes_offset = 0.7;
      return `
        ${"" /* pin names */}
        (fp_text user P00 (at ${mounting_holes ? -21.59 + mounting_holes_offset : -24.13} ${def_pos}${mounting_holes ? 6.4 / 2 : 6.4} ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user P01 (at ${mounting_holes ? -21.59 + mounting_holes_offset : -21.59} ${def_pos}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user GND (at -19.05 ${def_pos}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user P02 (at -16.51 ${def_pos}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user P03 (at -13.97 ${def_pos}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user P04 (at -11.43 ${def_pos}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user P05 (at -9.09 ${def_pos}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user GND (at -6.35 ${def_pos}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user P06 (at -3.81 ${def_pos}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user P07 (at -1.27 ${def_pos}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user P08 (at 1.27 ${def_pos}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user P09 (at 3.81 ${def_pos}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user GND (at 6.35 ${def_pos}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user P10 (at 8.89 ${def_pos}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user P11 (at 11.43 ${def_pos}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user P12 (at 13.97 ${def_pos}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user P13 (at 16.51 ${def_pos}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user GND (at 19.05 ${def_pos}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user P14 (at ${mounting_holes ? 21.59 - mounting_holes_offset : 21.59} ${def_pos}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user P15 (at ${mounting_holes ? 21.59 - mounting_holes_offset : 24.13} ${def_pos}${mounting_holes ? 6.4 / 2 : 6.4} ${p.r + 90}) (layer ${layer}) ${effects})

        (fp_text user VBUS (at ${mounting_holes ? -21.59 + mounting_holes_offset : -24.13} ${def_neg}${mounting_holes ? 6.4 / 2 : 6.4} ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user VSYS (at ${mounting_holes ? -21.59 + mounting_holes_offset : -21.59} ${def_neg}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user GND (at -19.05 ${def_neg}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user 3V3E (at -16.51 ${def_neg}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user 3V3O (at -13.97 ${def_neg}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user ADCV (at -11.43 ${def_neg}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user P28 (at -9.09 ${def_neg}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user GND (at -6.35 ${def_neg}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user P27 (at -3.81 ${def_neg}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user P26 (at -1.27 ${def_neg}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user RUN (at 1.27 ${def_neg}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user P22 (at 3.81 ${def_neg}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user GND (at 6.35 ${def_neg}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user P21 (at 8.89 ${def_neg}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user P20 (at 11.43 ${def_neg}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user P19 (at 13.97 ${def_neg}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user P18 (at 16.51 ${def_neg}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user GND (at 19.05 ${def_neg}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user P17 (at ${mounting_holes ? 21.59 - mounting_holes_offset : 21.59} ${def_neg}6.4 ${p.r + 90}) (layer ${layer}) ${effects})
        (fp_text user P16 (at ${mounting_holes ? 21.59 - mounting_holes_offset : 24.13} ${def_neg}${mounting_holes ? 6.4 / 2 : 6.4} ${p.r + 90}) (layer ${layer}) ${effects})

        (fp_text user DEBUG (at 21.59 0 ${p.r + 90}) (layer ${layer}) ${effects})
      `;
    }

    function pins(def_neg, def_pos) {
      return `
        (pad 1 thru_hole circle (at -24.13 ${def_pos}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P0})
        (pad 2 thru_hole circle (at -21.59 ${def_pos}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P1})
        (pad 3 thru_hole circle (at -19.05 ${def_pos}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND})
        (pad 4 thru_hole circle (at -16.51 ${def_pos}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P2})
        (pad 5 thru_hole circle (at -13.97 ${def_pos}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P3})
        (pad 6 thru_hole circle (at -11.43 ${def_pos}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P4})
        (pad 7 thru_hole circle (at -8.89 ${def_pos}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P5})
        (pad 8 thru_hole circle (at -6.35 ${def_pos}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND})
        (pad 9 thru_hole circle (at -3.81 ${def_pos}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P6})
        (pad 10 thru_hole circle (at -1.27 ${def_pos}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P7})
        (pad 11 thru_hole circle (at 1.27 ${def_pos}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P8})
        (pad 12 thru_hole circle (at 3.81 ${def_pos}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P9})
        (pad 13 thru_hole circle (at 6.35 ${def_pos}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND})
        (pad 14 thru_hole circle (at 8.89 ${def_pos}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P10})
        (pad 15 thru_hole circle (at 11.43 ${def_pos}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P11})
        (pad 16 thru_hole circle (at 13.97 ${def_pos}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P12})
        (pad 17 thru_hole circle (at 16.51 ${def_pos}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P13})
        (pad 18 thru_hole circle (at 19.05 ${def_pos}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND})
        (pad 19 thru_hole circle (at 21.59 ${def_pos}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P14})
        (pad 20 thru_hole circle (at 24.13 ${def_pos}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P15})

        (pad 21 thru_hole circle (at -24.13 ${def_neg}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.VBUS})
        (pad 22 thru_hole circle (at -21.59 ${def_neg}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.VSYS})
        (pad 23 thru_hole circle (at -19.05 ${def_neg}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND})
        (pad 24 thru_hole circle (at -16.51 ${def_neg}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p._3V3_EN})
        (pad 25 thru_hole circle (at -13.97 ${def_neg}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p._3V3_OUT})
        (pad 26 thru_hole circle (at -11.43 ${def_neg}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.ADC_VREF})
        (pad 27 thru_hole circle (at -8.89 ${def_neg}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P28})
        (pad 28 thru_hole circle (at -6.35 ${def_neg}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND})
        (pad 29 thru_hole circle (at -3.81 ${def_neg}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P27})
        (pad 30 thru_hole circle (at -1.27 ${def_neg}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P26})
        (pad 31 thru_hole circle (at 1.27 ${def_neg}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.RUN})
        (pad 32 thru_hole circle (at 3.81 ${def_neg}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P22})
        (pad 33 thru_hole circle (at 6.35 ${def_neg}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND})
        (pad 34 thru_hole circle (at 8.89 ${def_neg}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P21})
        (pad 35 thru_hole circle (at 11.43 ${def_neg}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P20})
        (pad 36 thru_hole circle (at 13.97 ${def_neg}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P19})
        (pad 37 thru_hole circle (at 16.51 ${def_neg}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P18})
        (pad 38 thru_hole circle (at 19.05 ${def_neg}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND})
        (pad 39 thru_hole circle (at 21.59 ${def_neg}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P17})
        (pad 40 thru_hole circle (at 24.13 ${def_neg}8.89 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P16})

        (pad 41 thru_hole circle (at 24.13 ${def_neg}2.54 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.SWCLOCK})
        (pad 42 thru_hole circle (at 24.13 0 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND})
        (pad 43 thru_hole circle (at 24.13 ${def_pos}2.54 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.SWDIO})
      `;
    }

    function mounting_holes() {
      const drill = 2.1;
      const outline = 3.8;
      const vias_drill = 0.4;

      function mounting_hole(x, y) {
        const hole = `
          (pad "" thru_hole circle (at ${x} ${y} 0) (size ${outline} ${outline}) (drill ${drill}) (layers *.Cu *.Mask *.SilkS) ${p.GND})
        `;
        let vias = "";
        for (let i = 0; i < 8; i++) {
          const angle = (i * Math.PI) / 4;
          const via_x = x + Math.cos(angle) * ((outline + drill) / 4);
          const via_y = y + Math.sin(angle) * ((outline + drill) / 4);
          vias += `
            (pad "" thru_hole circle locked (at ${via_x} ${via_y}) (size ${vias_drill * 1.5} ${vias_drill * 1.5}) (drill ${vias_drill}) (layers *.Cu *.Mask) ${p.GND})
          `;
        }

        return `
          ${hole}
          ${vias}
        `;
      }

      return `
        ${mounting_hole(-23.5, -5.7)}
        ${mounting_hole(-23.5, 5.7)}
        ${mounting_hole(23.5, -5.7)}
        ${mounting_hole(23.5, 5.7)}
      `;
    }

    if (p.orientation == "down") {
      return `
        ${standard}
        ${pin_names("-", "", "F.SilkS")}
        ${pin_names("-", "", "B.SilkS")}
        ${pins("-", "")}
        ${mounting_holes()}
      )`;
    } else {
      return `
        ${standard}
        ${pin_names("-", "", "F.SilkS")}
        ${pin_names("-", "", "B.SilkS")}
        ${pins("", "-")}
        ${mounting_holes()}
      )`;
    }
  },
};
