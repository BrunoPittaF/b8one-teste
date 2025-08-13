import React from "react";
import Card from "../Card";

interface IShowcaseProps {
  products: IProduct[];
  visibleProducts: IProduct[];
  start: number;
  productsPerPage: number;
}

const Showcase: React.FC<IShowcaseProps> = ({
  productsPerPage,
  products,
  start,
  visibleProducts,
}: IShowcaseProps) => {
  return (
    <>
      <h2 className="text-2xl font-bold">Ofertas da Semana</h2>
      <div className="text-sm text-gray-600 mb-4">
        Mostrando  
         {products.length
          ? `${start + 1}-${Math.min(
              start + productsPerPage,
              products.length
            )} de ${products.length}`
          : " 0 produtos"}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {visibleProducts.map((p) => (
          <Card
            key={p.id}
            image={p.image}
            title={p.title}
            price={p.price}
            category={p.category}
          />
        ))}
      </div>
    </>
  );
};

export default Showcase;
