import CustomTitle from "../CustomTitle";
import ProductsCategoryContents from "./ProductsCategoryContents";

const BakeryProductsCategory = () => {
  return (
    <div>
      <CustomTitle
        subtitle="Bakery Products"
        title="Explore The Categories Of Our Bakery Products"
      />
      <ProductsCategoryContents />
    </div>
  );
};

export default BakeryProductsCategory;
