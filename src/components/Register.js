import React, { useState, useEffect } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactnumber: "",
    password: "",
    confirmPassword: "",
    userType: "" // Default value for user type
  });

  const [passwordError, setPasswordError] = useState("");
  const [contactNumberError, setContactNumberError] = useState("");
  const [registrationError, setRegistrationError] = useState("");
  const [registeredUsers, setRegisteredUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    setRegisteredUsers(storedUsers);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validate contact number when changed
    if (name === "contactnumber") {
      validateContactNumber(value);
    }
  };

  const validateContactNumber = (value) => {
    const regex = /^[0-9]{10}$/;
    if (!regex.test(value)) {
      setContactNumberError("Please enter a valid 10-digit mobile number");
    } else {
      setContactNumberError("");
    }
  };

  const validatePassword = () => {
    const { password } = formData;

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError("Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one special character");
      return false;
    }

    setPasswordError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validatePassword()) {
      return;
    }

    // Check if email already exists
    const existingUser = registeredUsers.find(user => user.email === formData.email);
    if (existingUser) {
      setRegistrationError("User with this email already exists. Please login.");
      return;
    }

    // If email is not registered, proceed with registration
// If email is not registered, proceed with registration
const newUser = {
  email: formData.email,
  contactnumber: formData.contactnumber,
  password: formData.password,
  name: formData.name,
  userType: formData.userType
};
registeredUsers.push(newUser);
localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

// Other form submission logic
console.log("Form submitted:", formData);
// Redirect or handle success as needed
window.location.href = "/login";
  };


  return (
    <>
      <div className="reg">
        <div className="container" id="rgt">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputName1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputName1" className="form-label">
                Contact Number
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputName1"
                name="contactnumber"
                value={formData.contactnumber}
                onChange={handleChange}
              />
              {contactNumberError && <div className="text-danger">{contactNumberError}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              {passwordError && <div className="text-danger">{passwordError}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputConfirmPassword1" className="form-label">
                Confirm password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputConfirmPassword1"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
           < div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="userType"
                id="flexRadioDefault1"
                value="admin"
                checked={formData.userType === "admin"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Register as Admin
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="userType"
                id="flexRadioDefault2"
                value="user"
                checked={formData.userType === "user"}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Register as User
              </label>
            </div>
            <div>
              <p className="h6">Already have an account! <span><a href="/login" className="lh">Login here!</a></span></p>
            </div>

            {registrationError && <div className="alert alert-danger">{registrationError}</div>}
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
