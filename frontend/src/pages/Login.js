import axios from "axios";
import React, { useState } from "react";

const api = axios.create({ baseURL: "http://localhost:5000/" });

const Login = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const [messages, setMessages] = useState("");

  const handleChange = (field, value) => {
    setuser({ ...user, [field]: value });
  };

  const submitHandle = async (e) => {
    e.preventDefault();
    console.log(user);
    api
      .post("api/login", user)
      .then((result) => {
        console.log(result);
        setMessages(result?.data?.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container d-flex align-items-center justify-content-center my-5">
      <form>
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
        <p>{messages}</p>
      </form>
    </div>
  );
};

export default Login;
