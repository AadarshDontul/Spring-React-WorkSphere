import React from 'react';

const EmployeeList = () => {
  return (
    <div className="container mx-auto mt-5 bg-gray-900 text-white p-5 rounded-lg shadow-lg">
      {/* Button Section */}
      <div className="h-12 flex justify-start mx-8">
        <button className="bg-white hover:bg-white text-black rounded font-semibold px-4 py-2 transition duration-200 ease-in-out">
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
          <tbody>
            {/* Example Row */}
            <tr className="bg-gray-800 hover:bg-gray-700">
              <td className="px-4 py-2 border border-gray-700 text-center">John</td>
              <td className="px-4 py-2 border border-gray-700 text-center">Doe</td>
              <td className="px-4 py-2 border border-gray-700 text-center">john.doe@example.com</td>
              <td className="px-4 py-2 border border-gray-700 text-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white rounded px-3 py-1 text-sm">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white rounded px-3 py-1 text-sm ml-2">
                  Delete
                </button>
              </td>
            </tr>
            {/* Add more rows here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
