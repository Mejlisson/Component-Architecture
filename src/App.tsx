import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Food from "./Components/Food/Food";
import Card from "./Components/Card/Card";
import Button from "./Components/Button/Button";
import DoubleClickButton from "./Components/Button/ChangingButton";
import ClickButton from "./Components/Button/ClickButton";
import Student from "./Components/Students/Student";
import UserGreeting from "./Components/UserGreeting/UserGreeting";
//import List from "./Components/List/List";
import PicButton from "./Components/Button/PicButton";
import  Component1 from "./Components/MoreComponent/Component1";
import Counter from "./Components/MoreComponent/Counter";



function App () {
  
    return(<>
       <Button/> <ClickButton/> <DoubleClickButton/> <br/>
       <PicButton/><br/>
       <Counter/><br/>
       <Component1/> 
       <Card/>
       <Card/>
       <Card/>
       
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


/*  
<List items={fruits} category="Fruts"/>
       <List items={vegetables} category="Vegetables"/>*/