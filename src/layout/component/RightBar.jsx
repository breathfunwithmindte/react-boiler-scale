import React from 'react';
import useEngine from '../../context/pages/EngineContext';

function RightBar() {
  const {state} = useEngine();

  return (
    <div className="sp-4 bg-1" style={{width: "300px", height: "100%", position: "sticky", top: 0,  borderLeft: "1px solid var(--background-5)", boxShadow: "0px 1.4px 6.9px 0.14px rgba(0,0,0,0.14)"}}>
      {state.title}
    </div>
  );
}

export default RightBar;