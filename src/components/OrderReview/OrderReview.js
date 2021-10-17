import React from 'react';
import { useProducts } from '../../hooks/useProducts';
import { useCart } from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';



const OrderReview = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const handelRemove = key => {
        console.log(key);
        //first set cart to remove from ui
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        // then calling deleteFromDb to remove from database
        deleteFromDb(key);
    }
    const history = useHistory();

    const handelPlaceOrder = () => {
        history.push('./shipping');
        // setCart([]);
        // clearTheCart();
    }


    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        handelRemove={handelRemove}
                        product={product}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <div>
                    <h2>This is heading</h2>
                </div>

                <Cart cart={cart}>
                    <button onClick={handelPlaceOrder} className='btn-regular'>Proceed to Shipping</button>
                </Cart>
            </div>
        </div>

    );
};

export default OrderReview;