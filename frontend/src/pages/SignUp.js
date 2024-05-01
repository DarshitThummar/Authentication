import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const api = axios.create({ baseURL: "http://localhost:5000/" });
const SignUp = () => {
  const navigate = useNavigate();

  const [user, setuser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    role_name: "admin",
  });

  const handleChange = (field, value) => {
    setuser({ ...user, [field]: value });
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    console.log(user);
    api
      .post("api/register", user)
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <form className="mx-auto">
        <div className="my-5">
          <ul class="nav nav-underline">
            <li
              className="nav-item coursor-pointer"
              onClick={() => setuser({ ...user, role_name: "admin" })}
            >
              <a
                className={`nav-link ${
                  user?.role_name === "admin" && "active"
                }`}
                aria-current="page"
                href={() => false}
              >
                Admin
              </a>
            </li>
            <li
              className="nav-item coursor-pointer"
              onClick={() => setuser({ ...user, role_name: "customer" })}
            >
              <a
                className={`nav-link coursor-pointer ${
                  user?.role_name === "customer" && "active"
                }`}
                aria-current="page"
                href={() => false}
              >
                Customer
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => handleChange("first_name", e.target.value)}
            value={user?.first_name}
            required
          />
        </div>{" "}
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => handleChange("last_name", e.target.value)}
            value={user?.last_name}
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => handleChange("email", e.target.value)}
            value={user?.email}
            required
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => handleChange("password", e.target.value)}
            value={user?.password}
            required
          />
        </div>
        <button className="btn btn-primary" onClick={(e) => submitHandle(e)}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
