import React, { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Simulate a login request to the server
    setTimeout(() => {
      // If the username and password are correct, display a success message
      if (username === "admin" && password === "password") {
        setMessage("Login successful!");
      } else {
        // Otherwise, display an error message
        setMessage("Invalid username or password");
      }
    }, 1000);
  }

  return (
    <div>
      <h1>CSRF and XSS Demo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button type="submit">Log in</button>
      </form>
      {message && <p>{message}</p>}
      <hr />
      <h2>CSRF Attack</h2>
      <p>
        In a CSRF attack, an attacker tricks the victim into making a request to
        a trusted website.
      </p>
      <p>
        Try clicking the button below. It will make a request to the server to
        transfer $1000 from your account to the attacker's account.
      </p>
      <button
        onClick={() => {
          // Simulate a request to the server to transfer funds
          setTimeout(() => {
            setMessage("$1000 transferred to attacker's account");
          }, 1000);
        }}
      >
        Transfer funds
      </button>
      <hr />
      <h2>XSS Attack</h2>
      <p>
        In an XSS attack, an attacker injects malicious code into a website or
        web application in order to execute it in the victim's web browser.
      </p>
      <p>
        Try entering some JavaScript into the input below and clicking the
        button. The script will be executed in your browser.
      </p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          // Execute the script entered by the user
          eval(document.getElementById("xssInput").value);
        }}
      >
        <input id="xssInput" />
        <button type="submit">Execute</button>
      </form>
    </div>
  );
}

export default App;
