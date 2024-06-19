// Raspberry Pi Pico rp2040 microcontroller
// Params
//  orientation: default is down
//    if down, power led will face the pcb
//    if up, power led will face away from pcb

module.exports = {
  params: {
    text: "text",
    rotation: 0,
    font_size: 0.8,
  },
  body: (p) => `
    (module "text" (layer "F.SilkS") (tedit 5B307E4C)
        ${p.at /* parametric position */}
        (fp_text user "${p.text}" (at 0 0 ${p.rotation}) (layer F.SilkS) (effects (font (size ${p.font_size} ${p.font_size}) (thickness 0.15))))
    )`,
};
