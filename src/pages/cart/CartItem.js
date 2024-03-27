import { ShopContext } from "../../context/shop-context";
import { useContext } from "react";

export const CartItem = ({ data }) => {
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);

  return (
    <div className="cartProduct">
      <img src={data.productImage} alt="productImage" />
      <div>
        <p>
          <b>{data.productName}</b>
        </p>
        <p>Price:{data.price * cartItems[data.id]}</p>

        <div className="cartProductPart2">
          <button onClick={() => removeFromCart(data.id)}>-</button>
          <p>{cartItems[data.id]}</p>
          <button onClick={() => addToCart(data.id)}>+</button>
        </div>
      </div>
    </div>
  );
};
