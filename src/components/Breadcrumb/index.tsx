import { Link } from "react-router-dom";
import Topbar from "../Topbar";
import Navbar from "../Navbar";
import * as C from "./style";

interface BreadcrumpType {
  title: string;
  activePage: string;
}

const Breadcrumb = (props: BreadcrumpType) => {
  return (
    <>
      <Topbar />
      <C.Breadcrumb>
        <Navbar />
        <div className="breadcrumb__container">
          <h1>{props.title}</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb__active">{props.activePage}</li>
          </ul>
        </div>
      </C.Breadcrumb>
    </>
  );
};

export default Breadcrumb;
