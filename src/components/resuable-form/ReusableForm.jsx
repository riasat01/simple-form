const ReusableForm = ({formtitle, submitBtnText = `Submit`, handleSubmit, children}) => { //children is default prop given by react

    const handleSubmits = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value
        }
        handleSubmit(data);
    }
    return (
        <div>
            <h2>{formtitle}</h2>
            {children}
            <form onSubmit={handleSubmits}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="number" name="phone" />
                <br />
                <button>{submitBtnText}</button>
            </form>
        </div>
    );
};

export default ReusableForm;