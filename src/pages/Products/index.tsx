import BakeryProducts from "../../components/BakeryProducts";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";

const Products = () => {
  return (
    <section>
      <Breadcrumb title="Products" activePage="products" />
      <BakeryProducts />
      <Footer />
    </section>
  );
};

export default Products;
