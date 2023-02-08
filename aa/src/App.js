import React from 'react';

// const a=[1,2,3,4,5];    //Produce data 

//Actual data

const state ={
    user:[
        {
            id:1,name:"Rahul", password:"abc@12",
        },
        {
            id:2,name:"sq", password:"abc@12qw",
        },
        {
            id:3,name:"dwwee", password:"abc@12wqw",
        }
    ],
    isPresent:false
}


function fun(val){          //return list
    // console.log(val);
    return <li>ID: {val.id} Name: {val.name} Password: {val.password}</li>
}


const b=state.user.map(fun);     //Use of map function for traversing 

function App() {
  return (
    <div>
    
      <ol>
        {b}         
      </ol>
    </div>
  )
}

export default App;


