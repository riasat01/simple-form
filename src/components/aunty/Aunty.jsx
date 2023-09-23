import { useContext } from "react";
import Cousin from "../cousin/Cousin";
import { AssetContext } from "../grandpa/Grandpa";

const Aunty = () => {
    const jwel = useContext(AssetContext);
    return (
        <div className="box">
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Cousin1'} jwel={jwel}></Cousin>
                <Cousin name={'Cousin2'}></Cousin>
            </section>

        </div>
    );
};

export default Aunty;