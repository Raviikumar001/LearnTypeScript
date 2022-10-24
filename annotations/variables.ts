
//variables

let apples:number = 6;

let speed: string = 'fast' ;

let now : Date = new Date();

//Type annotations
//array
let colors: string[] = ["red","green", "blue"];

let numbers: number[] = [1,2,3];
let truths: boolean[]= [true, false];



console.log(speed, now);


//class

class Car{


}

let car :Car = new Car();

//object literal

let point:{x: number; y:number  } = {

    x:10,
    y:20}


//functions

const logNumber: (i:number) => void = (i: number)=>{
    console.log(i);
}




// adding annotaions to a variables when the return type is any


const json= '{"x": 10, "y":34}';

const coordinates = JSON.parse(json);
console.log(coordinates);
