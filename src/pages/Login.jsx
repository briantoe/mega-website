import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Login = () => {
  // State to store user input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [invalidCreds, setInvalidCreds] = useState(false);

  const history = useHistory();

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., authenticate user)
    console.log("Login submitted with:", { username, password });
    // Reset the form fields
    if (validateLogin(username, password)) {
      setAuthenticated(true);
      history.push("/admin");
    }
    else {
        setInvalidCreds(true);
    }
    setUsername("");
    setPassword("");
  };

  const validateLogin = (username, password) => {
    // for now mock a true response, use a firebase function to validate a login somehow i think
    return true;
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {invalidCreds ? (<p>Invalid username or password!</p>) : (<></>)}
    </div>
  );
};
