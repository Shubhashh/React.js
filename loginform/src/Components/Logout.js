import React from 'react'
import "./Logout.css"
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/userSlice'

const Logout = () => {
const user=useSelector(selectUser)
    
    const dispatch = useDispatch()
const handleLogout=(e)=>{
    e.preventDefault()
    

    dispatch(
        logout(

        ))
} 




  return (
    <div>
<h1> Welcome <span className='user_name'>{user.name}</span>!</h1>
<p >{user.email}</p>
<button className='logout_btn' onClick={(e)=>handleLogout(e)}>Logout</button>

    </div>
  )
}

export default Logout