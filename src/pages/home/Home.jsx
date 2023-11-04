import Filter from '../../components/filter/Filter';
import HeroSection from '../../components/heroSection/HeroSection';
import Layout from '../../components/layout/Layout';
import ProductCard from '../../components/productCard/ProductCard';
import Track from '../../components/track/Track';

const Home = () => {
  return (
    <div>
      <Layout>
        <HeroSection />
        <Filter />
        <ProductCard />
        <Track />
      </Layout>
    </div>
  );
};

export default Home;
