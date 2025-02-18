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




function App () {
  const fruits = [{id: 1, name:'apple', calories:95}, 
                  {id: 2, name:'banana', calories: 45}, 
                  {id: 3, name:'coconut', calories: 50}, 
                  {id: 4, name:'pineapple', calories: 277}, 
                  {id: 5, name:'elderberry', calories: 73},];
                  
  const vegetables = [{id: 6, name:'potatoes', calories: 110}, 
                      {id: 7, name:'celery', calories: 15}, 
                      {id: 8, name:'carrots', calories: 25}, 
                      {id: 9, name:'corn', calories: 63}, 
                      {id: 10, name:'broccoli', calories: 50},];
    return(<>
       <Button/> <ClickButton/> <DoubleClickButton/> <br/>
       <PicButton/>
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


/*   <List items={fruits} category="Fruts"/>
       <List items={vegetables} category="Vegetables"/>*/