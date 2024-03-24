import { useState } from "react";
import { API } from "../constants";

const useAuthLogin = () => {
  const [dataAuthLogin, setDataAuthLogin] = useState({});
  console.log({ dataAuthLogin });

  const postAuthLogin = ({ param, id, valNum }) => {
    fetch(`${API}/${valNum}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        id: valNum,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setDataAuthLogin(result);
        console.log({ result });
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
