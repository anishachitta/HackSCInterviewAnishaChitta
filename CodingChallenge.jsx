// Import React and useState from the React library
import React, { useState, useEffect } from "react";

// Define a functional component named "CodingChallenge"
const CodingChallenge = () => {
  // JSX content of the component
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //state for the data:
  const [data, setData] = useState({});

  //event handler for name:
  const handleNameSave = (e) => {
    setName(e.target.value);
    //console.log(name);
  };

  //event handler for email:
  const handleEmailSave = (e) => {
    setEmail(e.target.value);

    //console.log(email);
  };

  const fetchData = () => {
    return fetch(
      "https://s24-interview.joeyyap.workers.dev/user/6202b04a-6336-4755-84b0-56ceecc9daeb"
    )
      .then((res) => res.json())
      .then((d) => setData(d));
  };

  const saveName = () => {
    //form the object { name = name}
    // newdata = {"name" : name}

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name }), //marshelling
    };

    return fetch(
      "https://s24-interview.joeyyap.workers.dev/user/6202b04a-6336-4755-84b0-56ceecc9daeb/name",
      options
    );
  };

  const saveEmail = () => {
    //form the object { name = name}
    // newdata = {"name" : name}

    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }), //marshelling
    };

    return fetch(
      "https://s24-interview.joeyyap.workers.dev/user/6202b04a-6336-4755-84b0-56ceecc9daeb/email",
      options
    );
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data.data);
  console.log(name);
  return (
    <div>
      {/*functionality for name */}
      <h2>Name: </h2>
      <input
        defaultValue={data.data ? data.data.name : null}
        onChange={handleNameSave}
      />
      <button
        onClick={() => {
          saveName();
        }}
      >
        Save
      </button>
      {/*functionality for email */}
      <h2>Email: </h2>
      <input
        defaultValue={data.data ? data.data.email : null}
        onChange={handleEmailSave}
      />
      <button
        onClick={() => {
          saveEmail();
        }}
      >
        Save
      </button>
    </div>
  );
};

// Export the component to use it elsewhere
export default CodingChallenge;
