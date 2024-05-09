// https://github.com/MvEerd/ergogen/blob/mveerd/src/footprints/mountinghole.js
module.exports = {
  params: {
    class: "m2",
    drill: 2.2,
    outline: 4.4,
    vias: true,
    vias_drill: 0.4,
    net: { type: "net", value: "GND" },
  },
  body: (p) => {
    const sizes = {
      m1: { drill: 1.2, outline: 2.4, vias_drill: 0.2 },
      m2: { drill: 2.2, outline: 4.4, vias_drill: 0.4 },
      m3: { drill: 3.2, outline: 6.4, vias_drill: 0.6 },
    };

    // Override parameters if a class is given
    if (p.class in sizes) {
      p = { ...p, ...sizes[p.class] };
    }

    const courtyard_radius = p.drill + 0.25;
    const silkscreen = `
      (fp_text reference "${p.ref}" (at 0 -3.2) (layer "F.SilkS") ${p.ref_hide}
        (effects (font (size 1 1) (thickness 0.15)))
      )`;

    const courtyard = `
      (fp_circle (center 0 0) (end ${courtyard_radius} 0) (layer "F.CrtYd") (width 0.05) (fill none))`;

    const drill = `
      (pad "" thru_hole circle locked (at 0 0) (size ${p.outline} ${p.outline}) (drill ${p.drill}) (layers *.Cu *.Mask) ${p.net})
    `;

    let vias = "";
    for (let i = 0; i < 8; i++) {
      const angle = (i * Math.PI) / 4;
      const x = Math.cos(angle) * ((p.outline + p.drill) / 4);
      const y = Math.sin(angle) * ((p.outline + p.drill) / 4);
      vias += `
        (pad "" thru_hole circle locked (at ${x} ${y}) (size ${p.vias_drill * 1.5} ${p.vias_drill * 1.5}) (drill ${p.vias_drill}) (layers *.Cu *.Mask) ${p.net})
      `;
    }

    return `
    (module "MountingHole_Pad_Via" (layer "F.Cu") (tedit 56DDB9C7)
      ${p.at /* parametric position */}
      ${silkscreen}
      ${courtyard}
      ${drill}
      ${vias}
    )`;
  },
};
