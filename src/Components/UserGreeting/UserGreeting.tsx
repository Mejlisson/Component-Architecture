import "./UserGreeting.scss";

function UserGreeting (props){
    const welcomeMessage =  <h2 className="welcome-message">
                            Welcome {props.username}
                            </h2>
    const loginPrompt =     <h2 className="logIn-prompt">
                            Please log in to contunue
                            </h2>


    return(props.isLoggedIn ? welcomeMessage : loginPrompt); 
    /*if(props.isLoggedIn){
        return <h2>Welcome {props.username}</h2>
    }
    else{
        return <h2>Please log in to continue</h2>
    }*/
}
export default UserGreeting