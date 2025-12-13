module.exports = {
  params: {
    designator: "T",
    text: "text",
    rotation: 0,
    add_mirror: false,
    font_size: 0.8,
  },
  body: (p) => {
    var module_start = `
      (module "text" (layer "F.SilkS") (tedit 5B307E4C)
          ${"" /* footprint reference */}
          (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
          (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
    `;

    var text_content = `
        ${p.at /* parametric position */}
        (fp_text user "${p.text}" (at 0 0 ${p.rotation}) (layer F.SilkS) (effects (font (size ${p.font_size} ${p.font_size}) (thickness 0.15))))
    `;

    if (p.add_mirror) {
      text_content += `
        (fp_text user "${p.text}" (at 0 0 ${p.rotation}) (layer B.SilkS) (effects (font (size ${p.font_size} ${p.font_size}) (thickness 0.15)) (justify mirror)))
      `;
    }

    var module_end = `)`;

    return module_start + text_content + module_end;
  },
};
