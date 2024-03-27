import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let data = JSON.parse(localStorage.getItem("cartItems"))
    
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0
    };
    return data? data : cart

}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    },[cartItems])

    const getTotalCartAmount = () => {
        let price = 0;
        for (let item in cartItems) {

            if (cartItems[item] > 0) {
                for (let j = 1; j <= cartItems[item]; j++) {
                    price += PRODUCTS[item-1].price
                }
            }
        }
        return price;
    }

    const addToCart = (id) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }))
    }

    const removeFromCart = (id) => {
        setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }))
    }

    const contextValue = {
        cartItems,
        getTotalCartAmount,
        addToCart,
        removeFromCart
    }

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}