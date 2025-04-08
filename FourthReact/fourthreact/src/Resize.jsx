import React, {useState,useEffect} from 'react'

const Resize=()=>
{

    const[screenSize,setScreenSize]=useState({
width:window.innerWidth,
height:window.innerHeight,

    });
}

const updateScreenSize=()=>{

    setScreenSize({
width:innerWidth,
height:innerHeight,
    });
}

useEffect(()=>{
window.addEventListener('resize',updateScreenSize)
return()=>{
    window.removeEventListener('resize',updateScreenSize)
}


})

export default Resize