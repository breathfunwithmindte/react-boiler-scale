import React, { useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/css/app.css";
import "./assets/css/index.css";
import "./assets/css/lib.css";
import { ContextProvider } from "./context/main";
import config from "./data/config";
import Button from "@mui/material/Button";
import MainLayout from "./layout/page/MainLayout";
import useMain from "./context/main";
import { SolpageContextProvider } from "./context/pages/SolpageContext";
import Solpage from "./pages/primary/Solpage";
import { EngineContextProvider } from "./context/pages/EngineContext";
import EnginePage from "./pages/EnginePage";
import { LoginContextProvider } from "./context/pages/AdminLoginContext";
import AdminLogin from './pages/AdminLogin';
import { RegisterContextProvider } from "./context/pages/AdminRegisterContext";
import AdminRegister from './pages/AdminRegister';
import {CreateContextProvider} from "./context/pages/CreateGameContext";
import CreateGamePage from "./pages/CreateGamePage";
import {LandingPageContextProvider} from "./context/pages/LandingPageContext";
import LandingPage from './pages/LandingPage';
import {MyQContextProvider} from './context/pages/MyQContext';
import MyQuestionsPage from './pages/MyQuestionsPage';


function App() {
  const { gstate } = useMain();

  return (
    <Routes>
       <Route path={"admin"} >
        <Route
          path={"questionaire-engine"}
          element={
            <MainLayout>
              <EngineContextProvider>
                <EnginePage />
              </EngineContextProvider>
            </MainLayout>
          }
        />
        <Route
          path={"login"}
          element={
            <MainLayout>
              <LoginContextProvider>
                <AdminLogin/>
              </LoginContextProvider>
            </MainLayout>
          }
        />
         <Route
          path={"register"}
          element={
            <MainLayout>
              <RegisterContextProvider>
                <AdminRegister/>
              </RegisterContextProvider>
            </MainLayout>
          }
        />
        <Route
          path={"create-game"}
          element={
            <MainLayout>
              <CreateContextProvider>
                <CreateGamePage/>
              </CreateContextProvider>
            </MainLayout>
          }
        />
        <Route
          path={"questionaires"}
          element={
            <MainLayout>
              <MyQContextProvider>
                <MyQuestionsPage/>
              </MyQContextProvider>
            </MainLayout>
          }
        />
      </Route>
      <Route exact path={"/"} element={ <MainLayout>
              <LandingPageContextProvider>
                <LandingPage/>
              </LandingPageContextProvider>
            </MainLayout>}>
        <Route path={'homepage'} element={
            <MainLayout>
              <LandingPageContextProvider>
                <LandingPage/>
              </LandingPageContextProvider>
            </MainLayout>}
            />
      </Route>
      <Route path={"/*"} element={<div>Not Found</div>}/>
    </Routes>
  );
}

export default App;
