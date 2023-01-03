import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

//get the token genereated in login
const token = cookies.get("TOKEN");

const AuthComponent = () => {
  const [message, setMessage] = useState("");
  useEffect(() => {
    //api çağrısı için düzenlemeleri burada yapıyoruz.
    const configuration = {
      method: "get",
      url: "https://react-auth.herokuapp.com/auth-endpoint",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // api çağrısını yapıyoruz.
    axios(configuration)
      .then((result) => {
        // assign the message in our result to the message we initialized above
        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

  const logout = () => {
    //destroy the cookie
    cookies.remove("TOKEN", { path: "/" });
    //redirect user to the landing page
    window.location.href = "/";
  };
  return (
    <div className="text-center">
      <h1>AuthComponent</h1>

      <h3 className="text-danger">{message}</h3>

      <Button type="submit" variant="danger" onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
};

export default AuthComponent;
