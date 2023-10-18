import React, { useState } from 'react';
import mockdrill from "./mockdrill.png"
const Registrations = () => {
  const [formData, setFormData] = useState({
    collegeName: '', // Updated field name
    coordinatorName: '',
    contactNumber: '',
    email: '',
    drillDate: '',
    calendarDate: '', // Placeholder for calendar date
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your registration logic here.
    // Example: Send formData to the server using an API request.
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-xl font-semibold mb-4 text-center">
        All Schools / Colleges are welcomed to register for mock drill activities (physical)
      </h1>
      <div className="w-full flex">
        <div className="w-1/2 p-4">
          {/* Left half for the photo */}
          <img src={mockdrill} alt="College/School" className="w-full h-auto" />
        </div>
        <div className="w-1/2 p-4">
          {/* Right half for the form */}
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="collegeName">
                Name of School/College
              </label>
              {/* Replace the dropdown list with your data source */}
              <select
                id="collegeName"
                name="collegeName"
                value={formData.collegeName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="">Select College/School</option>
                <option value="College1">College 1</option>
                <option value="College2">College 2</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="coordinatorName">
                Name of School/College Coordinator
              </label>
              <input
                type="text"
                id="coordinatorName"
                name="coordinatorName"
                value={formData.coordinatorName}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter name of School/College Coordinator"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
                Contact Number
              </label>
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Contact Number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="drillDate">
                Date for Drill
              </label>
              <input
                type="text" // You can use a date picker component here
                id="drillDate"
                name="drillDate"
                value={formData.drillDate}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Select Date"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="calendarDate">
                Calendar Date
              </label>
              <input
                type="text" // You can use a calendar picker component here
                id="calendarDate"
                name="calendarDate"
                value={formData.calendarDate}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Select Date from Calendar"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover-bg-blue-700 text-white font-bold py-2 px-4 rounded focus-outline-none focus-shadow-outline"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registrations;
