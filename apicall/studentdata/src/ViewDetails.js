import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
export default function ViewDetails(){
    
    
    const{studentid}=useParams()
    const [studentData,setStudentData]=useState({})
    useEffect(()=>{
fetch("http://localhost:8000/students/"+studentid)
.then((res)=>res.json())
.then((data)=>setStudentData(data))
.catch((err)=>console.log(err.message))
    },[])
    
    return(
<div className="container">

<h2>View Details</h2>
{ studentData && 
<div >
<p><strong className="details">ID:</strong>{studentData.id}</p>
<p><strong className="details">Name:</strong>{studentData.name}</p>
<p><strong className="details">Place:</strong>{studentData.place}</p>
<p><strong className="details">Phone:</strong>{studentData.phone}</p>
</div>}

<Link to="/"><button>Back</button></Link>
</div>

    )}