"use strict";
exports.__esModule = true;
exports.checkColor = exports.checkAge = void 0;
function checkAge(client, sample) {
    if (sample.minAge) {
        return (client.age > sample.minAge);
    }
}
exports.checkAge = checkAge;
function checkColor(client, sample) {
    if (sample.permittedColor) {
        return (client.color === sample.permittedColor);
    }
}
exports.checkColor = checkColor;
