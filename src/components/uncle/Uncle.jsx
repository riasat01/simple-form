import Cousin from "../cousin/Cousin";

const Uncle = () => {
    return (
        <div className="box">
            <h2>Uncle</h2>
            <section className="flex">
                <Cousin name={'Cousin1'}></Cousin>
                <Cousin name={'Cousin2'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;