import { createContext, useContext, useEffect, useState } from "react";
import useRichFetch from "../../hooks/useRichFetch";
import LandingPageLayout from "../../layout/page/LandingPageLayout";

const LandingPageContext = createContext();

export const LandingPageContextProvider = ({children, application}) => {
  const [state, setState] = useState([]);

  return (
    <LandingPageContext.Provider value={{ state,setState}}>
      <LandingPageLayout>
        {children}
      </LandingPageLayout>
    </LandingPageContext.Provider>
  )
}

export default function useLandingPage () {
  return useContext(LandingPageContext);
}