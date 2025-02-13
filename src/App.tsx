import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Food from "./Components/Food/Food";
import Card from "./Components/Card/Card";

function App () {
    return(
      <>
        <Card/>
        <Card/>
        <Header/>
        <Food/>
        <Footer/>
      </>
    );
}

export default App;