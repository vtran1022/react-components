var GroceryListItem = (props) => {
  var onListItemClick = (event) => {
    console.log('I got clicked');
  }

  return (
  <ul>
    <li onClick={onListItemClick}>{props.groceryItems[0]}</li>
    <li>{props.groceryItems[1]}</li>
    <li>{props.groceryItems[2]}</li>
  </ul>
  );
}

var GroceryList = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryListItem groceryItems={['milk', 'eggs', 'bread']}/>
  </div>
);


ReactDOM.render(<GroceryList />, document.getElementById("app"));