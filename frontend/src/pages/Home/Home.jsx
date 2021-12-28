import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { logout } from '../../app/features/userSlice'
import TeacherHome from "../Teacher/TeacherHome" 
import StudentEval from "../Student/StudentEval"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import "./Home.css"
const Home = ({name}) => {

const user = useSelector(state => state.user.user)

    const dispatch= useDispatch()
    const handleLogout=async()=>{
        localStorage.removeItem("token")

        dispatch(logout())
    }
    return (
        <div className='mt-5 pt-2 container'>

        <div className='home__header mt-5'>
            <div className='left'>
            <h1  className=' text-light'>Welcome To StudEval <span className='text-success'>{user.fullname}</span></h1>
            </div>
      <div className='right'>
      <h4 className='text-light'>Role: {user.isAdmin?"Teacher":"Student"}</h4>
        
     <div className='text-danger cursor-pointer' onClick={()=>{handleLogout()}}><ExitToAppIcon /></div>
      </div>
           
        </div>
           

            {user.isAdmin?<TeacherHome/>:<StudentEval/>}
        </div>
    )
}

export default Home