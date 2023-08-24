import AboutUs from "../../components/AboutUs";
import AnimatedCounter from "../../components/AnimatedCounter";
import BakeryProducts from "../../components/BakeryProducts";
import Navbar from "../../components/Navbar";
import OurServices from "../../components/OurServices";
import OurTeam from "../../components/OurTeam";
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
      <OurServices />
      <OurTeam />
    </>
  );
};

export default Home;
