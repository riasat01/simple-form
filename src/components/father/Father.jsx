import Brother from "../brother/Brother";
import Myself from "../myself/Myself";
import Sister from "../sister/Sister";

const Father = () => {
    return (
        <div className="box">
            <h2>Father</h2>
            <section className="flex">
                <Myself></Myself>
                <Sister></Sister>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Father;