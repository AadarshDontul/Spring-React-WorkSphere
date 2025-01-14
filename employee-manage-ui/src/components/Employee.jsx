import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({emp, deleteEmployee}) => {

  const navigate = useNavigate();

  const editEmployee = (e,id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`)
  };

  return (
    <tr className="bg-gray-800 hover:bg-gray-700">
      <td className="px-4 py-2 border border-gray-700 text-center">
        {emp.firstName}
      </td>
      <td className="px-4 py-2 border border-gray-700 text-center">
        {emp.lastName}
      </td>
      <td className="px-4 py-2 border border-gray-700 text-center">
        {emp.email}
      </td>
      <td className="px-4 py-2 border border-gray-700 text-center">
        <button 
        onClick={(e,id)=> editEmployee(e,emp.id)}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded px-3 py-1 text-sm hover:cursor-pointer">
          Edit
        </button>
        <button 
        onClick={(e,id)=> deleteEmployee(e,emp.id)}
        className="bg-red-500 hover:bg-red-600 text-white rounded px-3 py-1 text-sm ml-2 hover:cursor-pointer">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Employee;
