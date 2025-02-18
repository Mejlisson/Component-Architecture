import "./Button.scss";
import "../Card/Card.scss";
import SnackCat from "..//../Img/SnackCat.gif";

export default function PicButton() {
    const handleClick = (e) => e.target.style.display ="rotate(360deg)";

    return(
    <div className="card">
        <img onClick={(e) => handleClick(e)} className="card-image" src={SnackCat}></img>
    </div>
    );
}