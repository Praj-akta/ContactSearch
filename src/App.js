import React, { useState } from "react";
import { contactsList } from "./data";
import Filters from "./components/Filters";
import ContactsList from "./components/ContactsList";
import ContactDetails from "./components/ContactDetails";
import "./App.css";

const App = () => {
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
    setFilteredContacts(contactsList);
    setCurrentPage(1);
  };

  const handleSearch = (filters) => {
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
      <Filters clearFields={clearFields} handleSearch={handleSearch} />

      <ContactsList
        onNextPage={onNextPage}
        onPrevPage={onPrevPage}
        currentPage={currentPage}
        totalPages={totalPages}
        currentContacts={currentContacts}
        selectedContactId={selectedContactId}
        handleContactSelect={handleContactSelect}
      />

      {selectedContact && <ContactDetails selectedContact={selectedContact} />}
    </div>
  );
};

export default App;
