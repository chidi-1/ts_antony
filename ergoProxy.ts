const asc = require('prompt-sync')();

interface Pocket {
    money: number,
    change: number
}

let pocket: Pocket = {
    money: 1,
    change:100
}

class PocketHandler implements ProxyHandler<Pocket> {
    //get(target: Pocket, p: string | symbol, receiver: any): any {
        //return (p == 'money') ? 0 : target[p];
    //}
    set(target: Pocket, p: string | symbol, newValue: any, receiver: any): boolean {
        if (newValue > target[p] && p == 'money') {
            target[p] = ((newValue - target[p]) * 0.87) + target[p]
        }
        else {
            target[p] = newValue;
        }
        return true
    }
}

let proxiedPocket = new Proxy(pocket, new PocketHandler())

proxiedPocket.money = 100
proxiedPocket.money = 50
proxiedPocket.change = 50
proxiedPocket.change = 100
console.log(proxiedPocket.money)
console.log(proxiedPocket.change)

//
// for (let i = 0; i < 12; i++) {
//     let plus: string = asc('Сколько получил денег');
//     pocket.money = pocket.money + Number(plus);
//     console.log(pocket.money)
// }