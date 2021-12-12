import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../app/features/userSlice'

const Home = ({name}) => {
   const dispatch= useDispatch()
    const handleLogout=async()=>{
        localStorage.removeItem("token")

        dispatch(logout())
    }
    return (
        <div>
            <h1  className='mt-5'>{name}</h1>
            {console.log(name)}
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Home
