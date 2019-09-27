const PatchworkPattern = (options) => {
    const defOpts = {
        size: 500,
        steps: 10,
        palettes: [
            ["#554236", "#F77825", "#D3CE3D", "#F1EFA5", "#60B99A", "#554236", "#F77825", "#D3CE3D"], // https://www.colourlovers.com/palette/940086/mystery_machine
            ["#00A0B0", "#6A4A3C", "#CC333F", "#EB6841", "#EDC951", "#00A0B0", "#6A4A3C", "#CC333F"], // https://www.colourlovers.com/palette/1473/Ocean_Five
            ["#69D2E7", "#A7DBD8", "#E0E4CC", "#F38630", "#FA6900", "#69D2E7", "#A7DBD8", "#E0E4CC"], // https://www.colourlovers.com/palette/92095/Giant_Goldfish
            ["#FE4365", "#FC9D9A", "#F9CDAD", "#C8C8A9", "#83AF9B", "#FE4365", "#FC9D9A", "#F9CDAD"], // https://www.colourlovers.com/palette/629637/()
            ["#ECD078", "#D95B43", "#C02942", "#542437", "#53777A", "#ECD078", "#D95B43", "#C02942"], // https://www.colourlovers.com/palette/694737/Thought_Provoking
            ["#556270", "#4ECDC4", "#C7F464", "#FF6B6B", "#C44D58", "#556270", "#4ECDC4", "#C7F464"], // https://www.colourlovers.com/palette/1930/cheer_up_emo_kid
            ["#490A3D", "#BD1550", "#E97F02", "#F8CA00", "#8A9B0F", "#490A3D", "#BD1550", "#E97F02"], // https://www.colourlovers.com/palette/848743/(_”_)
            ["#594F4F", "#547980", "#45ADA8", "#9DE0AD", "#E5FCC2", "#594F4F", "#547980", "#45ADA8"], // https://www.colourlovers.com/palette/443995/i_demand_a_pancake
            ["#FF4E50", "#FC913A", "#F9D423", "#EDE574", "#E1F5C4", "#FF4E50", "#FC913A", "#F9D423"], // https://www.colourlovers.com/palette/937624/Dance_To_Forg
            ["#413E4A", "#73626E", "#B38184", "#F0B49E", "#F7E4BE", "#413E4A", "#73626E", "#B38184"]  // https://www.colourlovers.com/palette/723615/clairedelune
        ]
    };
    const { size, steps, palettes } = Object.assign({}, defOpts, options);
    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };
    const tri = (xy0, xy1, xy2, color) => {
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(xy0[0], xy0[1]);
        ctx.lineTo(xy1[0], xy1[1]);
        ctx.lineTo(xy2[0], xy2[1]);
        ctx.lineTo(xy0[0], xy0[1]);
        ctx.fill();
        ctx.stroke();
    };
    const tile = (row, col, size, colors) => {
        shuffle(colors);
        const c0 = colors[0];
        const c1 = colors[1] || colors[0];
        const rotation = Math.round(Math.random());
        if (rotation) {
            tri([col * size, row * size], [col * size, row * size + size], [col * size + size, row * size], c0);
            tri([col * size + size, row * size], [col * size + size, row * size + size], [col * size, row * size + size], c1);
        } else {
            tri([col * size, row * size], [col * size + size, row * size], [col * size + size, row * size + size], c0);
            tri([col * size, row * size], [col * size, row * size + size], [col * size + size, row * size + size], c1);
        }
    };
    const canvas = document.createElement('canvas');
    const palette = (shuffle(palettes))[0];
    canvas.width = size;
    canvas.height = size;
    var ctx = canvas.getContext('2d');
    for (let i = 0; i < steps; i++) {
        for (let j = 0; j < steps; j++) {
            tile(i, j, size / steps, palette);
        }
    }
    return canvas.toDataURL();
};
export default PatchworkPattern;
