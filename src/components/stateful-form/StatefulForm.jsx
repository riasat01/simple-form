import { useState } from "react";

const StatefulForm = () => {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email, password);
    }

    const handleName = e => {
        (e.key === `Enter`) && setName(e.target.value);
    }

    const handleEmail = e => {
        (e.key === `Enter`) && setEmail(e.target.value);
    }
    
    const handlePassword = e => {
        (e.key === `Enter`) && setPassword(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onKeyUp={handleName} type="text" name="name" id="1" />
                <br />
                <input onKeyUp={handleEmail} type="email" name="email" id="2" />
                <br />
                <input onKeyUp={handlePassword} type="password" name="password" id="3" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default StatefulForm;