const SimpleForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log(`Form submitted`);
    }
    return (
        <div>
       
        
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="number" name="phone" />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;