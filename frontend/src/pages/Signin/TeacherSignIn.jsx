import React, { useState } from 'react'
import "./SignIn.css"
import {publicRequest} from "../../axios"
import {useDispatch} from "react-redux"
import { login } from '../../app/features/userSlice'
const TeacherSignIn = ({isTeacher,setIsTEacher}) => {

const [loginDetails,setLoginDetails]=useState({username:"",password:""})
const dispatch =useDispatch()    
const handleLogin=async(e)=>{
        e.preventDefault()
        try{
            try{
                const user=await publicRequest.post("/auth/teacher-signin",loginDetails,{withCredentials:true})
                console.log(user.data)
                localStorage.setItem("token",user.data.accessToken)
                dispatch(login(user.data))
              }
              catch(err){
                console.log(err)
              }
        }catch(err){
            alert(err)
        }
    }


    return (
     
            
            <div className="signin__body">
            <h1>Teacher Sign In</h1>
                <form className='signin__form' onSubmit={e=>handleLogin(e)}>
                <input placeholder='username' onChange={(e)=>setLoginDetails({...loginDetails,username:e.target.value})} value={loginDetails.username}/>
                <input placeholder='password' type="password" onChange={(e)=>setLoginDetails({...loginDetails,password:e.target.value})} value={loginDetails.password}/>
                <button>SIGN IN</button>
                </form>
                <p onClick={()=>setIsTEacher(!isTeacher)} style={{marginTop:"10px"}} >Sign In as a  <span style={{color:"white",cursor:"pointer"}}>Student</span></p>
            </div>
           
    
    )
}

export default TeacherSignIn
