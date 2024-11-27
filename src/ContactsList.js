import React from "react";
import leftArrowImg from "./images/left-arrow.png";
import rightArrowImg from "./images/right-arrow.png";
import "./App.css";

function ContactsList({
  currentPage,
  totalPages,
  currentContacts,
  onNextPage,
  onPrevPage,
  selectedContactId,
  handleContactSelect,
}) {
  return (
    <div className="contact-list">
      <div className="table-scroll">
        <table className="main-table">
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
            {currentContacts?.map((contact) => (
              <tr key={contact.id} className="border-b border-gray-300">
                <td>
                  <input
                    type="checkbox"
                    checked={contact?.id === selectedContactId}
                    onChange={(_) => handleContactSelect(contact)}
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
      </div>

      {currentContacts?.length === 0 && (
        <div className="w-full mx-4 text-center my-5">
          No contacts to display, modify your search
        </div>
      )}

      {currentContacts?.length > 0 && (
        <div className="flex items-center justify-end my-3 mr-10">
          <img
            src={leftArrowImg}
            alt="left-arrow"
            onClick={(_) => onPrevPage()}
            className={`w-5 h-5 mx-1 ${
              currentPage === 1
                ? "opacity-25 cursor-not-allowed"
                : "opacity-45 cursor-pointer"
            }`}
          />
          <button className="bg-[#377ed9] text-white px-4 py-1">
            {currentPage}
          </button>
          <img
            src={rightArrowImg}
            alt="right-arrow"
            onClick={(_) => onNextPage()}
            className={`w-5 h-5 mx-1 ${
              currentPage === totalPages
                ? "opacity-25 cursor-not-allowed"
                : "opacity-45 cursor-pointer"
            }`}
          />
        </div>
      )}
    </div>
  );
}

export default ContactsList;
