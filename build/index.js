module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var PatchworkPattern = function PatchworkPattern(options) {
    var defOpts = {
        size: 500,
        steps: 10,
        palettes: [["#554236", "#F77825", "#D3CE3D", "#F1EFA5", "#60B99A", "#554236", "#F77825", "#D3CE3D"], // https://www.colourlovers.com/palette/940086/mystery_machine
        ["#00A0B0", "#6A4A3C", "#CC333F", "#EB6841", "#EDC951", "#00A0B0", "#6A4A3C", "#CC333F"], // https://www.colourlovers.com/palette/1473/Ocean_Five
        ["#69D2E7", "#A7DBD8", "#E0E4CC", "#F38630", "#FA6900", "#69D2E7", "#A7DBD8", "#E0E4CC"], // https://www.colourlovers.com/palette/92095/Giant_Goldfish
        ["#FE4365", "#FC9D9A", "#F9CDAD", "#C8C8A9", "#83AF9B", "#FE4365", "#FC9D9A", "#F9CDAD"], // https://www.colourlovers.com/palette/629637/()
        ["#ECD078", "#D95B43", "#C02942", "#542437", "#53777A", "#ECD078", "#D95B43", "#C02942"], // https://www.colourlovers.com/palette/694737/Thought_Provoking
        ["#556270", "#4ECDC4", "#C7F464", "#FF6B6B", "#C44D58", "#556270", "#4ECDC4", "#C7F464"], // https://www.colourlovers.com/palette/1930/cheer_up_emo_kid
        ["#490A3D", "#BD1550", "#E97F02", "#F8CA00", "#8A9B0F", "#490A3D", "#BD1550", "#E97F02"], // https://www.colourlovers.com/palette/848743/(_”_)
        ["#594F4F", "#547980", "#45ADA8", "#9DE0AD", "#E5FCC2", "#594F4F", "#547980", "#45ADA8"], // https://www.colourlovers.com/palette/443995/i_demand_a_pancake
        ["#FF4E50", "#FC913A", "#F9D423", "#EDE574", "#E1F5C4", "#FF4E50", "#FC913A", "#F9D423"], // https://www.colourlovers.com/palette/937624/Dance_To_Forg
        ["#413E4A", "#73626E", "#B38184", "#F0B49E", "#F7E4BE", "#413E4A", "#73626E", "#B38184"] // https://www.colourlovers.com/palette/723615/clairedelune
        ]
    };

    var _Object$assign = Object.assign({}, defOpts, options),
        size = _Object$assign.size,
        steps = _Object$assign.steps,
        palettes = _Object$assign.palettes;

    var shuffle = function shuffle(array) {
        return array.sort(function () {
            return Math.random() - 0.5;
        });
    };
    var tri = function tri(xy0, xy1, xy2, color) {
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
    var tile = function tile(row, col, size, colors) {
        shuffle(colors);
        var c0 = colors[0];
        var c1 = colors[1] || colors[0];
        var rotation = Math.round(Math.random());
        if (rotation) {
            tri([col * size, row * size], [col * size, row * size + size], [col * size + size, row * size], c0);
            tri([col * size + size, row * size], [col * size + size, row * size + size], [col * size, row * size + size], c1);
        } else {
            tri([col * size, row * size], [col * size + size, row * size], [col * size + size, row * size + size], c0);
            tri([col * size, row * size], [col * size, row * size + size], [col * size + size, row * size + size], c1);
        }
    };
    var canvas = document.createElement('canvas');
    var palette = shuffle(palettes)[0];
    canvas.width = size;
    canvas.height = size;
    var ctx = canvas.getContext('2d');
    for (var i = 0; i < steps; i++) {
        for (var j = 0; j < steps; j++) {
            tile(i, j, size / steps, palette);
        }
    }
    return canvas.toDataURL();
};
exports.default = PatchworkPattern;

/***/ })
/******/ ]);