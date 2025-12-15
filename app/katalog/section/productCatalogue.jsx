"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Select from "react-select";
import { Wrapper, Product } from "../components/products";

export default function KatalogClient() {
  const searchParams = useSearchParams();
  const categoryFromQuery = searchParams.get("category");

  const products = useMemo(
    () => [
      { title: "Buket Uang 1", category: "Buket Uang", price: "100.000" },
      { title: "Buket Uang 2", category: "Buket Uang", price: "200.000" },
      { title: "Fresh Flower 1", category: "Fresh Flower", price: "150.000" },
      { title: "Fresh Flower 2", category: "Fresh Flower", price: "75.000" },
      { title: "Fresh Flower 3", category: "Fresh Flower", price: "200.000" },
    ],
    []
  );

  // Options untuk react-select
  const categoryOptions = useMemo(
    () => [
      { value: "", label: "Semua Kategori" },
      { value: "Buket Uang", label: "Buket Uang" },
      { value: "Fresh Flower", label: "Fresh Flower" },
    ],
    []
  );

  // Selected option
  const [selectedOption, setSelectedOption] = useState(categoryOptions[0]);

  // Sync query -> react-select
  useEffect(() => {
    const matched = categoryOptions.find(
      (opt) => opt.value === categoryFromQuery
    );
    setSelectedOption(matched || categoryOptions[0]);
  }, [categoryFromQuery, categoryOptions]);

  const filteredProducts = selectedOption?.value
    ? products.filter((p) => p.category === selectedOption.value)
    : products;

  return (
    <main className="mt-32 px-5 md:px-16">
      <article className="mb-5 flex justify-between items-center gap-4">
        <h2 className="text-2xl tracking-wider">Katalog</h2>

        <div className="w-40 text-sm">
          <Select
            instanceId="kategori-select"
            options={categoryOptions}
            value={selectedOption}
            onChange={setSelectedOption}
            isSearchable={false}
            styles={{
              control: (base, state) => ({
                ...base,
                boxShadow: "none",
                borderColor: "transparent",
                "&:hover": {
                  borderColor: "transparent",
                },
              }),
              indicatorSeparator: () => ({
                display: "none",
              }),
            }}
          />

        </div>
      </article>

      <Wrapper>
        {filteredProducts.map((product) => (
          <Product
            key={product.title}
            title={product.title}
            price={product.price}
          />
        ))}
      </Wrapper>
    </main>
  );
}