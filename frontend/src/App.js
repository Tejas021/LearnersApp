
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home';
import TeacherSignIn from './pages/Signin/TeacherSignIn';
import StudentSignIn from './pages/Signin/StudentSignIn';
import Navbar from './pages/Navbar/Navbar';


function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         
         <Route exact path="/" element={<Home/>}/>
         <Route path="teacher-signin" element={<TeacherSignIn/>}/>
         <Route path="student-signin" element={<StudentSignIn/>}/>
         <Route path="navbar" element={<Navbar/>}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
