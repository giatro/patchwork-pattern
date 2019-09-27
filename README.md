
# Patchwork Pattern

[![NPM](https://nodei.co/npm/patchwork-pattern.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/patchwork-pattern/)
[![npm version](https://badge.fury.io/js/patchwork-pattern.svg)](https://badge.fury.io/js/patchwork-pattern)
![license-isc](https://img.shields.io/github/license/giatro/patchwork-pattern.svg)

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

## Available options

| Option | Type | Default |
| ------ | ---- | ------- |
| size | integer | 500 |
| steps | integer | 10 |
| palettes | [[String]] | *see source code* |
