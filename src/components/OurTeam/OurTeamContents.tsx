import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import OurTeamList from "./OurTeamList";
import "../../assets/style/animations.css";
import * as C from "./style";

const OurTeamContents = () => {
  const [OurTeamMap] = useState(OurTeamList);
  const [currentCaptionIndex, setCurrentCaptionIndex] = useState<number | null>(
    null
  );

  const toggleCaption = (index: number) => {
    if (currentCaptionIndex === index) {
      setCurrentCaptionIndex(null);
    } else {
      setCurrentCaptionIndex(index);
    }
  };

  return (
    <C.OurTeamContents>
      {OurTeamMap.map((item, index) => (
        <figure key={item.id}>
          <button onClick={() => toggleCaption(index)}>
            {index === currentCaptionIndex ? (
              <BsFillEyeSlashFill />
            ) : (
              <BsFillEyeFill />
            )}
          </button>
          <img src={item.img} alt={item.name} />
          <figcaption
            className={`${
              index === currentCaptionIndex ? "slideOutUp" : "slideInDown"
            }`}
          >
            <h2>{item.name}</h2>
            <p>{item.designation}</p>
          </figcaption>
          <figcaption
            className={`ourteam__social ${
              index === currentCaptionIndex ? "slideInDown" : "slideOutUp"
            }`}
          >
            <ul>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaInstagram />
              </li>
            </ul>
          </figcaption>
        </figure>
      ))}
    </C.OurTeamContents>
  );
};

export default OurTeamContents;
