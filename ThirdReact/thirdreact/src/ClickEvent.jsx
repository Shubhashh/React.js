import React from 'react'
import {useState} from 'react'

function ClickEvent() {
const [number,setNumber]=useState(0)

    const increment =()=>{
        setNumber(number +1)
    }

    const decrement =()=>{
if (number>=1){
    setNumber(number -1)

}

        
    }
    const reset=()=>{
        setNumber(0)
    }


  return (
    <div>
        <h1>{number}</h1><br/>


    <button className="button" onClick={increment}>Increment</button>
    
    <button className="buttons" onClick={decrement}>Decrement</button> 
    <br/>


    <br/>
    <button className="button" onClick={reset}>Reset</button>
    
    
    
    
    </div>
    
  )
}

export default ClickEvent