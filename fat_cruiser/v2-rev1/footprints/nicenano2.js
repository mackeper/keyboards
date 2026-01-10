module.exports = {
  params: {
    designator: "MCU",
    orientation: "down",
    ...Object.fromEntries(
      [
        // Left side
        "BAT_GND",
        "P006",
        "P008",
        "GND",
        "P017",
        "P020",
        "P022",
        "P024",
        "P100",
        "P011",
        "P104",
        "P106",

        // Right side
        "VBAT1",
        "VBAT2",
        "RESET",
        "EXT_VCC",
        "P031",
        "P029",
        "P002",
        "P115",
        "P113",
        "P111",
        "P010",
        "P009",

        // Horizontal pins
        "P101",
        "P102",
        "P107",
      ].map((pin) => [pin, { type: "net", value: pin }]),
    ),
  },
  body: (p) => {
    const standard = `
      (module NiceNano (layer F.Cu) (tedit 5B307E4C)
      ${p.at /* parametric position */}

      ${"" /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text user "${p.ref}" (at 0 0) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
      (fp_text user "${p.ref}" (at 0 0) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))

      ${"" /* illustration of the (possible) USB port overhang */}
      (fp_line (start -19.304 -3.81) (end -14.224 -3.81) (layer Dwgs.User) (width 0.15))
      (fp_line (start -19.304 3.81) (end -19.304 -3.81) (layer Dwgs.User) (width 0.15))
      (fp_line (start -14.224 3.81) (end -19.304 3.81) (layer Dwgs.User) (width 0.15))
      (fp_line (start -14.224 -3.81) (end -14.224 3.81) (layer Dwgs.User) (width 0.15))

      ${"" /* component outline */}
      (fp_line (start -17.78 8.89) (end 15.24 8.89) (layer F.SilkS) (width 0.15))
      (fp_line (start 15.24 8.89) (end 15.24 -8.89) (layer F.SilkS) (width 0.15))
      (fp_line (start 15.24 -8.89) (end -17.78 -8.89) (layer F.SilkS) (width 0.15))
      (fp_line (start -17.78 -8.89) (end -17.78 8.89) (layer F.SilkS) (width 0.15))

      (fp_line (start -17.78 8.89) (end 15.24 8.89) (layer B.SilkS) (width 0.15))
      (fp_line (start 15.24 8.89) (end 15.24 -8.89) (layer B.SilkS) (width 0.15))
      (fp_line (start 15.24 -8.89) (end -17.78 -8.89) (layer B.SilkS) (width 0.15))
      (fp_line (start -17.78 -8.89) (end -17.78 8.89) (layer B.SilkS) (width 0.15))
      `;
    const font_size = "(font (size 0.8 0.8) (thickness 0.1))";
    const left_pins = [
      { name: "GND", pad_type: "rect" },
      { name: "P006", pad_type: "circle" },
      { name: "P008", pad_type: "circle" },
      { name: "GND", pad_type: "circle" },
      { name: "GND", pad_type: "circle" },
      { name: "P017", pad_type: "circle" },
      { name: "P020", pad_type: "circle" },
      { name: "P022", pad_type: "circle" },
      { name: "P024", pad_type: "circle" },
      { name: "P100", pad_type: "circle" },
      { name: "P011", pad_type: "circle" },
      { name: "P104", pad_type: "circle" },
      { name: "P106", pad_type: "circle" },
    ];
    const right_pins = [
      { name: "VBAT1", pad_type: "circle" },
      { name: "VBAT2", pad_type: "circle" },
      { name: "GND", pad_type: "circle" },
      { name: "RESET", pad_type: "circle" },
      { name: "EXT_VCC", pad_type: "circle" },
      { name: "P031", pad_type: "circle" },
      { name: "P029", pad_type: "circle" },
      { name: "P002", pad_type: "circle" },
      { name: "P115", pad_type: "circle" },
      { name: "P113", pad_type: "circle" },
      { name: "P111", pad_type: "circle" },
      { name: "P010", pad_type: "circle" },
      { name: "P009", pad_type: "circle" },
    ];
    const horizontal_pins = [
      { name: "P101", pad_type: "circle" },
      { name: "P102", pad_type: "circle" },
      { name: "P107", pad_type: "circle" },
    ];

    const pin_next_to_horizontal = "P011";

    const three_horizontal = (pins) => {
      const offsets = pins.map((_, i) => 7.62 - 2.54 + i * -2.54);
      const vertical_offset = -16.51 + 10 * 2.54;

      const pinText = pins
        .map((pin, i) => {
          return `
            (fp_text user ${pin.name} (at  ${vertical_offset - 2} ${offsets[i] - 1.7} ${p.r - 45}) (layer F.SilkS) (effects ${font_size}))
            (fp_text user ${pin.name} (at  ${vertical_offset - 2} ${offsets[i] - 1.7} ${p.r - 45}) (layer B.SilkS) (effects ${font_size} (justify mirror)))
          `;
        })
        .join("");

      const pinPads = pins
        .map(
          (pin, i) => `
        (pad ${i} thru_hole ${pin.pad_type} (at ${vertical_offset} ${offsets[i]} ${p.r}) (size 1.7526 1.7526) (drill 1.0922) 
        (layers *.Cu *.SilkS *.Mask) ${p[pin.name]})
      `,
        )
        .join("");

      return pinText + pinPads;
    };

    const draw_pins = (pins, neg) => {
      const offsets = pins.map((_, i) => -16.51 + i * 2.54);

      const pinText = pins
        .map((pin, i) => {
          if (pin.name === pin_next_to_horizontal) {
            return `
            (fp_text user ${pin.name} (at ${offsets[i] + 1.5} ${neg}5.5 ${p.r + 90}) (layer F.SilkS) (effects ${font_size}))
            (fp_text user ${pin.name} (at ${offsets[i] + 1.5} ${neg}5.5 ${p.r + 90}) (layer B.SilkS) (effects ${font_size} (justify mirror)))
          `;
          }
          return `
            (fp_text user ${pin.name} (at ${offsets[i]} ${neg}5 ${p.r + 90}) (layer F.SilkS) (effects ${font_size}))
            (fp_text user ${pin.name} (at ${offsets[i]} ${neg}5 ${p.r + 90}) (layer B.SilkS) (effects ${font_size} (justify mirror)))
          `;
        })
        .join("");

      const pinPads = pins
        .map(
          (pin, i) => `
        (pad ${i} thru_hole ${pin.pad_type} (at ${offsets[i]} ${neg}7.62 ${p.r}) (size 1.7526 1.7526) (drill 1.0922) 
        (layers *.Cu *.SilkS *.Mask) ${p[pin.name]})
      `,
        )
        .join("");

      return pinText + pinPads;
    };

    return `
      ${standard}
      ${p.at}
      (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      ${draw_pins(left_pins, "")}
      ${draw_pins(right_pins, "-")}
      ${three_horizontal(horizontal_pins)}
      )
    `;
  },
};
