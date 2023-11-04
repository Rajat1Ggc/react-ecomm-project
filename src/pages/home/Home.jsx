import Filter from '../../components/filter/Filter';
import HeroSection from '../../components/heroSection/HeroSection';
import Layout from '../../components/layout/Layout';
import ProductCard from '../../components/productCard/ProductCard';

const Home = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <Filter />
        <ProductCard />
      </Layout>
    </div>
  );
};

export default Home;
