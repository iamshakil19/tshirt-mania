import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const ringContext = createContext('ring')


const Grandpa = () => {
    const [house, setHouse] = useState(1)
    const ornament = 'Diamond Ring'

    const handleBuyAHouse = () => {
        const newHouse = house + 1
        setHouse(newHouse)
    }
    return (
        <ringContext.Provider value={ornament}>
            <div className='grandpa'>
                <h3>Grandpa</h3>
                <p>House: {house}</p>
                <button onClick={() => handleBuyAHouse()}>Buy A House</button>
                <section style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </ringContext.Provider>
    );
};

export default Grandpa;