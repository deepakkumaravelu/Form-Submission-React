import React,{useState} from "react";
export  default function SimpleForm() {
  const[text,setText]=useState(0);
return (
<div>
    <h2>Form Submission</h2>
    <p>Enter the text</p>
    <input type="text" onChange={(e)=>setText(e.target.value)}></input>
    <button onClick={()=>console.log(text)}>Submit</button>

   </div>
  );

}