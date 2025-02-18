import "./List.scss";


function List (props) {
    const category = props.category;
    const itemList = props.items;
    const listitems = itemList.map(item => <li key={item.name}>
                                            {item.name}: &nbsp;
                                           <b>{item.calories}</b></li>);
    return (<>
            <h3 className="list-category">{category}<ol className="list-items">{listitems}</ol></h3>
            
            </>);
}
export default List;





    //const lowCalFruits = fruits.filter(fruit => fruit.calories <= 100);
    //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
//fruits.sort((a, b) => a.name.localeCompare(b.name)); sort by nameproperty(Alphabetical)
//fruits.sort((a, b) => b.name.localeCompare(a.name)); Omvänd sortering på alfabetiskordning
// fruits.sort((a, b) => a.calories- b.calories);  sort by calories property
// fruits.sort((a, b) => b.calories- a.calories);  Omvänt sortering på kalorier
