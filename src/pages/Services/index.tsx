import AnimatedCounter from "../../components/AnimatedCounter";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";
import OurServices from "../../components/OurServices";

const Services = () => {
  return (
    <section>
      <Breadcrumb title="Services" activePage="services" />
      <AnimatedCounter />
      <OurServices />
      <Footer />
    </section>
  );
};

export default Services;
