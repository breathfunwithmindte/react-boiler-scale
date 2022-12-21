import { createContext, useContext, useEffect, useState } from "react";
import useRichFetch from "../../hooks/useRichFetch";
import CreateGameLayout from "../../layout/page/CreateGameLayout";

const CreateGameContext = createContext();

export const CreateContextProvider = ({children, application}) => {
  const [state, setState] = useState([]);
  const [pin,setPin] = useState('');

  return (
    <CreateGameContext.Provider value={{ state,setState,pin,setPin }}>
      <CreateGameLayout>
        {children}
      </CreateGameLayout>
    </CreateGameContext.Provider>
  )
}

export default function useCreateGame () {
  return useContext(CreateGameContext);
}