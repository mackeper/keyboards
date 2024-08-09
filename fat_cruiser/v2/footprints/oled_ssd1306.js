module.exports = {
  params: {
    designator: "R",
  },
  body: (p) => {
    const width = 26.1;
    const height = 26.2;
    const holeDrillSize = 1.5;
    const holeSize = 2;
    const viasDistance = 2.54;
    const viaDrillSize = 1.0922;
    const viaSize = 1.7526;
    const layer = "F.SilkS";

    const effects = `(effects
        (font (size 0.8 0.8) (thickness 0.15))
        ${layer == "B.SilkS" ? "(justify mirror)" : ""}
      )`;

    return `
        (module OLED_SSD1306 (layer F.Cu) (tedit 5B24D78E)
            ${p.at /* parametric position */}

            ${"" /* footprint reference */}
            (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
            (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

            ${"" /* symbols */}
            (fp_line (start ${-width / 2} ${-height / 2}) (end ${width / 2} ${-height / 2}) (layer F.SilkS) (width 0.1))
            (fp_line (start ${width / 2} ${-height / 2}) (end ${width / 2} ${height / 2}) (layer F.SilkS) (width 0.1))
            (fp_line (start ${width / 2} ${height / 2}) (end ${-width / 2} ${height / 2}) (layer F.SilkS) (width 0.1))
            (fp_line (start ${-width / 2} ${height / 2}) (end ${-width / 2} ${-height / 2}) (layer F.SilkS) (width 0.1))

            ${"" /* mouting holes */} 
            (pad 1 thru_hole circle (at ${-width / 2 + holeSize / 2} ${height / 2 - holeSize / 2}) (size 2 2) (drill ${holeDrillSize}) (layers *.Cu *.Mask)) 
            (pad 2 thru_hole circle (at ${width / 2 - holeSize / 2} ${height / 2 - holeSize / 2}) (size 2 2) (drill ${holeDrillSize}) (layers *.Cu *.Mask)) 
            (pad 3 thru_hole circle (at ${width / 2 - holeSize / 2} ${-height / 2 + holeSize / 2}) (size 2 2) (drill ${holeDrillSize}) (layers *.Cu *.Mask))
            (pad 4 thru_hole circle (at ${-width / 2 + holeSize / 2} ${-height / 2 + holeSize / 2}) (size 2 2) (drill ${holeDrillSize}) (layers *.Cu *.Mask))

            ${"" /* vias */}
            (pad 5 thru_hole circle (at ${-viasDistance * 1.5} ${height / 2 - viasDistance}) (size ${viaSize} ${viaSize}) (drill ${viaDrillSize}) (layers *.Cu *.Mask))
            (pad 6 thru_hole circle (at ${-viasDistance * 0.5} ${height / 2 - viasDistance}) (size ${viaSize} ${viaSize}) (drill ${viaDrillSize}) (layers *.Cu *.Mask)) 
            (pad 7 thru_hole circle (at ${viasDistance * 0.5}  ${height / 2 - viasDistance}) (size ${viaSize} ${viaSize}) (drill ${viaDrillSize}) (layers *.Cu *.Mask))    
            (pad 8 thru_hole circle (at ${viasDistance * 1.5}  ${height / 2 - viasDistance}) (size ${viaSize} ${viaSize}) (drill ${viaDrillSize}) (layers *.Cu *.Mask)) 


            ${"" /* courtyard */} 
            (fp_text user "SSD1306" (at 0 ${height / 2 + 1} 0) (layer ${layer}) ${effects})
        )`;
  },
};
