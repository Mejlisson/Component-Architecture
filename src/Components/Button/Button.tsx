import "./Button.scss";

function Button() {
    const handleClick = (name) => {console.log(`${name} stop clicking me`)};
    return(<button onClick={() => handleClick("Bro")}>Click me</button>);
}

export default Button