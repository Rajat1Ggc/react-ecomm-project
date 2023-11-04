import React from 'react';
import myContext from './myContext';

const MyState = (props) => {
  const state = {
    name: 'rajat',
    rollNo: 33,
  };
  const color = 'red';
  // when we pass more then 1 variable then
  // value = {state, color} gives error
  // correct method  value = {{state, color}} make an object
  return (
    <myContext.Provider value={{ state, color }}>
      {props.children}
    </myContext.Provider>
  );
};

export default MyState;
