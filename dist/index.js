"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const miniswitch = (what, cases, def) => { var _a, _b; return ((_b = (_a = cases[what]) !== null && _a !== void 0 ? _a : def) !== null && _b !== void 0 ? _b : (() => undefined))(); };
exports.default = miniswitch;
