import Breadcrumb from "../../components/Breadcrumb";
import ClientsReview from "../../components/ClientsReview";
import Footer from "../../components/Footer";

const Testimonial = () => {
  return (
    <section>
      <Breadcrumb title="Testimonial" activePage="testimonial" />
      <ClientsReview />
      <Footer />
    </section>
  );
};

export default Testimonial;
