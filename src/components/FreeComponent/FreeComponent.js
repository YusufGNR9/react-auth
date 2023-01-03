import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FreeComponent() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    //SET configurations for the API call here
    const configuration = {
      method: "get",
      url: "https://react-auth.herokuapp.com/free-endpoint",
    };

    //make the api call
    axios
      .get(configuration)
      .then((result) => {
        //asign the message in our result to the message we initialized above
        setMessage(result.data.message);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);
  return (
    <div>
      <h1 className="text-center"> Free component </h1>
      <h3 className="text-center">{message}</h3>
    </div>
  );
}
