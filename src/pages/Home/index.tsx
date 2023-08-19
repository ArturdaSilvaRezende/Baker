import AboutUs from "../../components/AboutUs";
import AnimatedCounter from "../../components/AnimatedCounter";
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
    </>
  );
};

export default Home;
