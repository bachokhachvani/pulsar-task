import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";
const cookies = new Cookies();
function Login() {
  const path = useHistory();
  const loginUrl = "http://localhost:3000/users/login";
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const parameters = {
    email: email,
    password: password,
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log([email, password]);
    axios
      .post(loginUrl, parameters)
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

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={emailHandler}
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

        <Button onClick={onSubmitHandler} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Login;
