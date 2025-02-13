import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import Employee from './Employee';

const EmployeeList = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [employee, setEmployee] = useState(null);


  // Fetch Employee Data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployee();
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [])

  const deleteEmployee = (e,id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((res)=>
    {
      setEmployee(employee.filter(emp=>emp.id !== id))
    })
}
  

  return (

    <div className="container mx-auto mt-5 bg-gray-900 text-white p-5 rounded-lg shadow-lg">
      {/* Button Section */}
      <div className="h-12 flex justify-start mx-8">
        <button 
        onClick={()=>navigate("/addEmployee")}
        className="bg-white hover:bg-white text-black rounded font-semibold px-4 py-2 transition duration-200 ease-in-out">
          Add Employee
        </button>
      </div>

      {/* Table Section */}
      <div className="mt-5 overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-700">
          <thead className="bg-emerald-400 uppercase text-black">
            <tr>
              <th className="px-4 py-2 border border-gray-700">First Name</th>
              <th className="px-4 py-2 border border-gray-700">Last Name</th>
              <th className="px-4 py-2 border border-gray-700">Email ID</th>
              <th className="px-4 py-2 border border-gray-700">Actions</th>
            </tr>
          </thead>
          {!loading && (
          <tbody>
            {/* Example Row */}
            {employee.map((emp)=>(
              <Employee key={emp.id} emp={emp} deleteEmployee={deleteEmployee} />
            ))}
            {/* Add more rows here */}
          </tbody>)}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
