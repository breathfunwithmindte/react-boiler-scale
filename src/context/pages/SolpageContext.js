import { createContext, useContext, useEffect, useState } from "react";
import useRichFetch from "../../hooks/useRichFetch";
import SolpageLayout from "../../layout/page/SolpageLayout";


const solpageContext = createContext();

export const SolpageContextProvider = ({children, page_prop, application}) => {
  const [res, loading, error, refech, setRes] = useRichFetch("api/v1/server.do/build-page", { pagename: page_prop.name });
  const [state, setState] = useState(new Object());
  const [page, setPage] = useState(new Object())

  useEffect(() => {
    console.log("rendering")
    setPage(page_prop)
  }, [page_prop])

  if(loading) return (<p>loading</p>)
  if(error) return <p>{JSON.stringify(error)}</p>
  return (
    <solpageContext.Provider value={{ state, page, application }}>
      <SolpageLayout> {children}{JSON.stringify(res)} </SolpageLayout>
    </solpageContext.Provider>
  )
}

export default function useSolpage () {
  return useContext(solpageContext);
}