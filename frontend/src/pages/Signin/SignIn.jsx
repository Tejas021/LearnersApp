import React, { useState } from 'react'
import "./SignIn.css"
import StudentSignIn from './StudentSignIn'
import TeacherSignIn from './TeacherSignIn'
const SignIn = () => {
    const [isTeacher,setIsTEacher]=useState(false)
    return (
        <div className="signin__page">
            {
                isTeacher?<TeacherSignIn setIsTEacher={setIsTEacher} isTeacher={isTeacher}/>:<StudentSignIn isTeacher={isTeacher} setIsTEacher={setIsTEacher}/>
            }
        s
        </div>
    )
}

export default SignIn
