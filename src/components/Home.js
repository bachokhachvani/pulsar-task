import React, { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useHistory } from "react-router-dom";

const cookies = new Cookies();
function Home() {
  const path = useHistory();
  const [number, setnumber] = useState();
  const [usernumber, setusernumber] = useState("");
  const Usersurl = "http://localhost:3000/users";
  const Geturl = `http://localhost:3000/users/${cookies.get("id")}`;
  const Logouturl = "http://localhost:3000/user/logoutAll";
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies.get("token")}`,
    },
  };
  const headerslogout = {
    headers: {
      Authorization: `Bearer ${cookies.get("token")}`,
    },
  };
  axios.get(Geturl).then(function (response) {
    setnumber(response.data.number);
    console.log(response.data);
  });
  const onclickHandler = () => {
    axios
      .post(Logouturl, {}, headers)
      .then(function (response) {
        path.push("/login");
        cookies.remove("token");
        cookies.remove("id");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  axios
    .get(Usersurl, headers)
    .then(function (response) {
      setusernumber(response.data.length);
    })
    .catch(function (error) {
      console.log(error);
    });
  if (number === 1 && usernumber > 3) {
    return (
      <div>
        <h1>welcome!</h1>
        <h2>You’re lucky person</h2>
        <button onClick={onclickHandler}>Logout</button>
      </div>
    );
  } else if (number !== 1 && usernumber > 3) {
    return (
      <div>
        <h1>its your {number}th login </h1>
        <h2>You’re lucky person</h2>
        <button onClick={onclickHandler}>Logout</button>
      </div>
    );
  } else if (number === 1 && usernumber < 3) {
    return (
      <div>
        <h1>welcome! </h1>
        <button onClick={onclickHandler}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>its your {number}th login </h1>
        <button onClick={onclickHandler}>Logout</button>
      </div>
    );
  }
}
export default Home;
