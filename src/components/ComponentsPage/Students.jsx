import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../../App.css'
import Sidebar from '../Sidebars/Sidebar'

const Students = ({
  handleSelected,
  stuData,
  setStuData,
  handleOpen,handleOpen1,handleOpen2,open,open1,open2,setOpen,
  setOpen1,setOpen2
}) => {
  const [sidebarToggle, setSidebarToggle] = useState(true)
  const handleSidebar = () => {
    setSidebarToggle((prevSidebarToggle) => !prevSidebarToggle)
  }
  const studentData = async () => {
    try {
      const resp = await axios.get(
        'https://62fc4346e4bcaf535193d559.mockapi.io/students',
      )

      setStuData(resp.data)
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  }
  const handleDelete = async (id) => {
    try {
      const resp = await axios.delete(
        `https://62fc4346e4bcaf535193d559.mockapi.io/students/${id}`,
      )

      setStuData(stuData.filter((row) => row.id !== id))
    } catch (err) {
      // Handle Error Here
      console.error(err)
    }
  }

  useEffect(() => {
    studentData()
  })

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
      <div
       
      >
        <div className="container col-xs-12">
          <h1>List of Students</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non dolores quisquam incidunt porro repellat voluptates quibusdam nemo. Quia inventore nihil rem exercitationem similique neque amet dolore libero doloremque voluptates quae perspiciatis, tempora reiciendis explicabo esse aliquid adipisci nesciunt est harum quidem debitis quis, a quas. Repellendus, modi sint facere rerum laudantium explicabo officiis veniam et dicta, aut corrupti repudiandae accusamus nam nobis ad exercitationem error, maxime fugit aspernatur ab. Error asperiores placeat provident laborum eveniet voluptatem perspiciatis. Dolorem unde ratione quibusdam accusantium quo corporis voluptates tenetur quisquam explicabo? Cum temporibus accusantium enim? Esse temporibus dignissimos tenetur veritatis. Quaerat, sequi expedita?
          </p>

          <div className="table-responsive">
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Standard</th>
                  <th scope="col">Batch</th>
                  <th scope="col">Edit/Delete</th>  
                </tr>
              </thead>
              <tbody>
                {stuData.map((row) => (
                  <tr key={row.id}>
                    <th>{row.id}</th>
                    <td>{row.FirstName}</td>
                    <td>{row.LastName}</td>
                    <td>{row.Standard}</td>
                    <td>{row.Batch}</td>
                    <td>
                      <button
                        className="btn btn-primary mx-1"
                        onClick={(e) => handleSelected(row.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={(e) => handleDelete(row.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Students