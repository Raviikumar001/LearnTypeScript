
interface Reportable {
   
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

const drink ={
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary():string{
        return `My drink has ${this.sugar}`
    }
}

const printVechicle = (item: Reportable):void =>{

    console.log(item.summary());
    console.log('hi')

}

printVechicle(oldCivic);

printVechicle(drink)



//



interface TUser{
    readonly dbid:number
    email: string,
    userId: number,
    googleId: string,
    startTrail():string,
    getCoupon(couponname: string, value: number) :number
}

interface TUser{
    githubToken : string
}

interface Addmin extends TUser {
    role: "admin" | "ta" | "learner"
}

const rk: Addmin = {dbid:22 , email: "string", userId: 2222,googleId:'stringgg',
githubToken: "kjlkjlj",
role: "admin",
startTrail: ()=> "ravi",
getCoupon: (name : 'ravi', off: 10)=> {
    return off
}
 };


rk.email = 'kljlkjlj' 





