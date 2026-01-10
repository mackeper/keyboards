module.exports = {
  params: {
    designator: 'D',
    from: undefined,
    to: undefined,
    tht: true,
    smd: true,
    side: 'B',
    internal_shift: [0, 0],
  },
  body: p => {
    const ix = p.internal_shift[0];
    const iy = p.internal_shift[1];
    var diode = `
      (module ComboDiode (layer F.Cu) (tedit 5B24D78E)

      ${p.at /* parametric position */}

      ${'' /* footprint reference */}
      (fp_text reference "${p.ref}" (at ${ix} ${iy}) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text value "" (at ${ix} ${iy}) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
      (fp_text user "${p.ref}" (at ${ix} ${1.6 + iy} ${p.r}) (layer ${p.side}.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))

      ${''/* diode symbols */}
      (fp_line (start ${0.25 + ix} ${iy}) (end ${0.75 + ix} ${iy}) (layer ${p.side}.SilkS) (width 0.1))
      (fp_line (start ${0.25 + ix} ${0.4 + iy}) (end ${-0.35 + ix} ${iy}) (layer ${p.side}.SilkS) (width 0.1))
      (fp_line (start ${0.25 + ix} ${-0.4 + iy}) (end ${0.25 + ix} ${0.4 + iy}) (layer ${p.side}.SilkS) (width 0.1))
      (fp_line (start ${-0.35 + ix} ${iy}) (end ${0.25 + ix} ${-0.4 + iy}) (layer ${p.side}.SilkS) (width 0.1))
      (fp_line (start ${-0.35 + ix} ${iy}) (end ${-0.35 + ix} ${0.55 + iy}) (layer ${p.side}.SilkS) (width 0.1))
      (fp_line (start ${-0.35 + ix} ${iy}) (end ${-0.35 + ix} ${-0.55 + iy}) (layer ${p.side}.SilkS) (width 0.1))
      (fp_line (start ${-0.75 + ix} ${iy}) (end ${-0.35 + ix} ${iy}) (layer ${p.side}.SilkS) (width 0.1))
    `

    if (p.smd) {
      diode += `
        ${'' /* silkscreen outline */}
        (fp_line (start ${-2.4 + ix} ${-0.9 + iy}) (end ${-0.3 + ix} ${-0.9 + iy}) (layer ${p.side}.SilkS) (width 0.1))
        (fp_line (start ${0.3 + ix} ${-0.9 + iy}) (end ${2.4 + ix} ${-0.9 + iy}) (layer ${p.side}.SilkS) (width 0.1))
        (fp_line (start ${2.4 + ix} ${-0.9 + iy}) (end ${2.4 + ix} ${0.9 + iy}) (layer ${p.side}.SilkS) (width 0.1))
        (fp_line (start ${2.4 + ix} ${0.9 + iy}) (end ${0.3 + ix} ${0.9 + iy}) (layer ${p.side}.SilkS) (width 0.1))
        (fp_line (start ${-0.3 + ix} ${0.9 + iy}) (end ${-2.4 + ix} ${0.9 + iy}) (layer ${p.side}.SilkS) (width 0.1))
        (fp_line (start ${-2.4 + ix} ${0.9 + iy}) (end ${-2.4 + ix} ${-0.9 + iy}) (layer ${p.side}.SilkS) (width 0.1))

        ${''/* SMD pads on both sides */}
        (pad 1 smd rect (at ${-1.65 + ix} ${iy} ${p.r}) (size 0.9 1.2) (layers ${p.side}.Cu F.Paste F.Mask) ${p.to})
        (pad 2 smd rect (at ${1.65 + ix} ${iy} ${p.r}) (size 0.9 1.2) (layers ${p.side}.Cu F.Paste F.Mask) ${p.from})
      `
    }

    if (p.tht) {
      diode += `
        ${''/* THT terminals */}
        (pad 1 thru_hole rect (at ${-3.81 + ix} ${iy} ${p.r}) (size 1.778 1.778) (drill 0.9906) (layers *.Cu *.Mask) ${p.to})
        (pad 2 thru_hole circle (at ${3.81 + ix} ${iy} ${p.r}) (size 1.905 1.905) (drill 0.9906) (layers *.Cu *.Mask) ${p.from})
      `
    }

    return diode + `)`;
  }
}
