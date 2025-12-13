module.exports = {
  params: {
    designator: "OLED",
    SDA: { type: "net", value: "SDA" },
    SCL: { type: "net", value: "SCL" },
    VCC: { type: "net", value: "VCC" },
    GND: { type: "net", value: "GND" },
  },
  body: (p) => {
    const width1 = 26.1; // https://splitkb.com/products/oled-display?variant=31226608549965 SKU CMP-OD1-064-SNG
    const width2 = 27.6; // AZDelivery 0.96" OLED
    const height1 = 26.2;
    const height2 = 27;
    const width = (width1 + width2) / 2;
    const height = (height1 + height2) / 2;
    const holeDrillSize = 2;
    const holeDrillSize2 = 4;
    const holeSize = 6;
    const holeSize2 = 8;
    const viasDistance = 2.54;
    const viaDrillSize = 1.0922;
    const viaSize = 1.7526;

    const effects = (layer) => `(effects
        (font (size 0.8 0.8) (thickness 0.15))
        ${layer == "B.SilkS" ? "(justify mirror)" : ""}
      )`;

    const via = (n, x, y, net) => `
        (fp_text user ${net.name} (at ${x} ${y - 2.5} 90) (layer F.SilkS) ${effects("F.SilkS")})
        (fp_text user ${net.name} (at ${x} ${y - 2.5} 90) (layer B.SilkS) ${effects("B.SilkS")})
        (pad ${n} thru_hole circle (at ${x} ${y}) (size ${viaSize} ${viaSize}) (drill ${viaDrillSize}) (layers *.Cu *.Mask) ${net})
    `;

    return `
        (module OLED_SSD1306 (layer F.Cu) (tedit 5B24D78E)
            ${p.at /* parametric position */}

            ${"" /* footprint reference */}
            (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
            (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
            (fp_text user "${p.ref}" (at 0 0) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
            (fp_text user "${p.ref}" (at 0 0) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))

            ${"" /* symbols */}
            (fp_line (start ${-width1 / 2} ${-height1 / 2}) (end ${width1 / 2} ${-height1 / 2}) (layer F.SilkS) (width 0.1))
            (fp_line (start ${width1 / 2} ${-height1 / 2}) (end ${width1 / 2} ${height1 / 2}) (layer F.SilkS) (width 0.1))
            (fp_line (start ${width1 / 2} ${height1 / 2}) (end ${-width1 / 2} ${height1 / 2}) (layer F.SilkS) (width 0.1))
            (fp_line (start ${-width1 / 2} ${height1 / 2}) (end ${-width1 / 2} ${-height1 / 2}) (layer F.SilkS) (width 0.1))

            (fp_line (start ${-width1 / 2} ${-height1 / 2}) (end ${width1 / 2} ${-height1 / 2}) (layer B.SilkS) (width 0.1))
            (fp_line (start ${width1 / 2} ${-height1 / 2}) (end ${width1 / 2} ${height1 / 2}) (layer B.SilkS) (width 0.1))
            (fp_line (start ${width1 / 2} ${height1 / 2}) (end ${-width1 / 2} ${height1 / 2}) (layer B.SilkS) (width 0.1))
            (fp_line (start ${-width1 / 2} ${height1 / 2}) (end ${-width1 / 2} ${-height1 / 2}) (layer B.SilkS) (width 0.1))

            ${"" /* mouting holes */} 
            ${"" /* Why 1.6? */}
            ${"" /* Use normal holeSize for positioning */}
            ${"" /* (pad 1 thru_hole circle (at ${-width1 / 2 + holeSize / 2} ${height1 / 2 - holeSize / 2}) (size ${holeSize - 1.6} ${holeSize - 1.6}) (drill ${holeDrillSize}) (layers *.Cu *.Mask) ${p.GND}) */}
            ${"" /* (pad 1 thru_hole circle (at ${-width2 / 2 + holeSize / 2} ${height2 / 2 - holeSize / 2}) (size ${holeSize - 1.6} ${holeSize - 1.6}) (drill ${holeDrillSize}) (layers *.Cu *.Mask) ${p.GND}) */}
            (pad 1 thru_hole circle (at ${-width / 2 + holeSize / 2} ${height / 2 - holeSize / 2}) (size ${holeSize2 - 1.6} ${holeSize2 - 1.6}) (drill ${holeDrillSize2}) (layers *.Cu *.Mask) ${p.GND}) 

            ${"" /* (pad 2 thru_hole circle (at ${width1 / 2 - holeSize / 2} ${height1 / 2 - holeSize / 2}) (size ${holeSize - 1.6} ${holeSize - 1.6}) (drill ${holeDrillSize}) (layers *.Cu *.Mask) ${p.GND}) */}
            ${"" /* (pad 2 thru_hole circle (at ${width2 / 2 - holeSize / 2} ${height2 / 2 - holeSize / 2}) (size ${holeSize - 1.6} ${holeSize - 1.6}) (drill ${holeDrillSize}) (layers *.Cu *.Mask) ${p.GND}) */}
            (pad 2 thru_hole circle (at ${width / 2 - holeSize / 2} ${height / 2 - holeSize / 2}) (size ${holeSize2 - 1.6} ${holeSize2 - 1.6}) (drill ${holeDrillSize2}) (layers *.Cu *.Mask) ${p.GND}) 

            ${"" /* (pad 3 thru_hole circle (at ${width1 / 2 - holeSize / 2} ${-height1 / 2 + holeSize / 2}) (size ${holeSize - 1.6} ${holeSize - 1.6}) (drill ${holeDrillSize}) (layers *.Cu *.Mask) ${p.GND})*/}
            ${"" /* (pad 3 thru_hole circle (at ${width2 / 2 - holeSize / 2} ${-height2 / 2 + holeSize / 2}) (size ${holeSize - 1.6} ${holeSize - 1.6}) (drill ${holeDrillSize}) (layers *.Cu *.Mask) ${p.GND})*/}
            (pad 3 thru_hole circle (at ${width / 2 - holeSize / 2} ${-height / 2 + holeSize / 2}) (size ${holeSize2 - 1.6} ${holeSize2 - 1.6}) (drill ${holeDrillSize2}) (layers *.Cu *.Mask) ${p.GND})

            ${"" /* (pad 4 thru_hole circle (at ${-width1 / 2 + holeSize / 2} ${-height1 / 2 + holeSize / 2}) (size ${holeSize - 1.6} ${holeSize - 1.6}) (drill ${holeDrillSize}) (layers *.Cu *.Mask) ${p.GND})*/}
            ${"" /* (pad 4 thru_hole circle (at ${-width2 / 2 + holeSize / 2} ${-height2 / 2 + holeSize / 2}) (size ${holeSize - 1.6} ${holeSize - 1.6}) (drill ${holeDrillSize}) (layers *.Cu *.Mask) ${p.GND})*/}
            (pad 4 thru_hole circle (at ${-width / 2 + holeSize / 2} ${-height / 2 + holeSize / 2}) (size ${holeSize2 - 1.6} ${holeSize2 - 1.6}) (drill ${holeDrillSize2}) (layers *.Cu *.Mask) ${p.GND})

            ${"" /* vias */}
            ${via(5, -viasDistance * 1.5, height1 / 2 - 1.65, p.SDA)}
            ${via(6, -viasDistance * 0.5, height1 / 2 - 1.65, p.SCL)} 
            ${via(7, viasDistance * 0.5, height1 / 2 - 1.65, p.VCC)}
            ${via(8, viasDistance * 1.5, height1 / 2 - 1.65, p.GND)}


            ${"" /* text */} 
            (fp_text user "SSD1306" (at 0 1 0) (layer F.SilkS) ${effects("F.SilkS")})
            (fp_text user "SSD1306" (at 0 1 0) (layer B.SilkS) ${effects("B.SilkS")})
        )`;
  },
};
