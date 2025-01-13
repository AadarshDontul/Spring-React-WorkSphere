import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {

  const [employee, setEmployee] = useState(
    {
      id:"",
      firstName: "",
      lastName: "",
      email: ""
    }
  )

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({...employee, [e.target.name]: value})
  }

  const navigate = useNavigate();

  const saveEmployee = (e) => {
    e.preventDefault();
    EmployeeService.createEmployee(employee)
      .then((res) => {
        console.log("Employee created successfully:", res);
        navigate("/employeeList"); 
      })
      .catch((err) => {
        console.error("Error creating employee:", err);
      });
  };
  

  return (
    <div className="flex justify-center py-12">
      <div className="flex flex-col max-w-2xl px-8 py-8 bg-gray-800 rounded-lg shadow-lg border border-gray-700 ">
        <div className="text-2xl mb-4">
          <h1 className="font-semibold text-white">Add New Employee</h1>
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
          <button onClick={saveEmployee} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Save
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Clear
          </button>

        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
