import { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import BakerProductsList from "./BakeryProductsList";
import * as C from "./style";
import "../../assets/style/animations.css";

const ProductsCategoryContents = () => {
  const [productsList] = useState(BakerProductsList);
  const [activeContents, setActiveContents] = useState(0);

  const handleToggleShowContent = (cardId: number) => {
    setActiveContents(cardId);
  };

  const handleToggleHideContent = (cardId: number) => {
    if (cardId === activeContents) {
      setActiveContents(0);
    }
  };

  const isActiveContent = (item: number) => item === activeContents;

  return (
    <C.ProductsCategoryContents>
      {productsList.map((item) => (
        <C.CategoryFigure
          $isactiveitem={isActiveContent(item.id)}
          key={item.id}
          className="category"
        >
          <div className="category__buttons">
            <button onClick={() => handleToggleShowContent(item.id)}>
              <BsFillEyeFill />
            </button>
            <button onClick={() => handleToggleHideContent(item.id)}>
              <BsFillEyeSlashFill />
            </button>
          </div>
          <figcaption>
            <p>
              <span>{item.price}</span>
            </p>
            <h3>{item.type}</h3>
            <p>{item.description}</p>
          </figcaption>
          <div
            className={`category__image ${
              isActiveContent(item.id)
                ? "showContentsHeight"
                : "hideContentsHeight"
            }`}
          >
            <img src={item.img} alt={item.type} />
            <div className="category__link">
              <Link
                to="/products"
                className={`${isActiveContent(item.id) ? "fadeIn" : "fadeOut"}`}
              >
                Read More
              </Link>
            </div>
          </div>
        </C.CategoryFigure>
      ))}
    </C.ProductsCategoryContents>
  );
};

export default ProductsCategoryContents;
