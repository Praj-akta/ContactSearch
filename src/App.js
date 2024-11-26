import React, { useState } from "react";
import { contactsList } from "./data";
import "./App.css";

const App = () => {
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: ""
  });
  const states = ["MA", "FL", "NY", "AK", "IL", "AZ", "CA", "AR"];
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [filteredContacts, setFilteredContacts] = useState(contactsList);
  // const contactsPerPage = 5;

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleContactSelect = (contact) => {
    if(selectedContactId === contact?.id) {
      setSelectedContact(null);
      setSelectedContactId(null)
    } else {
      setSelectedContact(contact);
      setSelectedContactId(contact?.id)
    }
  };

  const clearFields = () => {
    setFilters({
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: ""
    });
    setFilteredContacts(contactsList);
  };

  const handleSearch = () => {
    const filteredResults = contactsList.filter((contact) => {
      return Object.keys(filters).every((key) => {
        if(key === "dob" && filters[key]) {
          const contactDob = new Date(contact[key]).toISOString().split('T')[0];
          return contactDob.includes(filters[key]);
        }
        return contact[key]?.toString().toLowerCase().includes(filters[key]?.toString().toLowerCase())
      })
    })
    setFilteredContacts(filteredResults)
  }

  return (
    <div>
      <h1 className="text-xl font-bold"> Choose a contact </h1>
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
              <label className="text-sm font-bold text-gray-500">
                Last name
              </label>
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
                  onChange={handleFilterChange}>
                  <option value="">  </option>
                  {
                    states.map((state) => <option key={state} value={state}>{state}</option>)
                  }
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
          onClick={_ => handleSearch()}
        >
          Search
        </button>
      </div>

      <table>
        <thead>
          <tr className="border-b border-gray-300">
            <th></th>
            <th>Name</th>
            <th>DOB</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip </th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((contact) => (
            <tr key={contact.id} className="border-b border-gray-300">
              <td>
                <input type="checkbox"
                  checked={contact?.id === selectedContactId}
                  onChange={_ => handleContactSelect(contact)}
                />
              </td>
              <td>
                {contact.firstName} {contact.lastName}
              </td>
              <td>{contact.dob}</td>
              <td>{contact.address.toLocaleUpperCase()}</td>
              <td>{contact.city.toLocaleUpperCase()}</td>
              <td>{contact.state}</td>
              <td>{contact.zip}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end my-3">
        <button className="bg-[#377ed9] text-white px-4 py-1 mr-10">
          {currentPage}
        </button>
      </div>

      {selectedContact && (
        <div className="selected-contact">
          <h2 className="font-bold text-lg mt-5 underline">Selected Contact</h2>
          <p>
            <strong>Name:</strong> {selectedContact.firstName}{" "}
            {selectedContact.lastName}
          </p>
          <p>
            <strong>Email:</strong> {selectedContact.email}
          </p>
          <p>
            <strong>Phone:</strong> {selectedContact.phone}
          </p>
          <p>
            <strong>Address:</strong> {selectedContact.address}
          </p>
          <p>
            <strong>City:</strong> {selectedContact.city}
          </p>
          <p>
            <strong>State:</strong> {selectedContact.state}
          </p>
          <p>
            <strong>Zip Code:</strong> {selectedContact.zip}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
