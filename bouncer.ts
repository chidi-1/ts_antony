import {Client, El} from "./client";

export class Bouncer {
    atWork:boolean
    el : El
    constructor (el: El) {
        this.el = el;
        this.atWork = true;
    }

    verify (client: Client): boolean {
        if (!this.atWork) {
            return [true, null];
        }

        for(let check in this.el.rules) {
            if (this.el.rules[check](client, this.el) == false) {
                return [false, this.el.rules[check]];
            }
        }
        return [true, null];
    }

    rest (): void {
        this.atWork = false;
    }
    backToWork (): void {
        this.atWork = true;
    }
}

