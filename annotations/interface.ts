


interface Vehicle {
    name: string;
    year: Date;
    broken : boolean;
    summary():string;
}


const oldCivic = {

    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string{
        return `Name : ${this.name}`
    }
}

const printVechicle = (vehicle: Vehicle):void =>{

    console.log(`Name: ${vehicle.name}`)
    console.log(`year: ${vehicle.year}`);
    console.log(`broken?: ${vehicle.broken}`);

}

printVechicle(oldCivic);