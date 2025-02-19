import {useState} from 'react';
import "../Card/Card.scss";

export default function Component1() {
 
        const[name, setName] = useState("Guest"); //setName is a function that updates the name state
        const[age, setAge] = useState(0);
        const [isEmployee, setIsEmployed] = useState(false);

        const updateName = () => {
           setName("Sabina");
           console.log(name);
        };
        const incrementAge = () => {
            setAge(age + 1);
        }; 

        const toggleEmployee = () => {
            setIsEmployed(!isEmployee);
        };
            
        return (
            <div className='card'>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>
                <p>Age: {age}</p>
                <button onClick={incrementAge}>Set Age</button>
                <p>Is Employed: {isEmployee ? "Yes" : "No"}</p>
                <button onClick={toggleEmployee}>Toggle State</button>
            </div>
        );
}