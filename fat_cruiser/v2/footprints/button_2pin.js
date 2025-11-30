module.exports = {
  params: {
    designator: "B", // for Button
    from: undefined,
    to: undefined,
  },
  body: (p) => `
    
    (module Button2pin (layer F.Cu) (tstamp 5BF2CC94)
        ${p.at /* parametric position */}
        ${"" /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
        
        ${"" /* outline */}
        (fp_line (start -1.25 2.75) (end 1.25 2.75) (layer F.SilkS) (width 0.15))
        (fp_line (start 1.25 2.75) (end 1.25 -2.75) (layer F.SilkS) (width 0.15))
        (fp_line (start 1.25 -2.75) (end -1.25 -2.75) (layer F.SilkS) (width 0.15))
        (fp_line (start -1.25 -2.75) (end -1.25 2.75) (layer F.SilkS) (width 0.15))

        (fp_line (start -1.25 2.75) (end 1.25 2.75) (layer B.SilkS) (width 0.15))
        (fp_line (start 1.25 2.75) (end 1.25 -2.75) (layer B.SilkS) (width 0.15))
        (fp_line (start 1.25 -2.75) (end -1.25 -2.75) (layer B.SilkS) (width 0.15))
        (fp_line (start -1.25 -2.75) (end -1.25 2.75) (layer B.SilkS) (width 0.15))
        
        ${"" /* pins */}
        (pad 1 thru_hole rect (at 0 -1.85 ${p.r}) (size 1.8 1.3) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.from})
        (pad 2 thru_hole rect (at 0 1.85 ${p.r}) (size 1.8 1.3) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.to})
    )
    `,
};
