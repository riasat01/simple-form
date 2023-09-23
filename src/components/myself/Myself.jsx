import { useContext } from "react";
import Special from "../special/Special";
import { MoneyContext } from "../grandpa/Grandpa";

const Myself = () => {
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div className="box">
            <h2>Myself</h2>
            <section className="flex">
                <Special></Special>
            </section>
            <p>{money}</p>
            <input onClick={() => setMoney(money + 100)} type="submit" value="Add To Money" />
        </div>
    );
};

export default Myself;