import React from "react";
import { Contact, Status } from "../../types";

interface ContactViewProps {
  contact: Contact;
}

const ContactView: React.FC<ContactViewProps> = ({ contact }) => {
  return (
    <div className="flex flex-col gap-4 p-6 min-w-[200px]">
      <p className="text-gray-600">First Name: {contact.firstname}</p>
      <p className="text-gray-600">Last Name: {contact.lastname}</p>
      <p className="text-gray-600">
        Status:{" "}
        <span
          className={`font-semibold ${
            contact.status === Status.ACTIVE ? "text-green-500" : "text-red-500"
          }`}
        >
          {contact.status === Status.ACTIVE ? "Active" : "Inactive"}
        </span>
      </p>
    </div>
  );
};

export default ContactView;
