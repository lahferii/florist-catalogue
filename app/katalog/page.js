"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Wrapper, Product } from "./components/products";

export default function KatalogClient() {
  const searchParams = useSearchParams();
  const categoryFromQuery = searchParams.get("category") || "";

  const [selectedCategory, setSelectedCategory] = useState(categoryFromQuery);

  const products = [
    { title: "Buket Uang 1", category: "Buket Uang", price: "100.000" },
    { title: "Buket Uang 2", category: "Buket Uang", price: "200.000" },
    { title: "Fresh Flower 1", category: "Fresh Flower", price: "150.000" },
    { title: "Fresh Flower 2", category: "Fresh Flower", price: "75.000" },
    { title: "Fresh Flower 3", category: "Fresh Flower", price: "200.000" },
  ];

  const filteredProducts = selectedCategory
    ? products.filter((p) => p.category === selectedCategory)
    : products;

  return (
    <main className="mt-32 px-5 md:px-16">
      <article className="mb-5 sm:px-0 flex justify-between items-center">
        <h2 className="text-2xl sm:text-3xl tracking-wider mb-2">Katalog</h2>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border-none outline-none py-1 px-5 tracking-wider text-sm"
        >
          <option value="">Semua Kategori</option>
          <option value="Buket Uang">Buket Uang</option>
          <option value="Fresh Flower">Fresh Flower</option>
        </select>
      </article>

      <Wrapper>
        {filteredProducts.map((product) => (
          <Product
            key={product.title}
            title={product.title}
            category={product.category}
            price={product.price}
          />
        ))}
      </Wrapper>
    </main>
  );
}