
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './pages/Home/Home';
import TeacherSignIn from './pages/Signin/TeacherSignIn';
import StudentSignIn from './pages/Signin/StudentSignIn';


function App() {
  return (
    <div className="App">
     <Router>
       <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route path="teacher-signin" element={<TeacherSignIn/>}/>
         <Route path="student-signin" element={<StudentSignIn/>}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
