import React from "react";
import { useRouter } from "next/router";

const ProductSingle = () => {
  const router = useRouter();
  const { product } = router.query;
  return (
    <div className="product">
      <p>{product}</p>
    </div>
  );
};

export default ProductSingle;
