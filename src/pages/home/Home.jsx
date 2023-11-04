import React, { useContext } from 'react';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';

const Home = () => {
  const context = useContext(myContext);
  console.log(context);
  // output : {name: 'rajat', rollNo: 33}
  const { name, rollNo } = context;
  // destructred
  return (
    <div>
      <Layout>
        <h1>Name: {name}</h1>
        <h1>Name: {rollNo}</h1>
      </Layout>
    </div>
  );
};

export default Home;
