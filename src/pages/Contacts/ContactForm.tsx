import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addContact, editContact } from "../../redux/cotactSlice";
import { Contact, Status } from "../../types";
import Button from "../../components/Button";

interface ContactFormProps {
  initialData?: Contact;
  onSubmit: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ initialData, onSubmit }) => {
  const dispatch = useDispatch();
  const [firstname, setFirstname] = useState(initialData?.firstname || "");
  const [lastname, setLastname] = useState(initialData?.lastname || "");
  const [status, setStatus] = useState(initialData?.status || Status.ACTIVE);

  const handleSubmit = () => {
    if (initialData) {
      dispatch(editContact({ ...initialData, firstname, lastname, status }));
    } else {
      dispatch(addContact({ firstname, lastname, status }));
    }
    onSubmit();
  };

  return (
    <div className="p-6">
      {/* First Name */}
      <div className="flex justify-between gap-6 mb-4">
        <label className="block text-gray-700">First Name:</label>
        <input
          type="text"
          className="w-[350px] p-2 border border-gray-300 rounded mt-1"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>
      {/* Last Name */}
      <div className="flex justify-between gap-6 mb-4">
        <label className="block text-gray-700">Last Name:</label>
        <input
          type="text"
          className="w-[350px] p-2 border border-gray-300 rounded mt-1"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      {/* Status */}
      <div className="flex justify-between gap-6 mb-4">
        <label>Status: </label>
        <div className="flex w-[350px] gap-10">
          <div className="flex items-center gap-2 mb-4">
            <input
              className="cursor-pointer"
              checked={status === Status.ACTIVE}
              type="checkbox"
              name="status"
              onChange={() => setStatus(Status.ACTIVE)}
            />
            <label className="text-gray-700 cursor-pointer">Active</label>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <input
              className="cursor-pointer rounded-lg"
              checked={status === Status.INACTIVE}
              type="checkbox"
              name="status"
              onChange={() => setStatus(Status.INACTIVE)}
            />
            <label className="text-gray-700 cursor-pointer">Inactive</label>
          </div>
        </div>
      </div>
      <Button onClick={handleSubmit} disabled={!firstname || !lastname}>
        {initialData ? "Update Contact" : "Add Contact"}
      </Button>
    </div>
  );
};

export default ContactForm;
