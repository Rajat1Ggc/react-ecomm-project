import Filter from '../../components/filter/Filter';
import HeroSection from '../../components/heroSection/HeroSection';
import Layout from '../../components/layout/Layout';

const Home = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <Filter />
      </Layout>
    </div>
  );
};

export default Home;
