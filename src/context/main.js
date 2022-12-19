import { createContext, useContext, useState, useEffect ,useReducer} from "react"
import { LightStyle } from "../data/Styles";
import useRichFetch from "../hooks/useRichFetch";
import Login from "../pages/public/Login";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {auth_reducer,auth_Initialstate} from './reducers/mainReducer';
import types from './types/mainTypes';
import getCookie from '../context/helpers/cookie';
import axios from 'axios'
const cookie = getCookie('jwtToken');

const mainContext = createContext();

export const ContextProvider = ({children}) => {
  const [globalState,dispatchGlobalState] = useReducer(auth_reducer,auth_Initialstate)
  const [gstate, loading, error, refech, setGstate] = useRichFetch("api/v1/server.do/build-app");
  const [theme, setTheme] = useState(LightStyle);
  const [token, setToken] = useState(cookie)
  useEffect(() => {
    if(token){
        authApiRequest(dispatchGlobalState,token)
    }else{
        dispatchGlobalState({key:types.LOADING})
    }
  }, [])
  if(loading) return <p>loading...</p>
  // if(!gstate && error && error.status === 401) return <div className="AppWrapper" style={createStyle(theme?.css)}><Login /></div>
  // if(!gstate) return <p>error...{JSON.stringify(error)}</p>
  // if(error) return <p>error...</p>
  return (
    <mainContext.Provider value={{ theme, gstate, setGstate,globalState,dispatchGlobalState,setToken }}>
      <ThemeProvider theme={createTheme(theme.mui)}>
        <div className="App bg-2" style={createStyle(theme?.css)}>{children}</div>
      </ThemeProvider>
    </mainContext.Provider>
  )
}

export default function useMain () {
  const smth = useContext(mainContext);
  return smth;
}

function createStyle(style) {
  let obj = {};
  if(!style) return {};
  for (const key in style) {
    if (Object.hasOwnProperty.call(style, key)) {
      obj[`--${key}`] = style[key];
    }
  }

  return obj;
}

async function authApiRequest(dispatchGlobalState,token){
  const headers = { 
    'Content-Type': 'application/json',
};

  const Response = await axios.get('http://127.0.0.1:8000/api/v1/auth/jwt-auth/authenticate',token,{headers});
  if(Response.error || Response.status !== 200){
      dispatchGlobalState({key:types.NOTAUTHENTICATED})
  }else{
      dispatchGlobalState({key:types.AUTHENTICATED, payload:{token:'default', isAuth:true, user:Response.data.user}})
  }
}