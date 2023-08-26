import CustomTitle from "../CustomTitle";
import ClientsReviewContainer from "./ClientsReviewContainer";
import ClientsReviewNewsletter from "./ClientsReviewNewsletter";
import * as C from "./style";

const ClientsReview = () => {
  return (
    <C.ClientsReview>
      <CustomTitle
        subtitle="Client´s Review"
        title="More Than 20000+ Customers Trusted Us"
      />
      <ClientsReviewContainer />
      <ClientsReviewNewsletter />
    </C.ClientsReview>
  );
};

export default ClientsReview;
