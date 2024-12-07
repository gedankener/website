import React, { useRef, useState } from "react";
import PageTemplate from "../../components/PageTemplate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Import the icon
import "./noteModal.css";
import MessagesInbox from "./MessagesInbox";
import { openDB } from "idb"; // Import idb library

const LeaveNote = ({ isChaos }) => {
  const [messages, setMessages] = useState([]);
  const formRef = useRef();
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const formAction = (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());
    const { name, email, message } = data;

    // Open the database to add a new message
    const db = await openDB("messagesDB", 1);
    await db.add("messages", { name, email, message });

    // After saving, fetch updated messages and reset form
    const allMessages = await db.getAll("messages");
    setMessages(allMessages);
    setModal(false);
  };

  const content = (
    <div>
      <MessagesInbox messages={messages} setMessages={setMessages} />
      <button className="primary_btn" onClick={toggleModal}>
        <FontAwesomeIcon icon={faEnvelope} /> Leave a Note
      </button>
      <div
        id="myModal"
        className="modal"
        style={{ display: modal ? "block" : "none" }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h2>Leave Message</h2>
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
          </div>
          <div className="modal-body">
            <form id="noteForm" ref={formRef} onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" id="name" name="name" placeholder="Name" />
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <textarea name="message" placeholder="Your message" />
              </div>
              <div className="modal-footer">
                <button type="submit" className="primary_btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <PageTemplate title="Leave a Note" content={content} isChaos={isChaos} />
  );
};

export default LeaveNote;
