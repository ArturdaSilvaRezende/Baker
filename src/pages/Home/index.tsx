import AboutUs from "../../components/AboutUs";
import AnimatedCounter from "../../components/AnimatedCounter";
import BakeryProducts from "../../components/BakeryProducts";
import ButtonBackToTop from "../../components/ButtonBackToTop";
import ClientsReview from "../../components/ClientsReview";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import OurServices from "../../components/OurServices";
import OurTeam from "../../components/OurTeam";
import Topbar from "../../components/Topbar";
import Hero from "./Hero/inddex";

const Home = () => {
  return (
    <main>
      <Topbar />
      <Navbar />
      <Hero />
      <AnimatedCounter />
      <AboutUs />
      <BakeryProducts />
      <OurServices />
      <OurTeam />
      <ClientsReview />
      <Footer />
      <ButtonBackToTop />
    </main>
  );
};

export default Home;
