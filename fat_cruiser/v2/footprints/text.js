// Raspberry Pi Pico rp2040 microcontroller
// Params
//  orientation: default is down
//    if down, power led will face the pcb
//    if up, power led will face away from pcb

module.exports = {
  params: {
    text: "text",
    rotation: 0,
  },
  body: (p) => `
    (module "text" (layer "F.SilkS") (tedit 5B307E4C)
        ${p.at /* parametric position */}
        (fp_text user "${p.text}" (at 0 0 ${p.rotation}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15))))
    )`,
};
