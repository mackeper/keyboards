module.exports = {
  params: {
    designator: "R",
    from: undefined,
    to: undefined,
  },
  body: (p) => `
    (module ComboResistor (layer F.Cu) (tedit 5B24D78E)
        ${p.at /* parametric position */}

        ${"" /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))

        ${"" /* symbols */}
        (fp_line (start 0.50 0) (end 0.75 0) (layer F.SilkS) (width 0.1))
        (fp_line (start -0.50 0) (end -0.75 0) (layer F.SilkS) (width 0.1))

        (fp_line (start 0.50 0.3) (end 0.50 -0.3) (layer F.SilkS) (width 0.1))
        (fp_line (start -0.50 0.3) (end -0.50 -0.3) (layer F.SilkS) (width 0.1))

        (fp_line (start 0.50 0.3) (end -0.50 0.3) (layer F.SilkS) (width 0.1))
        (fp_line (start 0.50 -0.3) (end -0.50 -0.3) (layer F.SilkS) (width 0.1))

        ${"" /* SMD pads on both sides */}
        (pad 1 smd rect (at -1.65 0 ${p.r}) (size 0.9 1.2) (layers *.Cu *.Paste *.Mask) ${p.to})
        (pad 2 smd rect (at 1.65 0 ${p.r}) (size 0.9 1.2) (layers *.Cu *.Paste *.Mask) ${p.from})

        ${"" /* THT terminals */}
        (pad 1 thru_hole circle (at -3.81 0 ${p.r}) (size 1.778 1.778) (drill 0.9906) (layers *.Cu *.Mask) ${p.to})
        (pad 2 thru_hole circle (at 3.81 0 ${p.r}) (size 1.905 1.905) (drill 0.9906) (layers *.Cu *.Mask) ${p.from})
    )`,
};
