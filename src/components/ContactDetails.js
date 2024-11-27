import React from "react";
import "../App.css";

function ContactDetails({ selectedContact }) {
  return (
    <div className="w-fit border border-gray-300 mx-4">
      <h2 className="font-bold text-xl px-5 py-3 bg-[#d3d3d3] mb-3">Selected Contact</h2>
      <p className="mb-2 text-lg mx-5 flex">
        <span className="w-[150px] font-bold"> Name: </span>
        <span className="text-[#377ed9] font-semibold"> {selectedContact?.firstName} {" "} {selectedContact?.lastName} </span>
      </p>
      <p className="mb-2 text-lg mx-5 flex">
        <span className="w-[150px] font-bold"> Email:</span>
        <span className="text-[#377ed9] font-semibold"> {selectedContact?.email} </span>
      </p>
      <p className="mb-2 text-lg mx-5 flex">
        <span className="w-[150px] font-bold"> Phone:</span>
        <span className="text-[#377ed9] font-semibold"> {selectedContact?.phone} </span>
      </p>
      <p className="mb-2 text-lg mx-5 flex">
        <span className="w-[150px] font-bold"> Address:</span>
        <span className="text-[#377ed9] font-semibold"> {selectedContact?.address} </span>
      </p>
      <p className="mb-2 text-lg mx-5 flex">
        <span className="w-[150px] font-bold"> City:</span>
        <span className="text-[#377ed9] font-semibold"> {selectedContact?.city} </span>
      </p>
      <p className="mb-2 text-lg mx-5 flex">
        <span className="w-[150px] font-bold"> State:</span>
        <span className="text-[#377ed9] font-semibold"> {selectedContact?.state} </span>
      </p>
      <p className="mb-2 text-lg mx-5 flex">
        <span className="w-[150px] font-bold"> Zip Code:</span>
        <span className="text-[#377ed9] font-semibold"> {selectedContact?.zip} </span>
      </p>
    </div>
  );
}

export default ContactDetails;
