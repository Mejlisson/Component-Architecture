import "./List.scss";

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
