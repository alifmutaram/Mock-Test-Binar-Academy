import { useState } from "react";
import { API } from "../constants";

const useAuthLogin = () => {
  const [dataAuthLogin, setDataAuthLogin] = useState({});

  const postAuthLogin = () => {
    fetch(`${API}/login`, {
      method: "POST",
      body: JSON.stringify({
        id: 2234,
        name: "name",
        email: "email",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log({ result });
        setDataAuthLogin(result);
      });
  };

  return [
    postAuthLogin,
    {
      dataAuthLogin,
    },
  ];
};

export default useAuthLogin;
