import { Suspense } from "react";
import ProductCatalogue from "./section/productCatalogue";

export default function Product() {
  return (
    <Suspense fallback={<div className="mt-32 px-5">Loading...</div>}>
      <ProductCatalogue />
    </Suspense>
  );
}