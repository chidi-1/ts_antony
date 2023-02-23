"use strict";
exports.__esModule = true;
var bouncer_1 = require("./bouncer");
var functions_1 = require("./functions");
var client_1 = require("./client");
var bouncer = new bouncer_1.Bouncer({
    minAge: 20,
    permittedColor: client_1.pantsColor.yellow,
    rules: [functions_1.checkAge, functions_1.checkColor]
});
console.log(bouncer.verify({ age: 22, color: client_1.pantsColor.red }));
