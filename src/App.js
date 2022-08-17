import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/DashboardPage/Dashboard';
import Login from './components/AddonPages/Login';
import Register from './components/AddonPages/Register';
import ForgotPassword from './components/AddonPages/ForgotPassword';
import ErrorPage from './components/AddonPages/ErrorPage';
import BlankPage from './components/AddonPages/BlankPage';
import Charts from './components/ChartsPage/Charts';
import Tables from './components/TablesPage/Tables';
import Student from './components/ComponentsPage/Students';
import AddStudent from "./components/ComponentsPage/AddStudent";
import Teachers from './components/ComponentsPage/Teachers';
import AddTeacher from "./components/ComponentsPage/AddTeacher";
import {useNavigate } from "react-router-dom";

function App() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen = () => {
    setOpen(!open)
  }
  const handleOpen1 = () => {
    setOpen1(!open1)
  }
  const handleOpen2 = () => {
    setOpen2(!open2)
  }

  const navigate = useNavigate()

  const [stuData, setStuData] = useState([])
  const [teacherData, setTeacherData] = useState([])

  const studentInitialValues = {
    FirstName: '',
    LastName: '',
    Standard: '',
    Batch: '',
  }

  const teacherInitialValues = {
    FirstName: '',
    LastName: '',
    JoiningDate: '',
    PhoneNumber: '',
    Qualification: '',
  }

  const [studentFormData, setStudentFormData] = useState(studentInitialValues)
  const [teacherFormData, setTeacherFormData] = useState(teacherInitialValues)

  const handleSelected = (id) => {
    const selectedData = stuData.filter((row) => row.id === id)[0]

    setStudentFormData(selectedData)
    navigate('/students/AddStudent')
  }

  const teacherHandleSelected = (id) => {
    const selectedData = teacherData.filter((row) => row.id === id)[0]

    setTeacherFormData(selectedData)
    navigate('/teachers/AddTeacher')
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={
              <Dashboard open={open} 
                         setOpen={setOpen} 
                         handleOpen={handleOpen} 
                         open1={open1}
                         setOpen1={setOpen1} 
                         handleOpen1={handleOpen1} 
                         open2={open2} 
                         setOpen2={setOpen2} 
                         handleOpen2={handleOpen2}/>} />
        <Route path="/dashboard" element={
              <Dashboard open={open} 
                         setOpen={setOpen} 
                         handleOpen={handleOpen} 
                         open1={open1}
                         setOpen1={setOpen1} 
                         handleOpen1={handleOpen1} 
                         open2={open2} 
                         setOpen2={setOpen2} 
                         handleOpen2={handleOpen2}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/errorpage" element={
              <ErrorPage open={open} 
                         setOpen={setOpen} 
                         handleOpen={handleOpen} 
                         open1={open1}
                         setOpen1={setOpen1} 
                         handleOpen1={handleOpen1} 
                         open2={open2} 
                         setOpen2={setOpen2} 
                         handleOpen2={handleOpen2}/>} />
        <Route path="/blankpage" element={
              <BlankPage open={open} 
                         setOpen={setOpen} 
                         handleOpen={handleOpen} 
                         open1={open1}
                         setOpen1={setOpen1} 
                         handleOpen1={handleOpen1} 
                         open2={open2} 
                         setOpen2={setOpen2} 
                         handleOpen2={handleOpen2}/>} />
        <Route path="/charts" element={
              <Charts open={open} 
                      setOpen={setOpen} 
                      handleOpen={handleOpen} 
                      open1={open1}
                      setOpen1={setOpen1} 
                      handleOpen1={handleOpen1} 
                      open2={open2} 
                      setOpen2={setOpen2} 
                      handleOpen2={handleOpen2}/>} /> 
        <Route path="/tables" element={
              <Tables open={open} 
                      setOpen={setOpen} 
                      handleOpen={handleOpen} 
                      open1={open1}
                      setOpen1={setOpen1} 
                      handleOpen1={handleOpen1} 
                      open2={open2} 
                      setOpen2={setOpen2} 
                      handleOpen2={handleOpen2}/>} />
              
        <Route path="/students" element={
              <Student open={open} 
                       setOpen={setOpen} 
                       handleOpen={handleOpen} 
                       open1={open1}          
                       setOpen1={setOpen1} 
                       handleOpen1={handleOpen1} 
                       open2={open2} 
                       setOpen2={setOpen2} 
                       handleOpen2={handleOpen2} 
                       handleSelected={handleSelected}
                       studentFormData={studentFormData}
                       setStudentFormData={setStudentFormData}
                       studentInitialValues={studentInitialValues}
                       stuData={stuData}
                       setStuData={setStuData}/>} /> 
          <Route exact path="/students/AddStudent" element={
              <AddStudent
                       handleSelected={handleSelected}
                       studentFormData={studentFormData}
                       setStudentFormData={setStudentFormData}
                       studentInitialValues={studentInitialValues}
                       stuData={stuData}
                       setStuData={setStuData}
                       open={open} 
                       setOpen={setOpen} 
                       handleOpen={handleOpen} 
                       open1={open1}
                       setOpen1={setOpen1} 
                       handleOpen1={handleOpen1} 
                       open2={open2} 
                       setOpen2={setOpen2} 
                       handleOpen2={handleOpen2} /> } />
          <Route path="/teachers" element={
                <Teachers open={open} 
                          setOpen={setOpen} 
                          handleOpen={handleOpen} 
                          open1={open1}
                          setOpen1={setOpen1} 
                          handleOpen1={handleOpen1} 
                          open2={open2} 
                          setOpen2={setOpen2} 
                          handleOpen2={handleOpen2} 
                          handleSelected={handleSelected}
                          teacherData={teacherData}
                          setTeacherData={setTeacherData}
                          teacherHandleSelected={teacherHandleSelected}/>} /> 
          <Route exact path="/teachers/AddTeacher" element={
              <AddTeacher
                         handleSelected={handleSelected}
                         teacherData={teacherData}
                         setTeacherData={setTeacherData}
                         teacherFormData={teacherFormData}
                         setTeacherFormData={setTeacherFormData}
                         teacherInitialValues={teacherInitialValues}
                         open={open} 
                         setOpen={setOpen} 
                         handleOpen={handleOpen} 
                         open1={open1}
                         setOpen1={setOpen1} 
                         handleOpen1={handleOpen1} 
                         open2={open2} 
                         setOpen2={setOpen2} 
                         handleOpen2={handleOpen2} /> } />
      </Routes>
    </div>
  )
}

export default App


