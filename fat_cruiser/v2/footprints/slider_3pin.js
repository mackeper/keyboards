module.exports = {
  params: {
    designator: "T", // for Button
    from: undefined,
    from_text: "",
    to1: undefined,
    to1_text: "",
    to2: "",
    to2_text: "",
  },
  body: (p) => {

    const size = 1.7526;
    const drill = 1.0922;
    const height = 4.6;
    const width = 8.7;

    return `
      (module Slider3Pin (layer F.Cu) (tstamp 5BF2CC94)
          ${p.at /* parametric position */}
          ${"" /* footprint reference */}
          (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
          (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
          
          ${"" /* outline */}
          (fp_line (start ${-width/2} ${height/2}) (end ${width/2} ${height/2}) (layer F.SilkS) (width 0.15))
          (fp_line (start ${width/2} ${height/2}) (end ${width/2} ${-height/2}) (layer F.SilkS) (width 0.15))
          (fp_line (start ${width/2} ${-height/2}) (end ${-width/2} ${-height/2}) (layer F.SilkS) (width 0.15))
          (fp_line (start ${-width/2} ${-height/2}) (end ${-width/2} ${height/2}) (layer F.SilkS) (width 0.15))

          (fp_line (start ${-width/2} ${height/2}) (end ${width/2} ${height/2}) (layer B.SilkS) (width 0.15))
          (fp_line (start ${width/2} ${height/2}) (end ${width/2} ${-height/2}) (layer B.SilkS) (width 0.15))
          (fp_line (start ${width/2} ${-height/2}) (end ${-width/2} ${-height/2}) (layer B.SilkS) (width 0.15))
          (fp_line (start ${-width/2} ${-height/2}) (end ${-width/2} ${height/2}) (layer B.SilkS) (width 0.15))

          ${"" /* pins */}
          (pad 1 thru_hole circle (at 0 0 ${p.r}) (size ${size} ${size}) (drill ${drill}) (layers *.Cu *.SilkS *.Mask) ${p.from})
          (pad 2 thru_hole circle (at -2.54 0 ${p.r}) (size ${size} ${size}) (drill ${drill}) (layers *.Cu *.SilkS *.Mask) ${p.to1})
          (pad 3 thru_hole circle (at 2.54 0 ${p.r}) (size ${size} ${size}) (drill ${drill}) (layers *.Cu *.SilkS *.Mask) ${p.to2})

          ${""/* pin labels */}
          (fp_text user "${p.from_text}" (at 0 2 ${p.r+90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.1))))
          (fp_text user "${p.from_text}" (at 0 2 ${p.r+90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.1)) (justify mirror)))
          (fp_text user "${p.to1_text}" (at -2.54 3 ${p.r+90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.1))))
          (fp_text user "${p.to1_text}" (at -2.54 3 ${p.r+90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.1)) (justify mirror)))
          (fp_text user "${p.to2_text}" (at 2.54 3 ${p.r+90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.1))))
          (fp_text user "${p.to2_text}" (at 2.54 3 ${p.r+90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.1)) (justify mirror)))

      )
      `;
    },
};
