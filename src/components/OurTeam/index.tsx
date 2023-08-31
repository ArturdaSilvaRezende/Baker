import CustomTitle from "../CustomTitle";
import OurTeamContents from "./OurTeamContents";
import * as C from "./style";

interface MyComponentProps {
  className?: string;
}

const OurTeam = (props: MyComponentProps) => {
  return (
    <C.OurTeam className={props.className}>
      <CustomTitle
        subtitle="Our Team"
        title="We're Super Professional At Our Skills"
      />
      <OurTeamContents />
    </C.OurTeam>
  );
};

export default OurTeam;
