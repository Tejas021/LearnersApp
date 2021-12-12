
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home';


import {useSelector,useDispatch} from "react-redux"
import { useEffect } from 'react';
import { publicRequest } from './axios';
import { login } from './app/features/userSlice';

import Navbar from './pages/Navbar/Navbar';
import SignIn from './pages/Signin/SignIn';



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
       <Navbar/>
       <Routes>

         <Route exact path="/" element={!user?<SignIn/>
        :user.isAdmin?<Home name={"Teacher"}/>:<Home name={"Student"}/> 
        }/>

         
      

      
       
       </Routes>
     </Router>
    </div>
  );
}

export default App;
