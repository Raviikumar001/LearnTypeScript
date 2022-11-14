// we can use these when we want to use it when we wan't more than one type

//Thes types can be used in place on any type which should be avoided. 

//first example

let score: number | string = 33

score= 45
score = 'sss'


type myUser = {
    name: string;
    id:number;
}

type Admin = {
    username: string;
    id: number;
}

let ravi : myUser | Admin = {name:"hites ", id: 890 }

//another user can also be added here.

ravi = {username: "hc", id: 334}

// function getdbid(id: number | string)
// {
//     console.log(`the id id ${id}`);
// }

getdbid(3)
getdbid("4")


//a way we can use different types in function along with their methods. 
function getdbid(id:  string |number)
{ 
   if(typeof id === "string")
   {
    id.toLowerCase()
   }
   
   
}

// arrays   

const data: number[] = [1, 2 ,3]

const data2: string[] = ["1", "2", "3"]

const data3: (string | number | boolean )[] = ["1", '2', "3", 5, true]


// let pi:2.333= 2.333;


let seatAllotment: "aisle" | "middle" | 'Window'

seatAllotment = "aisle";
// seatAllotment = 'true'







