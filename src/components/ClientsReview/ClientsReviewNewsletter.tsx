import * as C from "./style";

const ClientsReviewNewsletter = () => {
  return (
    <C.ClientsReviewNewsletter>
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
