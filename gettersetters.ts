class Road {
    private distance: number;

    constructor(distance: number) {
        this.distance = distance;
    }

    get miles (): number {
        console.log('miles')
        return this.distance * .7
    }

    set miles (miles) {
        this.distance = miles * 1.7
    }

    setMiles (miles: number): void {
        this.distance = miles * 1.7
    }


}

let road = new Road(20)
road.miles = 10

console.log(road.miles)
