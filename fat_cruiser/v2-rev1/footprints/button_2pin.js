module.exports = {
  params: {
    designator: "B", // for Button
    from: undefined,
    to: undefined,
    text: "",
  },
  body: (p) => {

    const drill = 1.0922;
    const height = 5.5;
    const width = 2.5;

    return `
      (module Button2pin (layer F.Cu) (tstamp 5BF2CC94)
        ${p.at /* parametric position */}
        ${"" /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

        (fp_line (start ${-width / 2} ${height / 2}) (end ${width / 2} ${height / 2}) (layer F.SilkS) (width 0.1))
        (fp_line (start ${width / 2} ${height / 2}) (end ${width / 2} ${-height / 2}) (layer F.SilkS) (width 0.1))
        (fp_line (start ${width / 2} ${-height / 2}) (end ${-width / 2} ${-height / 2}) (layer F.SilkS) (width 0.1))
        (fp_line (start ${-width / 2} ${-height / 2}) (end ${-width / 2} ${height / 2}) (layer F.SilkS) (width 0.1))

        (fp_line (start ${-width / 2} ${height / 2}) (end ${width / 2} ${height / 2}) (layer B.SilkS) (width 0.1))
        (fp_line (start ${width / 2} ${height / 2}) (end ${width / 2} ${-height / 2}) (layer B.SilkS) (width 0.1))
        (fp_line (start ${width / 2} ${-height / 2}) (end ${-width / 2} ${-height / 2}) (layer B.SilkS) (width 0.1))
        (fp_line (start ${-width / 2} ${-height / 2}) (end ${-width / 2} ${height / 2}) (layer B.SilkS) (width 0.1))

        (fp_text user "${p.text}" (at ${-width + 0.5} 0 90) (layer F.SilkS) (effects (font (size 1 1) (thickness 0.15))))
        (fp_text user "${p.text}" (at ${-width + 0.5} 0 90) (layer B.SilkS) (effects (font (size 1 1) (thickness 0.15)) (justify mirror)))

        ${"" /* pins */}
        (pad 1 thru_hole rect (at 0 -1.85 ${p.r}) (size 1.8 1.3) (drill ${drill}) (layers *.Cu *.SilkS *.Mask) ${p.from})
        (pad 2 thru_hole rect (at 0 1.85 ${p.r}) (size 1.8 1.3) (drill ${drill}) (layers *.Cu *.SilkS *.Mask) ${p.to})
      )
    `;
  },
};
