import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(phoneRef.current.value);
    }

    useEffect(() => {
        nameRef.current.focus();
    }, [])
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input defaultValue={`hamba`} ref={nameRef} type="text" name="name" />
                <br />
                <input ref={emailRef} type="email" name="email" />
                <br />
                <input ref={phoneRef} type="number" name="phone" />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default RefForm;