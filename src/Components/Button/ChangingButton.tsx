import "./Button.scss";

export default function DoubleClickButton() {
    const handleClick = (e) => e.target.textContent ="BooM!💥";

    return(<button onDoubleClick={(e) => handleClick(e)}> ⛔Click</button>);
}









    ///