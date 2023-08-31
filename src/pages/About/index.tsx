import Breadcrumb from "../../components/Breadcrumb";
import AboutUs from "../../components/AboutUs";
import OurTeam from "../../components/OurTeam";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <section>
      <Breadcrumb title="About Us" activePage="about" />
      <AboutUs />
      <OurTeam />
      <Footer />
    </section>
  );
};

export default About;
