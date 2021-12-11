
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home';
import TeacherSignIn from './pages/Signin/TeacherSignIn';
import StudentSignIn from './pages/Signin/StudentSignIn';
import {useSelector,useDispatch} from "react-redux"
import { useEffect } from 'react';
import { publicRequest } from './axios';
import { login } from './app/features/userSlice';

function App() {
  
  const user = useSelector(state => state.user.user)
const dispatch = useDispatch()
  useEffect(()=>{
    const verifyUser=async()=>{
      const TOKEN=localStorage.getItem("token")
      const getuser=await publicRequest.get("/auth/verify",{headers: {"x-auth-token":`Bearer ${TOKEN}`}})
      dispatch(login(getuser.data))
    }
    verifyUser()
  },[dispatch])

  return (
    <div className="App">
     <Router>
       <Routes>
         <Route exact path="/" element={user?<Home/>:<StudentSignIn/>}/>
         <Route path="teacher-signin" element={<TeacherSignIn/>}/>
         <Route path="student-signin" element={<StudentSignIn/>}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
