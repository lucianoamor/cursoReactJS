// hooks
import { createContext, useState } from "react";

export const DataContext = createContext();

function CartContext({children}) {
    const [cart, setCart] = useState({date: '', name: '', email: '', quantity: 0, total: 0, products: []});

    function add(product, q) {
        q = parseInt(q);
        const k = cart.products.findIndex((p) => p.id == product.id);
        if(k > -1) {
            const cartProducts = cart.products;
            cartProducts[k].quantity += q;
            setCart({
                ...cart,
                quantity: cart.quantity + q,
                total: cart.total + (q * product.price),
                products: cartProducts
            });
        }
        else {
            setCart({
                ...cart,
                quantity: cart.quantity + q,
                total: cart.total + (q * product.price),
                products: [
                    ...cart.products,
                    {id: product.id, title: product.title, description: product.description, quantity: q, price: product.price}
                ]
            });
        }
    }

    function reset() {
        setCart({date: '', name: '', email: '', quantity: 0, total: 0, products: []});
    }

    return (
        <DataContext.Provider value={{cart, setCart, add, reset}}>
            {children}
        </DataContext.Provider>
    )
}

export default CartContext;
