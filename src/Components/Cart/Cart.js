import React from 'react';
import './Cart.css'
const Cart = ({ cart, handleRemoveFromCart }) => {
    // conditional rendering options 
    // 1. Element variable
    // 2. ternary operator condition ? true : false
    // 3. && operator (shorthand) shudhu matro sorto true hole eta kaj korbe
    // 4.|| operator (shorthand) shudhu matro sorto false hole eta kaj korbe
    let command;
    if (cart.length === 0) {
        command = <p>Please Add at least one item</p>
    }
    else if (cart.length === 1) {
        command = <p>Please add more</p>
    }
    else {
        command = <p><small>Thanks for adding item</small></p>
    }

    return (
        <div>
            <h3>Order Summary</h3>

            <h4>Item selected: {cart.length}</h4>
            {
                cart.map(tshirt => <p>
                    {tshirt.name}
                    <button onClick={() => handleRemoveFromCart(tshirt)}>X</button>
                </p>)
            }
            {/* Condition 1 */}
            {command}
            {/* Condition 2 */}
            {cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove All</button>}
            {cart.length === 4 && <button className='orange'>Review Order</button> }
            {/* Condition 3 */}
            {cart.length === 3 && <div className='orange'>
                <h3>3jon</h3>
                <p>3jon ke ki gift diba.</p>
            </div>}
            {/* Condition 4 */}
            {cart.length === 0 || <p className='orange'>YAY! yor are buying</p> }
        </div >
    );
};

export default Cart;