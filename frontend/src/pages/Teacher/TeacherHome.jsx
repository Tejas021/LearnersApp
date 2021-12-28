import React from 'react';
import "./Teacher.css";
import {useState} from 'react';
import SubjectEval from './SubjectEval';
import Table from "../../Components/tables/Table"
import Segregate from '../../Components/tables/Segregate';
import branches from "../../Components/subjects"
import PieChart from "../../Components/Graphs/PieChart"
import BarGraph from '../../Components/Graphs/BarGraph';

const TeacherHome = () => {
    const [query, setQuery] = useState({sem:"",subject:"",branch:""})
    const [sem,setSem]=useState(null)
    const [subject,setSubject]=useState(null)
    const [branch, setBranch] = useState(null)
    return (
        <div className='container-fluid'>
             <div className='text-light my-2'>
                Select Sem and Branch
            </div>
            <div className='d-flex flex-row  py-2'>

            <div className="dropdown">
                    <button className="btn  dropdown-toggle  " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                       {branch?branch.title:"BRanch"}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {branches.map((branch)=>(<li key={branch.title}><p className="dropdown-item" onClick={()=>{setBranch(branch);setQuery({...query,branch:branch.title})}}>{branch.title}</p></li>))}
                     
                    </ul>
                </div>

                <div className="dropdown">
                    <button className={`btn  dropdown-toggle ms-4 ${!branch?"disabled":""}` }type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {query.sem?query.sem:"Semester"}
                    </button>
                    <ul className={`dropdown-menu `} aria-labelledby="dropdownMenuButton1" >
                        <li onClick={()=>{setSem(branch?.subjects?.sem1);setQuery({...query,sem:1})}}><p className="dropdown-item">I</p></li>
                        <li onClick={()=>{setSem(branch?.subjects?.sem2);setQuery({...query,sem:2})}}><p className="dropdown-item">II</p></li>
                        <li onClick={()=>{setSem(branch?.subjects?.sem3);setQuery({...query,sem:3})}}><p className="dropdown-item">III</p></li>
                        <li onClick={()=>{setSem(branch?.subjects?.sem4);setQuery({...query,sem:4})}}><p className="dropdown-item">IV</p></li>
                        <li onClick={()=>{setSem(branch?.subjects?.sem5);setQuery({...query,sem:5})}}><p className="dropdown-item">V</p></li>
                        <li onClick={()=>{setSem(branch?.subjects?.sem6);setQuery({...query,sem:6})}}><p className="dropdown-item">VI</p></li>
                        <li onClick={()=>{setSem(branch?.subjects?.sem7);setQuery({...query,sem:7})}}><p className="dropdown-item">VII</p></li>
                        <li onClick={()=>{setSem(branch?.subjects?.sem8);setQuery({...query,sem:8})}}><p className="dropdown-item">VIII</p></li>
                    </ul>
                </div>

                <div className="dropdown">
                    <button className="btn  dropdown-toggle ms-4 " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                       {subject?subject:"Subject"}
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        
                    
                        {sem?.map(subject=>(<li key={subject} onClick={()=>{setSubject(subject);setQuery({...query,subject:subject})}}><p className="dropdown-item">{subject}</p></li>))}
                    </ul>
                </div>

                
            </div>

           
           
            <Table/>
            <PieChart/>
<BarGraph/>
        </div>
    )
}

export default TeacherHome
