import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const UpdateEmployee = () => {

  const navigate = useNavigate();

  const updateEmployee = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployee(employee,employee.id).then((res)=>{
      console.log("Employee updated successfully:", res);
    }).catch((err)=>{
      console.error("Error updating employee:", err);
    });
    navigate("/employeeList");
    alert("Employee updated successfully");
  }

  const { id } = useParams();
  console.log("ID from params:", id);

  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    email: ""
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(id);
        setEmployee(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [] )

  const cancelUpdate = (e) => {
    e.preventDefault();
    navigate("/employeeList");
  }
  

  return (
    <div className="flex justify-center py-12">
      <div className="flex flex-col max-w-2xl px-8 py-8 bg-gray-800 rounded-lg shadow-lg border border-gray-700 ">
        <div className="text-2xl mb-4">
          <h1 className="font-semibold text-white">Update Employee</h1>
        </div>

        {/* First Name */}
        <div className="flex items-center justify-between w-full my-4">
          <label className="text-xl text-white w-1/3">First Name</label>
          <input
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e)=>handleChange(e)}
            className="border rounded px-4 py-2 w-2/3 text-black bg-gray-200"
          />
        </div>

        {/* Last Name */}
        <div className="flex items-center justify-between w-full my-4">
          <label className="text-xl text-white w-1/3">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e)=>handleChange(e)}
            className="border rounded px-4 py-2 w-2/3 text-black bg-gray-200"
          />
        </div>

        {/* Email of Employee*/}
        <div className="flex items-center justify-between w-full my-4 ">
          <label className="text-xl text-white w-1/3">Email</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={(e)=>handleChange(e)}
            className="border rounded px-4 py-2 w-2/3 text-black bg-gray-200"
          />
        </div>

        {/* Save and Clear Button */}
        <div className="flex items-center justify-center w-full my-4 space-x-3 ">
          <button onClick={updateEmployee} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Update
          </button>
          <button
          onClick={(e)=> cancelUpdate(e) }
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Cancel
          </button>

        </div>
      </div>
    </div>
  )
}

export default UpdateEmployee