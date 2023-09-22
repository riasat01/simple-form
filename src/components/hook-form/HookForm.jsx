import useInputState from "../../hooks/useInputState";

const HookForm = () => {

    // const [name, handleNameChange] = useInputState(`Demo`);
    const emailState = useInputState(`Demo@demo`)
    const handleSubmit = e => {
        e.preventDefault();
        // console.log(`form data ${name}`);
        console.log(`email ${emailState.value}`)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input value={name} onChange={handleNameChange} type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                <input type="number" name="phone" />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default HookForm;