import React, { useEffect } from "react";
import { openDB } from "idb"; // Import idb library

const LeaveNote = ({ messages, setMessages }) => {
  // Open IndexedDB on component mount
  useEffect(() => {
    const initDB = async () => {
      const db = await openDB("messagesDB", 1, {
        upgrade(db) {
          // Create object store for messages with an auto-incremented key
          db.createObjectStore("messages", {
            keyPath: "id", // Use id as the key
            autoIncrement: true, // Automatically generate ids
          });
        },
      });

      // Fetch messages from IndexedDB
      const allMessages = await db.getAll("messages");
      setMessages(allMessages);
    };

    initDB();
  }, [setMessages]);

  return (
    <div>
      <h2>Messages</h2>
      <div class="content">
        <ul class="team">
          {messages.map((msg, index) => (
            <li class="member co-funder">
              <div class="thumb">
                <img
                  src="https://assets.codepen.io/39255/internal/avatars/users/default.png?height=120&width=120"
                  alt={`user-${index}`}
                />
              </div>
              <div class="description">
                <h3>{msg.name}</h3>
                <p>
                  {msg.message}
                  <br />
                  <a href="https://codepen.io/chriscoyier/">{msg.email}</a>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeaveNote;
