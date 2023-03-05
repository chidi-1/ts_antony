const asc = require('prompt-sync')();

abstract class Step<T extends StepContext> {
    abstract context: T;
    abstract isDone (): boolean;
    abstract render (): void;
}

interface StepContext {
    character : Character,
}

class Character {
    money: number;
    constructor(zarplata:number) {
        this.money = zarplata;
    }
}

enum Weather {
    Sunny,
    Rainy,
    FrozenHeart
}

interface GoOutContext {
    currentWeather: Weather,
    character: Character
}
interface ShoppingContext {
    character: Character
}
interface GoBackContext {
    character: Character
}

class Valker {
    private steps: Array<Step<StepContext>>;
    activeIndex: number;
    constructor(steps:Array<Step<StepContext>>) {
        this.steps = steps;
        this.activeIndex = 0;
    }

    render ():void {
        this.steps[this.activeIndex].render();
        if(this.steps[this.activeIndex].isDone()) {
            this.activeIndex++;
        }
    }
}


// список погоды, массив с ключом где текущее состояние погоды
class GoOut extends Step<GoOutContext> {
    endStatus: string;
    context: GoOutContext;
    constructor(context:GoOutContext) {
        super();
        this.endStatus = "0";
        this.context = context;
    }

    isDone(): boolean {
        return  this.endStatus == "1"
    }

    render(): void {
        console.log("Я ухожу от тебя к маме");
        this.endStatus = asc("Уверена? 1:0");
    }
}

class Shopping extends Step<ShoppingContext> {
    endStatus: string;
    context: ShoppingContext;
    constructor(context: ShoppingContext) {
        super();
        this.endStatus = "0";
        this.context = context;
    }

    isDone(): boolean {
        return  this.endStatus == "1"
    }

    render(): void {
        console.log("Куплю теста на блинчики");
        this.endStatus = asc("Скока скока оно стоит?? Рили? 1:0");
    }
}

class iLBeBack extends Step<GoBackContext> {
    endStatus: string;
    context: GoBackContext;

    constructor(context: GoBackContext) {
        super();
        this.endStatus = "0";
        this.context = context;
    }

    isDone(): boolean {
        if(this.endStatus == "1"){
            console.log('Хани, айм хоум')
        }
        else{
            console.log("Доктор, вы меня потеряли")
        }
        return this.endStatus == "1";
    }

    render(): void {
        console.log('Может дать ему последний шанс?')
        this.endStatus = asc("Для него ли твоя ягодка росла? 1:0");
    }
}

let me = new Character(1000)

let goOutContext: GoOutContext = {
    currentWeather: Weather.Rainy,
    character: me
}
let shoppingContext: ShoppingContext = {
    character: me
}
let goBackContext: GoBackContext = {
    character: me
}

let goOut = new GoOut(goOutContext)
let shopping = new Shopping(shoppingContext)
let comeBack = new iLBeBack(goBackContext)

let valker = new Valker([goOut,shopping,comeBack])
valker.render();
valker.render();
valker.render();
