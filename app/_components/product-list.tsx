import { Prisma } from "@prisma/client";
import ProductItem from "./product-item";


interface ProductListItemProps {
  products: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>[];
}

const ProductsList = ({products}: ProductListItemProps) => {
  
  return (
    <div className="flex gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden ">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
