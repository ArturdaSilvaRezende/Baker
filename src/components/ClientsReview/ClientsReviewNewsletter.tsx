import useAnimateScroll from "../../hooks/useAnimateScroll";
import * as C from "./style";

const ClientsReviewNewsletter = () => {
  useAnimateScroll();

  return (
    <C.ClientsReviewNewsletter className="scroll-element">
      <h3>
        <span>Subscribe Our</span>
        <span>Newsletter</span>
      </h3>
      <form>
        <div>
          <input type="email" placeholder="Your Email" />
          <button type="button">Sign Up</button>
        </div>
      </form>
    </C.ClientsReviewNewsletter>
  );
};

export default ClientsReviewNewsletter;
