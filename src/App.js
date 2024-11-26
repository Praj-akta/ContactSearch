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
  });
  const [selectedContact, setSelectedContact] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 5;

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredContacts = contactsList.filter((contact) => {
    return (
      (filters.firstName === "" ||
        contact.firstName
          .toLowerCase()
          .includes(filters.firstName.toLowerCase())) &&
      (filters.lastName === "" ||
        contact.lastName
          .toLowerCase()
          .includes(filters.lastName.toLowerCase())) &&
      (filters.dob === "" || contact.dob.includes(filters.dob)) &&
      (filters.email === "" ||
        contact.email.toLowerCase().includes(filters.email.toLowerCase())) &&
      (filters.phone === "" || contact.phone.includes(filters.phone))
    );
  });

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = filteredContacts.slice(
    indexOfFirstContact,
    indexOfLastContact
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleContactSelect = (contact) => {
    setSelectedContact(contact);
  };

  return (
    <div>
      <h1 className="text-xl font-bold"> Choose a contact </h1>
      <div className="filters">
        <h3 className="text-md font-bold mt-5 mb-3"> Search for a contact </h3>
        <div className="grid grid-cols-2 gap-36">
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col">
              <label className="text-sm font-bold text-gray-500">
                First name{" "}
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
                Last name{" "}
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
                Date of Birth{" "}
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
                Phone Number{" "}
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
                name="streetAddress"
                value={filters.streetAddress}
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
                  type="text"
                  name="state"
                  value={filters.state}
                  className="border border-gray-400 rounded-md py-1 px-3"
                  onChange={handleFilterChange}
                />
              </div>
              <div className="flex flex-col col-span-1">
                <label className="text-sm font-bold text-gray-500">
                  Zip code
                </label>
                <input
                  type="text"
                  name="zipcode"
                  value={filters.zipcode}
                  className="border border-gray-400 rounded-md py-1 px-3"
                  onChange={handleFilterChange}
                />
              </div>
            </div>
          </div>
        </div>

        <button className="border border-gray-400 px-4 py-1 
          rounded-md my-5 text-[#377ed9] font-semibold">
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
          {currentContacts.map((contact) => (
            <tr key={contact.id} className="border-b border-gray-300">
              <td>
                <button onClick={() => handleContactSelect(contact)}>
                  Select
                </button>
              </td>
              <td>
                {contact.firstName} {contact.lastName}
              </td>
              <td>{contact.dob}</td>
              <td>{contact.address}</td>
              <td>{contact.city}</td>  
              <td>{contact.state}</td>
              <td>{contact.zip}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end my-3">
        {Array.from(
          { length: Math.ceil(filteredContacts.length / contactsPerPage) },
          (_, index) => (
            <button key={index + 1} onClick={() => paginate(index + 1)}
              className="bg-[#377ed9] text-white px-4 py-1 mr-10">
              {index + 1}
            </button>
          )
        )}
      </div>

      {selectedContact && (
        <div className="selected-contact">
          <h2 className="font-bold text-lg mt-5 underline">Selected Contact</h2>
          <p>
            <strong>Name:</strong> {selectedContact.firstName}
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
