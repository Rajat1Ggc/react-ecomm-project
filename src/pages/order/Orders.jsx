import { useContext } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';

const Order = () => {
  const context = useContext(myContext);
  const { name, rollNo } = context;

  return (
    <Layout>
      <h1>Name: {name}</h1>
      <h1>Name: {rollNo}</h1>
    </Layout>
  );
};

export default Order;
