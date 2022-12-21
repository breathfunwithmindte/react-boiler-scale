import {createContext,useContext, useEffect, useState } from "react";
import useRichFetch from "../../hooks/useRichFetch";
import MyQLayout from "../../layout/page/MyQLayout";

const MyQContext = createContext();

export const MyQContextProvider = ({children, application}) => {
  const [state, setState] = useState([]);

  return (
    <MyQContext.Provider value={{ state,setState }}>
      <MyQLayout>
        {children}
      </MyQLayout>
    </MyQContext.Provider>
  )
}

export default function useMyQ () {
  return useContext(MyQContext);
}