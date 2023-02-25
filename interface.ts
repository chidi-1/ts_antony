interface Vehicle {
    isBroken: boolean
}

interface Car extends Vehicle {
    doorCouner: number
}

interface Bicycle extends Vehicle {
    ramaGender: gender
}

enum gender {
    "male",
    "female",
    "helicopterApach"
}

function checkBrokenVehicle (data:Array<Vehicle>): Array<Vehicle> {
    return data.filter((element) => element.isBroken);
}

let cars:Array<Car> = [
    {
        isBroken: false,
        doorCouner: 4
    },
    {
        isBroken: true,
        doorCouner: 3
    },
]

let bicycles:Array<Bicycle> = [
    {
        isBroken: false,
        ramaGender: gender.female
    },
]

let helicopters:Array<Car | Bicycle> = [cars[1], bicycles[0]]