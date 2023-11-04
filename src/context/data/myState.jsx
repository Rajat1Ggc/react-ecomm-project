import React from 'react';
import myContext from './myContext';

const MyState = (props) => {
  const state = {
    name: 'rajat',
    rollNo: 33,
  };
  return (
    <myContext.Provider value={state}>{props.children}</myContext.Provider>
  );
};

export default MyState;
