const axios = require('axios');

const url ="https://jsonplaceholder.typicode.com/posts/1";

interface data{
    id: number;
    title: string;
    body:string;
}

axios.get(url).then((response: any) =>{
    const data = response.data as data
    
    const title = data.title;
    const id = data.id;
    const body = data.body;

     
    logpost(id, title, body);
})

const logpost = (id :number, title:string, body: string)=>
{
    console.log(title);
    console.log(id);
    console.log(body);

}