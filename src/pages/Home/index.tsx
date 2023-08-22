import AboutUs from "../../components/AboutUs";
import AnimatedCounter from "../../components/AnimatedCounter";
import BakeryProducts from "../../components/BakeryProducts";
import Navbar from "../../components/Navbar";
import Topbar from "../../components/Topbar";
import Hero from "./Hero/inddex";

const Home = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <AnimatedCounter />
      <AboutUs />
      <BakeryProducts />
    </>
  );
};

export default Home;
