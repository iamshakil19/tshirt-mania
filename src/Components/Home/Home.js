import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import useTShirts from '../Hooks/useTshirts';
import TShirt from '../TShirt/TShirt';
import './Home.css'

const Home = () => {
    const [tShirts, setTShirts] = useTShirts()
    const [cart, setCart] = useState([])

    const handleAddToCart = selectedItem => {
        const exist = cart.find(tshirt => tshirt._id === selectedItem._id)
        if (!exist) {
            const newCart = [...cart, selectedItem]
            setCart(newCart)
        }
        else{
            alert('item already added')
        }

    }

    const handleRemoveFromCart = selectedItem => {
        const rest = cart.filter(tshirt => tshirt._id !== selectedItem._id)
        setCart(rest)
    }

    return (
        <div className='home-container'>
            <div className="tshirt-container">
                {
                    tShirts.map(tShirt => <TShirt
                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    handleRemoveFromCart={handleRemoveFromCart}
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;