import { createContext, useState } from 'react';
import Aunty from '../aunty/Aunty';
import Father from '../father/Father';
import Uncle from '../uncle/Uncle';
import './grandpa.css'
export const AssetContext = createContext(`gold`);
export const MoneyContext = createContext();


const Grandpa = () => {
    const [money, setMoney] = useState(1000);
    return (
        <div className="box">
            <h2>Grandpa</h2>
            <p>{money}</p>
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value='gold'>
                    <section className='flex'>
                        <Father></Father>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>
        </div>
    );
};


export default Grandpa;