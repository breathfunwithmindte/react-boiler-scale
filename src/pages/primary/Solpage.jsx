import React from 'react';
import useSolpage from '../../context/pages/SolpageContext';
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router';
import Form from '../../widgets/form/Form';
import FormPropType from "../../widgets/form/types/FormPropType";

const Solpage = () => {
  const { state, page, application } = useSolpage();

  const navigate = useNavigate()
  
  return (
    <div>
      my page {page.name}
      <Button variant="text" color="primary" onClick={() => {
        navigate("/" + application.path + "/" + page.path);
      }}> Click me ! {"/" + application.path + "/" + page.path}
      </Button>
      <Form form={new FormPropType()} />
    </div>
  );
};

export default Solpage;