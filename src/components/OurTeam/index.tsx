import CustomTitle from "../CustomTitle";
import OurTeamContents from "./OurTeamContents";
import * as C from "./style";

const OurTeam = () => {
  return (
    <C.OurTeam>
      <CustomTitle
        subtitle="Our Team"
        title="We're Super Professional At Our Skills"
      />
      <OurTeamContents />
    </C.OurTeam>
  );
};

export default OurTeam;
