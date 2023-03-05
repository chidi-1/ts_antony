class Vehicle {
    mass: number
    constructor(mass: number) {
        this.mass = mass;

    }
}

class Bicycle2 extends Vehicle {
    ramaGender: string
    constructor(mass:number, rama: string) {
        super(mass);
        this.ramaGender: rama;
    }
}
new Vehicle(99)
let Kama = new Bicycle2(12, 'male')