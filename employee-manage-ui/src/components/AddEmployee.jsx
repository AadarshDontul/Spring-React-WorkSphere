import React from "react";

const AddEmployee = () => {
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
            className="border rounded px-4 py-2 w-2/3 text-black bg-gray-200"
          />
        </div>

        {/* Last Name */}
        <div className="flex items-center justify-between w-full my-4">
          <label className="text-xl text-white w-1/3">Last Name</label>
          <input
            type="text"
            className="border rounded px-4 py-2 w-2/3 text-black bg-gray-200"
          />
        </div>

        {/* Email */}
        <div className="flex items-center justify-between w-full my-4 ">
          <label className="text-xl text-white w-1/3">Email</label>
          <input
            type="email"
            className="border rounded px-4 py-2 w-2/3 text-black bg-gray-200"
          />
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
