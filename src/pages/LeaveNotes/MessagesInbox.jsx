import React, { useEffect } from "react";
import { openDB } from "idb"; // Import idb library

const LeaveNote = ({ messages, setMessages }) => {
  // Open IndexedDB on component mount
  useEffect(() => {
    const initDB = async () => {
      const db = await openDB("messagesDB", 1, {
        upgrade(db) {
          // Create object store for messages with an auto-incremented key
          const store = db.createObjectStore("messages", {
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
  }, []);

  return (
    <div>
      <h2>Messages</h2>
      {/* <div class="content">
        <ul class="team">
          <li class="member co-funder">
            <div class="thumb">
              <img src="https://assets.codepen.io/39255/internal/avatars/users/default.png?height=120&width=120" />
            </div>
            <div class="description">
              <h3>Chris Coyier</h3>
              <p>
                Chris is a front-end developer and designer. He writes a bunch
                of HTML, CSS, and JavaScript and shakes the pom-poms for
                CodePen.
                <br />
                <a href="https://codepen.io/chriscoyier/">@chriscoyier</a>
              </p>
            </div>
          </li>
          <li class="member co-funder">
            <div class="thumb">
              <img src="https://assets.codepen.io/39255/internal/avatars/users/default.png?height=120&width=120" />
            </div>
            <div class="description">
              <h3>Alex Vazquez</h3>
              <p>
                Alex is a full stack developer. Alex does JavaScript development
                for CodePen, both front end and back, and just about everything
                else.
                <br />
                <a href="https://codepen.io/quezo/">@quezo</a>
              </p>
            </div>
          </li>
          <li class="member">
            <div class="thumb">
              <img src="https://assets.codepen.io/39255/internal/avatars/users/default.png?height=120&width=120" />
            </div>
            <div class="description">
              <h3>Marie Mosley</h3>
              <p>
                Marie wears a lot of hats. She is our documentation lead,
                customer support maestra, editor, and community manager.
                <br />
                <a href="https://codepen.io/mariemosley/">@mariemosley</a>
              </p>
            </div>
          </li>
          <li class="member">
            <div class="thumb">
              <img src="https://assets.codepen.io/39255/internal/avatars/users/default.png?height=120&width=120" />
            </div>
            <div class="description">
              <h3>Stephen Shaw</h3>
              <p>
                Stephen is a designer/developer residing in Houston. He likes to
                build animations with CSS & JavaScript.
                <br />
                <a href="https://codepen.io/shshaw/">@shshaw</a>
              </p>
            </div>
          </li>
          <li class="member">
            <div class="thumb">
              <img src="https://assets.codepen.io/39255/internal/avatars/users/default.png?height=120&width=120" />
            </div>
            <div class="description">
              <h3>Rachel Smith</h3>
              <p>
                Rachel is a full stack'er in Australia. Not only a creative and
                talented designer and developer, but a great technical writer.
                <br />
                <a href="https://codepen.io/rachsmith/">@rachsmith</a>
              </p>
            </div>
          </li>
          <li class="member">
            <div class="thumb">
              <img src="https://assets.codepen.io/39255/internal/avatars/users/default.png?height=120&width=120" />
            </div>
            <div class="description">
              <h3>Robert Kieffer</h3>
              <p>
                Robert is a full-stack dev with a penchant for open-source work.
                He dwells in the murky depthsmurky depths of JS.
                <br />
                <a href="https://codepen.io/broofa/">@broofa</a>
              </p>
            </div>
          </li>
          <li class="member">
            <div class="thumb">
              <img src="https://assets.codepen.io/39255/internal/avatars/users/default.png?height=120&width=120" />
            </div>
            <div class="description">
              <h3>Dee Vazquez</h3>
              <p>
                Dee is a full stack developer who started her career in finance.
                She can jump from Rails to React to Go, and also manage our
                finances.
                <br />
                <a href="https://codepen.io/deequez/">@deequez</a>
              </p>
            </div>
          </li>
        </ul>
      </div> */}
      <div class="content">
        <ul class="team">
          {messages.map((msg) => (
            <li class="member co-funder">
              <div class="thumb">
                <img src="https://assets.codepen.io/39255/internal/avatars/users/default.png?height=120&width=120" />
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
