import React from "react";
import "./App.css";

function ContactDetails({ selectedContact }) {
  return (
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
  );
}

export default ContactDetails;
