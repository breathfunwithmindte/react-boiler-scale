import { createContext, useContext, useEffect, useState } from "react";
import useRichFetch from "../../hooks/useRichFetch";
import RegisterLayout from "../../layout/page/RegisterLayout";

const RegisterContext = createContext();

export const RegisterContextProvider = ({children, application}) => {
  const [state, setState] = useState({});

  return (
    <RegisterContext.Provider value={{ state,setState}}>
      <RegisterLayout>
        {children}
      </RegisterLayout>
    </RegisterContext.Provider>
  )
}

export default function useRegister () {
  return useContext(RegisterContext);
}