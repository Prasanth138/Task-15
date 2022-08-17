import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Sidebars/Sidebar'

const ManageTeachers = ({
  teacherInitialValues,
  teacherFormData,
  setTeacherFormData,
  handleOpen,handleOpen1,handleOpen2,open,open1,open2,setOpen,
  setOpen1,setOpen2
}) => {
  const [sidebarToggle, setSidebarToggle] = useState(true)
  const handleSidebar = () => {
    setSidebarToggle((prevSidebarToggle) => !prevSidebarToggle)
  }
  const handleChange = (e) => {
    setTeacherFormData({ ...teacherFormData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (teacherFormData.id) {
      updateTeacher()
      setTeacherFormData(teacherInitialValues)
    } else {
      addTeacher()
      setTeacherFormData(teacherInitialValues)
    }
    navigate('/teachers')
  }

  const addTeacher = async () => {
    try {
      const resp = await axios.post(
        'https://62fc4346e4bcaf535193d559.mockapi.io/teachers',
        teacherFormData,
      )
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  }

  const updateTeacher = async () => {
    try {
      const resp = await axios.put(
        `https://62fc4346e4bcaf535193d559.mockapi.io/teachers/${teacherFormData.id}`,
        teacherFormData,
      )
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  }

  const navigate = useNavigate()
  return (
    <div className="d-flex">
      <div>
      <Sidebar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
          handleSidebar={handleSidebar}
          open={open}
          setOpen={setOpen}
          handleOpen={handleOpen}
          open1={open1}
          setOpen1={setOpen1}
          handleOpen1={handleOpen1}
          open2={open2}
          setOpen2={setOpen2}
          handleOpen2={handleOpen2}
        />
      </div>
      <div>
        <div className="container">
          <h1>Teacher Management</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            vitae molestias at dicta laudantium dolorem voluptates vero
            consequuntur facere quae deleniti, ex illum voluptas qui placeat,
            iste et quam non.
          </p>

          <form>
            <div className="form-row d-flex">
              <div className="form-group col-md-4 mx-2">
                <label htmlFor="inputFirstName">First Name</label>
                <input
                  name="FirstName"
                  type="text"
                  className="form-control"
                  id="firstname"
                  value={teacherFormData.FirstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-4 mx-2">
                <label htmlFor="inputLastName">Last Name</label>
                <input
                  name="LastName"
                  type="text"
                  className="form-control"
                  id="lastname"
                  value={teacherFormData.LastName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row d-flex my-2">
              <div className="form-group col-md-4 mx-2">
                <label htmlFor="inputJoiningDate">JoiningDate</label>
                <input
                  name="JoiningDate"
                  type="text"
                  className="form-control"
                  id="joiningdate"
                  value={teacherFormData.JoiningDate}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group col-md-4 mx-2">
                <label htmlFor="inputBatchAssigned">Qualification</label>
                <input
                  name="Qualification"
                  type="text"
                  className="form-control"
                  id="batchassigned"
                  value={teacherFormData.Qualification}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-row my-2">
              <div className="form-group col-md-4 mx-2">
                <label htmlFor="inputPhoneNo">Phone No.</label>
                <input
                  name="PhoneNumber"
                  type="text"
                  className="form-control"
                  id="phonenumber"
                  value={teacherFormData.PhoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary my-4 mx-2"
              onClick={handleSubmit}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Add Teacher
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ManageTeachers