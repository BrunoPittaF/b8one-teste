import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { Banner, Filters, Pagination, Showcase } from "../Components";
import bannerDesktop from "../assets/images/acer-desktop.avif";
import bannerMobile from "../assets/images/acer-mobile.avif";
import { fetchProducts, fetchCategories } from "../services/fakestore";

const PER_PAGE = 6;

export default function Ofertas() {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 0]);

  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
  });

    const { data: categories = [] } = useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });


  const priceBounds = useMemo(() => {
    if (!products.length) return { min: 0, max: 0 };
    const prices = products.map((p) => p.price);
    return { min: Math.floor(Math.min(...prices)), max: Math.ceil(Math.max(...prices)) };
  }, [products]);


  useEffect(() => {
    if (priceBounds.min === 0 && priceBounds.max === 0) return;
    setPriceRange([priceBounds.min, priceBounds.max]);
  }, [priceBounds.min, priceBounds.max]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const categoryMatch = category === 'all' || p.category === category;
      const priceMatch = p.price >= priceRange[0] && p.price <= priceRange[1];
      return  categoryMatch && priceMatch;
    });
  }, [products, category, priceRange]);


  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));

  const start = (page - 1) * PER_PAGE;
  const visible = filtered.slice(start, start + PER_PAGE);

    function clearFilters() {
    setCategory('all');
    setPriceRange([priceBounds.min, priceBounds.max]);
  }

  return (
    <main className="w-full flex flex-col items-center justify-center min-h-screen bg-gray-50 pb-4">
      <Banner imageDesktop={bannerDesktop} imageMobile={bannerMobile} />

        <div className="mb-6">
          <Filters
            category={category}
            setCategory={setCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            categories={categories}
            bounds={priceBounds}
            clearFilters={clearFilters}
            disabled={isLoading}
          />
        </div>

      <section className="max-w-7xl mx-auto">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array.from({ length: PER_PAGE }).map((_, i) => (
              <div
                key={i}
                className="p-4 bg-white rounded-lg shadow animate-pulse h-56"
              />
            ))}
          </div>
        ) : isError ? (
          <div className="p-6 bg-red-50 text-red-800 rounded">
            Erro ao carregar produtos. Tente novamente.
          </div>
        ) : (
          <div>
            <Showcase
              productsPerPage={PER_PAGE}
              products={filtered}
              start={start}
              visibleProducts={visible}
            />
            <Pagination page={page} pages={pages} setPage={setPage} />
          </div>
        )}
      </section>
    </main>
  );
}
