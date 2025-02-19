import {useState} from 'react'; //useState is a hook that allows you to add state to functional components
import "./Counter.scss";

export default function Counter() {
    const [count, setCount] = useState(0); 

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return(
        <div className="counter-container">
            <p className='count-display'>{count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Incroment</button>


        </div>
    );
}