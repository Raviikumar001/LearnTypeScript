type user = {
    name: string;
    email: string;
    isActive: boolean;
}
//This is the syntax for making types in TS.
//you can use is to create all sorts of object pf 
//this type and also use it as a return value for this type also



function createUser( user : user): user{

    return { name: 'ravi', email: '',isActive:false}
}

createUser({ name: 'ravi', email: '',isActive:false});




//read only data in objects.

type user1={
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;  
    creditcardDetails?:number;       //this means thhat it is optional         
}

let myUser: user1 ={

    _id: "  12345",
    name: 'h',
    email: "h@h.com",
    isActive: false
}


myUser.name='hkj';
// myUser._id= kjk; // read only property.