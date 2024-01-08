import ProductCard from "./ProductCard";
import { NewProducts } from "./dummy/products";

const Products = new NewProducts();

const LandingPage = ({getCartValue}) => {

 

  return (
    <>
      <h3 className="text-center">Featured Products</h3>
      <div className="featured-products grid grid-cols-4 gap-4 mt-8 ml-4 mr-4">
        {Products?.products?.map((item) => {
          
          return <ProductCard key={item.id} product={item} getCartValue={getCartValue} />;
        })}
      </div>
    </>
  );
};

export default LandingPage;
