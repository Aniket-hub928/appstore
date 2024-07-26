import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = (e) => {
  e.preventDefault();
  // Basic validation
  if (!email.trim()) {
    setError("Please enter your email.");
    return;
  }
  if (!password.trim()) {
    setError("Please enter your password.");
    return;
  }

  // Retrieve users from local storage
  const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

  // Find user with provided email
  const user = registeredUsers.find(user => user.email === email);

  // If user not found, display error
  if (!user) {
    setError("User not found. Please register first.");
    return;
  }

  // Check if password matches
  if (password !== user.password) {
    setError("Incorrect password. Please try again.");
    return;
  }

  setError("");

  // Determine the user type
  const userType = user.userType;

  // Redirect based on user type
  if (userType === "admin") {
    // Redirect admin to admin panel
    window.location.href = "/adminlibrary";
   
  } else {
    // Redirect regular user to user panel
    window.location.href = "/userlibrary";
  }
};

  
    return (
    <>
      <div className="lgn">
        <div className="container" id="logn">
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label
                className="form-check-label"
                htmlFor="flexRadioDefault1"
              >
                Login as User
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label
                className="form-check-label"
                htmlFor="flexRadioDefault2"
              >
                Login as Admin
              </label>
            </div>
            
            {error && <div className="alert alert-danger">{error}</div>}
            <div>
              <p className="h6">
                Don't have an account!{" "}
                <span>
                  {" "}
                  <a href="/register" className="rg">
                    Register here !
                  </a>
                </span>
              </p>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          
        </div>
      </div>
    </>
  );
};

export default Login;
