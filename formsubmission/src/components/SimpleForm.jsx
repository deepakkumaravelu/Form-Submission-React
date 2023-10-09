import React, { useState } from 'react'

const SimpleForm = () => {
    const[input,setInput]=useState('');
  return (
    <div>
    
    <form action={console.log(input)}>
    <label>Name:</label>
    <input type='text'></input>
    <label>RegNo:</label>
    <input type='text'></input>
    <button onClick={(e)=>setInput(e.target.value)}>submit</button>
    </form>
    
    
    
    </div>
  )
}

export default SimpleForm