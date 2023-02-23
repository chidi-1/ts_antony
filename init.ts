import {Bouncer} from "./bouncer";
import {checkAge, checkColor} from "./functions";
import {pantsColor} from "./client";

const bouncer = new Bouncer({
    minAge: 20,
    permittedColor: pantsColor.yellow,
    rules: [checkAge, checkColor]
})

console.log(bouncer.verify({age: 22, color: pantsColor.red}))