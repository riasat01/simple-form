import { useContext } from "react";
import { MoneyContext } from "../grandpa/Grandpa";

const Cousin = ({ name, jwel }) => {
    const [money , setMoney] = useContext(MoneyContext);
    return (
        <div className="box">
            <h2>{name}</h2>
            {
                jwel && <p>{jwel}</p>
            }
            {
                name === `Cousin1` && <section><p>{money}</p><button onClick={() => setMoney(money + 50)}>Add To Money</button></section>
            }
        </div>
    );
};

export default Cousin;