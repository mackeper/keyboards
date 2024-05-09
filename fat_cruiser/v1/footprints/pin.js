module.exports = {
  params: {
    drill: 1.0922,
    outline: 1.7526,
    value: "GND", // Value should be the same as the net, problem with the net on silkscreen
    net: { type: "net", value: "GND" },
  },
  body: (p) => {
    const silkscreen = `
      (fp_text reference "${p.ref}" (at 0 1.47) (layer F.SilkS) ${p.ref_hide}
        (effects (font (size 0.5 0.5) (thickness 0.15)))
      )
      (fp_text user ${p.value} (at 0 -1.47) (layer F.SilkS) (effects (font (size 0.5 0.5) (thickness 0.15))))
      (fp_text user ${p.value} (at 0 -1.47) (layer B.SilkS) (effects (font (size 0.5 0.5) (thickness 0.15)) (justify mirror)))
    `;

    let pin = `
        (pad "1" thru_hole circle locked (at 0 0) (size ${p.outline} ${p.outline}) (drill ${p.drill}) (layers *.Cu *.SilkS *.Mask) ${p.net})
      `;

    return `
    (module "MountingHole_Pad_Via" (layer "F.Cu") (tedit 56DDB9C7)
      ${p.at /* parametric position */}
      ${silkscreen}
      ${pin}
    )`;
  },
};
