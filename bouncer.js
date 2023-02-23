"use strict";
exports.__esModule = true;
exports.Bouncer = void 0;
var Bouncer = /** @class */ (function () {
    function Bouncer(el) {
        this.el = el;
        this.atWork = true;
    }
    Bouncer.prototype.verify = function (client) {
        if (!this.atWork) {
            return true;
        }
        for (var check in this.el.rules) {
            if (this.el.rules[check](client, this.el) == false) {
                return false;
            }
        }
        return true;
    };
    Bouncer.prototype.rest = function () {
        this.atWork = false;
    };
    Bouncer.prototype.backToWork = function () {
        this.atWork = true;
    };
    return Bouncer;
}());
exports.Bouncer = Bouncer;
