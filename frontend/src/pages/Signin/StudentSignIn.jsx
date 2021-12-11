import React from 'react'
import "./SignIn.css"
const StudentSignIn = () => {
    return (
        <div className="signin__page">
            
        <div className="signin__body">
        <h1>Student Sign In</h1>
            <form className='signin__form'>
            <input placeholder='username'/>
            <input placeholder='password' type="password"/>
            <button>SIGN IN</button>
            </form>

        </div>
       
    </div>
    )
}

export default StudentSignIn
