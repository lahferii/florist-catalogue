"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import Select from "react-select";
import { MainWrapper, ProductBox } from "@/app/(main)/components/utils/products";

export default function KatalogClient() {
  const searchParams = useSearchParams();
  const categoryFromQuery = searchParams.get("category");

  const products = useMemo(
    () => [
      { title: "Buket Uang 1", category: "Buket Uang", price: "100" },
      { title: "Buket Uang 2", category: "Buket Uang", price: "200" },
      { title: "Fresh Flower 1", category: "Fresh Flower", price: "150" },
      { title: "Fresh Flower 2", category: "Fresh Flower", price: "75" },
      { title: "Fresh Flower 3", category: "Fresh Flower", price: "200" },
    ],
    []
  );

  const categoryOptions = useMemo(
    () => [
      { value: "", label: "Semua Kategori" },
      { value: "Buket Uang", label: "Buket Uang" },
      { value: "Fresh Flower", label: "Fresh Flower" },
    ],
    []
  );

  const [selectedOption, setSelectedOption] = useState(categoryOptions[0]);

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

        <div className="text-sm">
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

      <MainWrapper>
        {filteredProducts.map((product) => (
          <ProductBox
            key={product.title}
            title={product.title}
            price={product.price}
          />
        ))}
      </MainWrapper>
    </main>
  );
}