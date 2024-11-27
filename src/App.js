import React, { useState } from "react";
import Filters from "./Filters";
import { contactsList } from "./data";
import ContactsList from "./ContactsList";
import ContactDetails from "./ContactDetails";
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
    zip: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [filteredContacts, setFilteredContacts] = useState(contactsList);

  //Pagination
  const contactsPerPage = 5;
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = filteredContacts.slice(
    indexOfFirstContact,
    indexOfLastContact
  );
  const totalPages = Math.ceil(contactsList.length / contactsPerPage);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleContactSelect = (contact) => {
    if (selectedContactId === contact?.id) {
      setSelectedContact(null);
      setSelectedContactId(null);
    } else {
      setSelectedContact(contact);
      setSelectedContactId(contact?.id);
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
      zip: "",
    });
    setFilteredContacts(contactsList);
    setCurrentPage(1);
  };

  const handleSearch = () => {
    const filteredResults = contactsList.filter((contact) => {
      return Object.keys(filters).every((key) => {
        if (key === "dob" && filters[key]) {
          const contactDob = new Date(contact[key]).toISOString().split("T")[0];
          return contactDob.includes(filters[key]);
        }
        return contact[key]
          ?.toString()
          .toLowerCase()
          .includes(filters[key]?.toString().toLowerCase());
      });
    });
    setFilteredContacts(filteredResults);
    setCurrentPage(1);
  };

  const onPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  const onNextPage = () => {
    if (currentPage < totalPages && filteredContacts.length > contactsPerPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-bold"> Choose a contact </h1>
      <Filters 
        filters={filters}
        clearFields={clearFields}
        handleSearch={handleSearch}
        handleFilterChange={handleFilterChange}
      />
      
      <ContactsList 
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
        currentPage={currentPage}
        totalPages={totalPages}
        currentContacts={currentContacts}
        selectedContactId={selectedContactId}
        handleContactSelect={handleContactSelect}
      />

      {selectedContact && (
        <ContactDetails selectedContact={selectedContact} />
      )}
    </div>
  );
};

export default App;
