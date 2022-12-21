import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import useMain from '../../context/main';
import Button from '@mui/material/Button'
import { useNavigate,useLocation} from 'react-router';

const MainLayout = ({ children }) => {
  const { gstate } = useMain();
  const n = useNavigate()
  const wd1 = "300px"
  const wdt3 = "56px"
  const wd2 = "calc(100vw - 356px)"
  const match = useLocation().pathname == '/admin/questionaire-engine';
  return (
    <div className={"main-layout"}>
      {!match ? <Header /> : <></>}
      <div className="main-layout-in">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;


MainLayout.propTypes = {
  children: PropTypes.element.isRequired
};