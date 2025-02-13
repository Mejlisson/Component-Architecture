import profilePic from "../../Img/profilePic.gif"
import "./Card.scss";

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-titel">Test Card</h2>
            <p className="card-text">Training för Schoolwork, React</p>
        </div>
    );
}

export default Card