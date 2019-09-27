
# Patchwork Pattern

[![NPM](https://nodei.co/npm/patchwork-pattern.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/patchwork-pattern/)
[![npm version](https://badge.fury.io/js/patchwork-pattern.svg)](https://badge.fury.io/js/patchwork-pattern)
![license-isc](https://img.shields.io/github/license/giatro/patchwork-pattern.svg)

Inspired by [Generating Patchwork design pattern using javascrip](https://codeburst.io/generating-patchwork-design-patterns-using-javascript-a980ca094fd0)

## Install
```
npm install patchwork-pattern --save

```
## Usage
```js
import PatchworkPattern from 'patchwork-pattern';

class myComponent extends Component {
    render() {
        const options = { size: 200, steps: 10 };
        return (
            <img src={PatchworkPattern(options)} alt="" />
        );
    }
}
```
[Test on CodeSandbox](https://codesandbox.io/s/wonderful-bhabha-p7hlc?fontsize=14)

## Available options

| Option | Type | Default |
| ------ | ---- | ------- |
| size | integer | 500 |
| steps | integer | 10 |
| palettes | [[String]] | *see below* |

Default palettes:

```js
[
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
```
