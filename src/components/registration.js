import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";

const cookies = new Cookies();
function Registration() {
  const createUrl = "http://localhost:3000/users";
  const path = useHistory();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userHandler = (event) => {
    setUser(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const parameters = {
    name: user,
    email: email,
    password: password,
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(user);
    console.log(email);
    console.log(password);
    axios
      .post(createUrl, parameters)
      .then(function (response) {
        cookies.set("token", response.data.token);
        cookies.set("id", response.data.user._id);
        console.log(response);
        if (cookies.get("token") === response.data.token) {
          path.push("/Home");
        } else {
          console.log("token is not new");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // ref={nameInputRef}
  // onChange={userHandler}

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicUser">
          <Form.Label>User</Form.Label>
          <Form.Control onChange={userHandler} type="user" placeholder="user" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={emailHandler}
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={passwordHandler}
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button onClick={formSubmitHandler} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Registration;
