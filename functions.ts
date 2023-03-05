import {Client, El} from "./client";

export function checkAge(client: Client, sample: El): boolean {
    if (sample.minAge) {
        return (client.age > sample.minAge);
    }
}

export function checkColor(client: Client, sample: El): boolean {
    if (sample.permittedColor) {
        return (client.color === sample.permittedColor);
    }
}

// var inlineLink = new DotsVButton("Title","href")
// var inlineLink2 = new Link("Title2","href")
// class Popup(){
//     function Show(fromElement:Component){
//
//     }
// }
//
// class DotsVButton:Component{
//
//
// }


var popup = new Popup({"url": "Title", "url": "titl2"});
var but = new DotsVButton(LARGE).click = (button) => {
    popup.show(button)
}



