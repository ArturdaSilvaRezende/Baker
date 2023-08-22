import BakeryProductsCategory from "./BakeryProductsCategory";
import BakeryProductsContact from "./BakeryProductsContact";
import * as C from "./style";

const BakeryProducts = () => {
  return (
    <C.BakeryProducts>
      <C.BakeryProductsContainer>
        <BakeryProductsContact />
        <BakeryProductsCategory />
      </C.BakeryProductsContainer>
    </C.BakeryProducts>
  );
};

export default BakeryProducts;
