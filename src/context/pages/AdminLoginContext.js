import { createContext, useContext, useEffect, useState } from "react";
import LoginLayout from "../../layout/page/LoginLayout";

const LoginContext = createContext();

export const LoginContextProvider = ({children, application}) => {
  const [state, setState] = useState({});

  return (
    <LoginContext.Provider value={{ state,setState }}>
      <LoginLayout>
        {children}
      </LoginLayout>
    </LoginContext.Provider>
  )
}

export default function useLogin () {
  return useContext(LoginContext);
}