import React from 'react';
import HeaderEngine from "../component/HeaderEngine";

const EngineLayout = ({children}) => {
  return (
    <div>
      <HeaderEngine/>

      {children}
    </div>
  );
};

export default EngineLayout;