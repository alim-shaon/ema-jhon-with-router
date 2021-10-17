import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // console.log(1, products.length);
        if (products.length) {
            // console.log(2, products.length);
            const savedCart = getStoredCart();
            const storedCard = [];
            for (const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCard.push(addedProduct);
                }
            }
            setCart(storedCard);
        }
        // console.log(3);
    }, [products]);

    return [cart, setCart];
}

export { useCart };