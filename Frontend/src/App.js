import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import AddCourse from './admin/AddCourse';
import EditCourse from './admin/EditCourse';
import AddStudent from './user/AddStudent';
import EditStudent from './user/EditStudent';
import CourseList from './admin/CourseList';
import StudentList from './user/StudentList';
import AdminHome from './admin/AdminHome';
import StudentHome from './user/StudentHome';
import AddCourse1 from './admin/AddCourse1';
import AddStudent1 from './user/AddStudent1';
function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='' element={<Login/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/addCourse" element={<AddCourse/>}></Route>
          <Route path="/editCourse/:courseId" element={<EditCourse/>}></Route>
          <Route path="/addStudent" element={<AddStudent/>}></Route>
          <Route path="/editStudent/:id" element={<EditStudent/>}></Route>
          <Route path="/courselist" element={<CourseList/>}></Route>
          <Route path="/studentlist" element={<StudentList/>}></Route>
          <Route path="/adminhome" element={<AdminHome/>}></Route>
          <Route path="/studenthome" element={<StudentHome/>}></Route>
          <Route path="/addcourse1" element={<AddCourse1/>}></Route>
          <Route path="/addstudent1" element={<AddStudent1/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
