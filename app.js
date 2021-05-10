class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.groceryItem}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(groceryItem =>
      <GroceryListItem groceryItem={groceryItem} />
    )}
  </ul>
);

var GroceryListApp = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList groceryItems={['milk', 'eggs', 'bread']}/>
  </div>
);


ReactDOM.render(<GroceryListApp />, document.getElementById('app'));