import {memo, useState} from "react";
import {AddProductToWishListProps} from './AddProductToWishList'
import dynamic from 'next/dynamic'
// import {AddProductToWishList} from "./AddProductToWishList";

const AddProductToWishList = dynamic<AddProductToWishListProps>(() => {
  return import ('./AddProductToWishList').then(mod => mod.AddProductToWishList)
}, {
  loading: () => <span>carregando ...</span>
})
interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  };
  onAddToWishlist: (id: number) => void;
}
export function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false)
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>Adicionar aos favoritos</button>

      {isAddingToWishlist && (
          <AddProductToWishList
              onAddToWishlist={() => onAddToWishlist(product.id) }
              onRequestClose={() => setIsAddingToWishlist(false)}/>
      )}

    </div>
  );
}

// Faz uma comparação rasa

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    // Object.is faz uma comparação profunda
    return Object.is(prevProps.product, nextProps.product);
  }
);
