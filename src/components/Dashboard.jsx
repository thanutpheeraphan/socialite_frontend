import React, { Fragment, useState, useEffect } from "react";

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");

  async function getName() {
    try {
      const response = await fetch("/dashboard/", {
        method: "GET",
        headers: {jwt_token: localStorage.token }
      });

	  const parseResponse = await response.json();
	  console.log(parseResponse)
	  setName(parseResponse.user_name)

	//   console.log(parseResponse);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getName();
  },[]); //[] is to make 1 request when rendered

  return (
    <Fragment>
      <h1>Dashboard {name} </h1>
    </Fragment>
  );
};

export default Dashboard;
