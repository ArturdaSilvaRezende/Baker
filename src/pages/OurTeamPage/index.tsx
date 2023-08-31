import Breadcrumb from "../../components/Breadcrumb";
import OurTeam from "../../components/OurTeam";
import Footer from "../../components/Footer";

const OurTeamPage = () => {
  return (
    <section>
      <Breadcrumb title="Our Team" activePage="our team" />
      <OurTeam className="!mt-5" />
      <Footer />
    </section>
  );
};

export default OurTeamPage;
