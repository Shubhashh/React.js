import React from 'react'

import {useState} from 'react'

const StateMgm = () => {

const [city,setCity] = useState("Hyderabad")

if (city==="Hyderabad"){
    setCity("Banglore")
}
  return (
    <div>{city}</div>
  )
}

export default StateMgm