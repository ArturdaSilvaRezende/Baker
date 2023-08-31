import TopbarBreadcrumb from "./TopbarBreadcrumb";
import TopbarSocial from "./TopbarSocial";
import * as C from "./style";

const Topbar = () => {
  return (
    <C.Topbar>
      <C.TopbarContainer>
        <TopbarBreadcrumb />
        <TopbarSocial />
      </C.TopbarContainer>
    </C.Topbar>
  );
};

export default Topbar;
