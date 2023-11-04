import { useContext } from 'react';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';

const Home = () => {
  const context = useContext(myContext);
  console.log(context);
  // output : {name: 'rajat', rollNo: 33}
  // when single variable comes
  // const { name, rollNo } = context;
  // when more then 2 variable comes then destr
  const { state, color } = context;

  // destructred
  return (
    <div>
      <Layout>
        <h1>Name: {state.name}</h1>
        <h1>roll no.: {state.rollNo}</h1>
        <h1>color: {color}</h1>
      </Layout>
    </div>
  );
};

export default Home;
