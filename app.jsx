var App = () => (
  <div>
  <h2>My Groceries Are the Best Groceries.</h2>
  <GroceryList />
  </div>
);

var GroceryList = () => (
  <ul>
    <ListItem1 />
    <ListItem2 />
    <GroceryListItem input = {['First Call']} />
    <GroceryListItem input = {['Bike Dynamo']} />
  </ul>
);

var ListItem1 = () => (
  <li>Bananas</li>
);

var ListItem2 = () => (
  <li>Gorillas</li>
);

var GroceryListItem = (props) => {

  var onListItemClick = (event) => {
    console.log(`I got clicked! My value is ${props.input[0]}`);
  };

  return (
    <li onClick={onListItemClick}>{props.input[0]}</li>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));