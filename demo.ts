class TextInput {
    maxLenght: number

    constructor(maxLength: number) {
        this.maxLenght = maxLength;
    }

    isValid(value: string): boolean {
        return value.length < this.maxLenght;
    }
}

class NumberInput extends TextInput{

    isValid(value: Number|string): boolean {
        return  Number.isInteger(value) && super.isValid(`${value}`);
    }
}
class MInMaxNumber extends NumberInput{
    min:number
    max:number

    constructor(maxLength: number, min: number,max:number) {
        super(maxLength);
        this.min = min;
        this.max = max;
    }

    isValid(value: Number | string): boolean {
        return super.isValid(value) && value > this.min && value < this.max;
    }
}

var input = new MInMaxNumber(32,1,5);
console.log(input.isValid("TEST"))
console.log(input.isValid(1))
console.log(input.isValid(3))
console.log(input.isValid(122222222222222222222222222222222222222))
console.log(input.isValid("TESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTESTTEST"))


