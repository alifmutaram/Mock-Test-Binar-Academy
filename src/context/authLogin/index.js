import { createContext } from "react";
import useAuthLogin from "../../hooks/useAuthLogin";

export const AuthContextLogin = createContext(null);

const AuthProviderLogin = ({ children }) => {
  const [postAuthLogin, dataAuthLogin] = useAuthLogin();
  const valHooks = [postAuthLogin, { ...dataAuthLogin }];
  return (
    <AuthContextLogin.Provider value={valHooks}>
      {children}
    </AuthContextLogin.Provider>
  );
};

export default AuthProviderLogin;
