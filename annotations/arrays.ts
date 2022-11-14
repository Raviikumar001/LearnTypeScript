

//Help with inference with extracting values
const carMakers = ["ford", "toyata", "chevy"]
const dates = [new Date(), new Date()];

const carr = carMakers[0];
console.log(carr)

const myCar = carMakers.pop();

//prevent incompatiable types.
carMakers.push(200);

//help with array functions

carMakers.map (
    (car: string):string =>{
    return car.toLocaleUpperCase();
});


//Flexible types

const importandDates: (Date | string) [] = [new Date()];

importandDates.push('10-10-2030');
importandDates.push(new Date());

console.log(importandDates)




//type never of arrays
const superheroes: string[] = []
// const heropower: number[] = []

//another method of declaring arrays.
const heropower: Array<number> = []

type User={
    name: string;
    isActive: boolean;


}


//creating an array of user type 
const allUsers:  User[] = []

superheroes.push("ravi");
heropower.push(2)

allUsers.push({name: "", isActive: true});







