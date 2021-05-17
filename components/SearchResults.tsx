import { ProductItem } from "./ProductItem";
import {useMemo} from "react";

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
  onAddToWishlist: (id: number) => void;
}

export function SearchResults({ results, onAddToWishlist, totalPrice }: SearchResultsProps) {

  return (
    <div>
      <h2>{totalPrice}</h2>
      {results.map((product) => {
        return (
            <ProductItem
              key={product.id}
              product={product}
              onAddToWishlist={onAddToWishlist}
            />
        );
      })}
    </div>
  );
}

