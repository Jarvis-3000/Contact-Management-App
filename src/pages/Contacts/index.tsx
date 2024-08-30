import React, { useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query";
import NoContactFound from "./NoContactFound";
import Modal from "../../components/Modal";
import AddIcon from "../../assets/add.svg";
import Button from "../../components/Button";

const Contacts: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="flex-1 p-4 space-y-4">
      <Button onClick={() => setIsAdding((prev) => !prev)}>
        <img src={AddIcon} alt="add icon" />
        New Contact
      </Button>
      <Modal isOpen={isAdding} onClose={() => setIsAdding(false)}>
        <ContactForm onSubmit={() => setIsAdding(false)} />
      </Modal>
      {contacts.length == 0 ? <NoContactFound /> : <ContactList />}
    </div>
  );
};

export default Contacts;
