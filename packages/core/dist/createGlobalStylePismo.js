"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("./styled-components");
var polished_1 = require("polished");
var createGlobalStylePismo = function (customStyle) { return styled_components_1.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n  ", "\n  body {\n    font-family: 'Lato', sans-serif;\n    background-color: ", ";\n  }\n"], ["\n  ", "\n  ", "\n  body {\n    font-family: 'Lato', sans-serif;\n    background-color: ", ";\n  }\n"])), customStyle, polished_1.normalize(), function (_a) {
    var theme = _a.theme;
    return theme.palette.secondary[2];
}); };
exports.default = createGlobalStylePismo;
var templateObject_1;
//# sourceMappingURL=createGlobalStylePismo.js.map