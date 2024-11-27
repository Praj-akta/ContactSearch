import React from "react";
import "./App.css";

function Filters({ filters, handleFilterChange, clearFields, handleSearch }) {
  const states = ["MA", "FL", "NY", "AK", "IL", "AZ", "CA", "AR"];

  return (
    <div className="filters">
      <h3 className="text-md font-bold mt-5 mb-3"> Search for a contact </h3>
      <div className="grid grid-cols-2 gap-36">
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col">
            <label className="text-sm font-bold text-gray-500">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              value={filters.firstName}
              className="border border-gray-400 rounded-md py-1 px-3"
              onChange={handleFilterChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-bold text-gray-500">Last name</label>
            <input
              type="text"
              name="lastName"
              value={filters.lastName}
              className="border border-gray-400 rounded-md py-1 px-3"
              onChange={handleFilterChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-bold text-gray-500">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              placeholder=""
              value={filters.dob}
              className="border border-gray-400 rounded-md py-1 px-3"
              onChange={handleFilterChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-bold text-gray-500">
              Email Address
            </label>
            <input
              type="text"
              name="email"
              value={filters.email}
              className="border border-gray-400 rounded-md py-1 px-3"
              onChange={handleFilterChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-bold text-gray-500">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={filters.phone}
              className="border border-gray-400 rounded-md py-1 px-3"
              onChange={handleFilterChange}
            />
          </div>
        </div>
        <div className="grid">
          <div className="flex flex-col">
            <label className="text-sm font-bold text-gray-500">
              Street address
            </label>
            <input
              type="text"
              name="address"
              value={filters.address}
              className="border border-gray-400 rounded-md py-1 px-3"
              onChange={handleFilterChange}
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            <div className="flex flex-col col-span-2">
              <label className="text-sm font-bold text-gray-500">City</label>
              <input
                type="text"
                name="city"
                value={filters.city}
                className="border border-gray-400 rounded-md py-1 px-3"
                onChange={handleFilterChange}
              />
            </div>
            <div className="flex flex-col col-span-1">
              <label className="text-sm font-bold text-gray-500">State</label>
              <select
                name="state"
                value={filters.state}
                className="border border-gray-400 rounded-md py-1 px-3"
                onChange={handleFilterChange}
              >
                <option value=""> </option>
                {states.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col col-span-1">
              <label className="text-sm font-bold text-gray-500">
                Zip code
              </label>
              <input
                type="text"
                name="zip"
                value={filters.zip}
                className="border border-gray-400 rounded-md py-1 px-3"
                onChange={handleFilterChange}
              />
            </div>
          </div>
        </div>
      </div>

      <button
        className="border border-gray-400 px-4 py-1 
      rounded-md my-5 text-[#377ed9] font-semibold mr-3"
        onClick={(_) => clearFields()}
      >
        Clear
      </button>
      <button
        className="border border-gray-400 px-4 py-1 
      rounded-md my-5 text-[#377ed9] font-semibold"
        onClick={(_) => handleSearch()}
      >
        Search
      </button>
    </div>
  );
}

export default Filters;
