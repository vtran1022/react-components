var GroceryList = () => (
  <ul>
    <Milk/>
    <Eggs/>
  </ul>
);

var Milk = () => (
  <div>Milk</div>
);

var Eggs = () => (
  <div>Eggs</div>
);

ReactDOM.render(<GroceryList />, document.getElementById("app"));