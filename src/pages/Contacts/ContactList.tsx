import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { deleteContact } from "../../redux/cotactSlice";
import ContactForm from "./ContactForm";
import Modal from "../../components/Modal";
import EyeIcon from "../../assets/eye.svg";
import EditIcon from "../../assets/Icon.svg";
import DeleteIcon from "../../assets/delete.svg";
import { Contact } from "../../types";
import ContactView from "./ContactView";
import Button from "../../components/Button";

const capitalizeFirstLetter = (text: string): string => {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const ContactList: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();
  const [editingContact, setEditingContact] = useState<string | null>(null);
  const [viewContact, setViewContact] = useState<Contact | null>(null);

  const handleDelete = (id: string) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="space-y-4">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="flex gap-5 flex-col md:flex-row md:justify-between md:items-center p-4 bg-white rounded-md shadow-md"
        >
          {/* Details */}
          <div>
            <p className="text-gray-600 font-semibold">
              {capitalizeFirstLetter(contact.firstname)}{" "}
              {capitalizeFirstLetter(contact.lastname)}
            </p>
          </div>
          {/* Action Buttons */}
          <div className="flex space-x-2">
            <Button onClick={() => setViewContact(contact)} variant="info">
              <img src={EyeIcon} alt="eye icon" /> View
            </Button>
            <Button onClick={() => setEditingContact(contact.id)}>
              <img src={EditIcon} alt="edit icon" /> Edit
            </Button>
            <Button onClick={() => handleDelete(contact.id)} variant="danger">
              <img src={DeleteIcon} alt="delete icon" /> Delete
            </Button>
          </div>
        </div>
      ))}
      <Modal
        isOpen={Boolean(editingContact)}
        onClose={() => setEditingContact(null)}
      >
        <ContactForm
          initialData={contacts.find((c) => c.id === editingContact)!}
          onSubmit={() => setEditingContact(null)}
        />
      </Modal>
      <Modal isOpen={Boolean(viewContact)} onClose={() => setViewContact(null)}>
        <ContactView contact={viewContact} />
      </Modal>
    </div>
  );
};

export default ContactList;
