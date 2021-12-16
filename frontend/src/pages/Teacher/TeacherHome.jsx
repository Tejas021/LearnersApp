import React from 'react';
import "./Teacher.css";
import {useState} from 'react';
import {sem1,sem2,sem3,sem4,sem5,sem6,sem7,sem8} from '../../Components/subjects';

const TeacherHome = () => {

    const [sem,setSem]=useState(null)
    const [subject,setSubject]=useState(null)

    return (
        <div>
            <div className='d-flex flex-row'>
                <div className="dropdown">
                    <button className="btn  dropdown-toggle ms-4 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Semester
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li onClick={()=>{setSem(1)}}><p className="dropdown-item">I</p></li>
                        <li onClick={()=>{setSem(2)}}><p className="dropdown-item">II</p></li>
                        <li onClick={()=>{setSem(3)}}><p className="dropdown-item">III</p></li>
                        <li onClick={()=>{setSem(4)}}><p className="dropdown-item">IV</p></li>
                        <li onClick={()=>{setSem(5)}}><p className="dropdown-item">V</p></li>
                        <li onClick={()=>{setSem(6)}}><p className="dropdown-item">VI</p></li>
                        <li onClick={()=>{setSem(7)}}><p className="dropdown-item">VII</p></li>
                        <li onClick={()=>{setSem(8)}}><p className="dropdown-item">VIII</p></li>
                    </ul>
                </div>

                <div className="dropdown">
                    <button className="btn  dropdown-toggle ms-4 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Branch
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><p className="dropdown-item">Comp</p></li>
                        <li><p className="dropdown-item">IT</p></li>
                        <li><p className="dropdown-item">Mechanical</p></li>
                        <li><p className="dropdown-item">Civil</p></li>
                        <li><p className="dropdown-item">Chemical</p></li>
                        <li><p className="dropdown-item">EXTC</p></li>
                    </ul>
                </div>
            </div>

            <div>
                select Sem and Branch
            </div>
        </div>
    )
}

export default TeacherHome
