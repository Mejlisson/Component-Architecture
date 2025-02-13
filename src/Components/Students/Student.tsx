import "./Student.scss";

type StudentProps = {
    name: string,
    age: number,
    isStudent: boolean
};

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
};

function Student({name, age, isStudent}:StudentProps){
    return(
        <div className="student">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    );
}



export default Student