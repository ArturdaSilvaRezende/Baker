import Breadcrumb from "../../components/Breadcrumb";
import CustomTitle from "../../components/CustomTitle";
import Footer from "../../components/Footer";
import * as C from "./style";

const Contact = () => {
  return (
    <section>
      <Breadcrumb title="Contact Us" activePage="contact us" />
      <CustomTitle
        title="If You Have Any Query, Please Contact Us"
        subtitle="Contact Us"
      />
      <C.ContactForm>
        <div className="contact__container">
          <div className="flex justify-center gap-x-6 sm:flex-col">
            <div className="contact__item">
              <label htmlFor="first-name">Your Name *</label>

              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="contact__item">
              <label htmlFor="your-email">Your Email *</label>

              <input
                type="email"
                name="your-email"
                id="your-email"
                autoComplete="family-name"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className="contact__item">
            <label htmlFor="subject">Subject *</label>

            <input
              type="text"
              name="subject"
              id="subject"
              autoComplete="given-name"
              placeholder="Subject"
              required
            />
          </div>
          <div className="contact__item">
            <label htmlFor="about">About *</label>
            <textarea
              id="about"
              name="about"
              rows={6}
              placeholder="Message"
              required
            />
          </div>
        </div>
        <button>Send Message</button>
      </C.ContactForm>
      <Footer />
    </section>
  );
};

export default Contact;
