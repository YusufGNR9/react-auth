import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    //set configuration
    const configuration = {
      method: "post",
      url: "https://react-auth.herokuapp.com/login",
      data: {
        email,
        password,
      },
    };

    axios(configuration)
      .then((result) => {
        setLogin(true);
        //set the cookie
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        //redirect user to the auth page
        window.location.href = "/auth";
      })
      .catch((error) => {
        error = new Error();
      });

    alert("Submitted");
  };
  return (
    <>
      <h2>Login</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="secondary" onClick={(e) => handleSubmit(e)}>
          Submit
        </Button>

        {/* display success message */}
        {login ? (
          <p className="text-success">You are logged in Successfuly</p>
        ) : (
          <p className="text-danger">You are Not Logged in</p>
        )}
      </Form>
    </>
  );
}
