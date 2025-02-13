import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Food from "./Components/Food/Food";
import Card from "./Components/Card/Card";
import Button from "./Components/Button/Button";
import Student from "./Components/Students/Student";
import UserGreeting from "./Components/UserGreeting/UserGreeting";



function App () {
    return(
      <>
        <Card/>
        <Card/>
        <Button/>
        <Header/>
        <Student name="Bob" age={30} isStudent={true}/>
        <Student name="Anna" age={15} isStudent={false}/>
        <Student/>
        <Food/>
        <Footer/>
        <UserGreeting isLoggedIn={true} username="Sabina" />
      </>
    );
}

export default App