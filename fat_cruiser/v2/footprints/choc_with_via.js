// Kailh Choc PG1350
// Nets
//    from: corresponds to pin 1
//    to: corresponds to pin 2
// Params
//    hotswap: default is false
//      if true, will include holes and pads for Kailh choc hotswap sockets
//    reverse: default is false
//      if true, will flip the footprint such that the pcb can be reversible
//    keycaps: default is false
//      if true, will add choc sized keycap box around the footprint
//
// note: hotswap and reverse can be used simultaneously

module.exports = {
  params: {
    designator: "S",
    hotswap: false,
    reverse: false,
    keycaps: false,
    from: undefined,
    to: undefined,
    via: true,
    rotation: 0,
  },
  body: (p) => {
    const standard = `
      (module PG1350 (layer F.Cu) (tedit 5DD50112)
      ${p.at /* parametric position */}

      ${"" /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0 2.5 ${p.rotation}) (layer F.SilkS) ${p.ref_hide} (effects (font (size 0.8 0.8) (thickness 0.15))))
      (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text user "${p.ref}" (at 0 2.5 ${p.rotation}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
      (fp_text user "${p.ref}" (at 0 2.5 ${p.rotation}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify mirror)))

      ${"" /* middle shaft */}
      (pad "" np_thru_hole circle (at 0 0) (size 3.429 3.429) (drill 3.429) (layers *.Cu *.Mask))

      ${"" /* stabilizers */}
      (pad "" np_thru_hole circle (at 5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
      (pad "" np_thru_hole circle (at -5.5 0) (size 1.7018 1.7018) (drill 1.7018) (layers *.Cu *.Mask))
      `;

    function corner_marks(layer) {
      return `
        (fp_line (start -7 -6) (end -7 -7) (layer ${layer}) (width 0.15))
        (fp_line (start -7 7) (end -6 7) (layer ${layer}) (width 0.15))
        (fp_line (start -6 -7) (end -7 -7) (layer ${layer}) (width 0.15))
        (fp_line (start -7 7) (end -7 6) (layer ${layer}) (width 0.15))
        (fp_line (start 7 6) (end 7 7) (layer ${layer}) (width 0.15))
        (fp_line (start 7 -7) (end 6 -7) (layer ${layer}) (width 0.15))
        (fp_line (start 6 7) (end 7 7) (layer ${layer}) (width 0.15))
        (fp_line (start 7 -7) (end 7 -6) (layer ${layer}) (width 0.15))      
        `;
    }

    const keycap = `
      ${"" /* keycap marks */}
      (fp_line (start -9 -8.5) (end 9 -8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 -8.5) (end 9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9 8.5) (end -9 8.5) (layer Dwgs.User) (width 0.15))
      (fp_line (start -9 8.5) (end -9 -8.5) (layer Dwgs.User) (width 0.15))
      `;

    function pins(def_neg, def_pos, def_side) {
      if (p.hotswap) {
        return `
          ${"" /* holes */}
          (pad "" np_thru_hole circle (at ${def_pos}5 -3.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          (pad "" np_thru_hole circle (at 0 -5.95) (size 3 3) (drill 3) (layers *.Cu *.Mask))

          ${"" /* net pads */}
          (pad 1 smd rect (at ${def_neg}3.275 -5.95 ${p.r}) (size 2.6 2.6) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask)  ${p.from})
          (pad 2 smd rect (at ${def_pos}8.275 -3.75 ${p.r}) (size 2.6 2.6) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask)  ${p.to})

          ${"" /* vias */}
          ${
            p.via
              ? `
            (pad 1 thru_hole circle (at ${def_neg}3.275 -3.10) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.from})
            (pad 2 thru_hole circle (at ${def_pos}8.275 -0.90) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) ${p.to})
          `
              : ""
          }
        `;
      } else {
        return `
            ${"" /* pins */}
            (pad 1 thru_hole circle (at ${def_pos}5 -3.8) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.from})
            (pad 2 thru_hole circle (at ${def_pos}0 -5.9) (size 2.032 2.032) (drill 1.27) (layers *.Cu *.Mask) ${p.to})
          `;
      }
    }

    var result =`
      ${standard}
      ${p.keycaps ? keycap : ""}
      ${corner_marks("F.SilkS")}
      ${corner_marks("B.SilkS")}
    `;

    if (p.reverse) {
      result += `
        ${pins("", "-", "F")})
        `;
    } else {
      result += `
        ${pins("-", "", "B")})
        `;
    }

    return result;
  },
};
