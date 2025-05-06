import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CreateStudent(){
const [id,setId]=useState("")
const [name,setName]=useState("")
const [place,setPlace]=useState("")
const [phone,setPhone]=useState("")
const [validation,setValidation]=useState(false)
const navigate=useNavigate();
const handleSubmit=(e)=>{
    e.preventDefault()
   const studentData={id,name,place,phone}
   console.log(studentData);
   
    fetch('http://localhost:8000/students',
    {
        method:'POST',
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(studentData)  
    })
    .then((res)=>{
        alert("Student data Saved Succesfully")
        navigate("/")
    })
    .catch((err)=>console.log(err.message)
    )
    
}

    return(
<div className="container">

<h2><span>Add New Student</span></h2>

<form onSubmit={handleSubmit} > 
<label htmlFor="id">Id:</label>
<input type="text" id="id"  name="id" required value={id} onChange={e=>setId(e.target.value)
} onMouseDown={()=>setValidation(true)}/><br/>
{id.length===0 && validation && <span className="err">Please Enter Your id</span>}
<br/>

<label htmlFor="name">Name:</label>
<input type="text" id="name"  name="name" required value={name} onChange={e=>setName(e.target.value)} on onMouseDown={()=>setValidation(true)}/>
<br/>
{name.length===0 && validation && <span className="err">Please Enter Your Name</span>}
<br/>
<label htmlFor="place">Place:</label>
<input type="text" id="place"  name="place" required value={place} onChange={e=>setPlace(e.target.value)} onMouseDown={()=>setValidation(true)}/>
<br/>
{place.length===0 && validation &&<span className="err">Please Enter Your Place</span>}
<br/>

<label htmlFor="phone">Phone:</label>
<input type="text" id="phone"  name="phone" required value={phone} onChange={e=>setPhone(e.target.value)}onMouseDown={()=>setValidation(true)}/>
<br/>
{phone.length===0 && validation && <span className="err">Please Enter Your Phone Number</span>}



<div >
<br/>
<button> Save</button>  


|<Link to="/"><button>Back</button> </Link>
</div>

</form>

</div>





    )}