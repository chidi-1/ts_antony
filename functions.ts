import {Client, El} from "./client";

export function checkAge (client: Client, sample: El):boolean {
    if(sample.minAge) {
        return (client.age > sample.minAge);
    }
}

export function checkColor (client: Client, sample: El): boolean {
    if(sample.permittedColor) {
        return (client.color === sample.permittedColor);
    }
}