function name2(surname: string, age: bigint) {
    let num: number = 2;
    let str: string = '23 february';
    let result = otherName(num);
    otherName(result)
}

function otherName(argNum: number): number {
    return argNum * 2
}

type Human = {
    name: string,
    surname: string
}

function toStringPerson (person: Human): string {
    return `${person.name} ${person.surname}`
}

