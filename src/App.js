import logo from './logo.svg';
import './App.css';
import Products from './products';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      list:[],
      newItem:""
    }
  }
  //function that adds something to our list
  addItem(){
    const newItem = {
      id: 1 + Math.random(), // create unique id for list
      value: this.state.newItem.slice()
    }
    const list = [...this.state.list] // copying our list from state

    list.push(newItem)

    this.setState({
      list,
      newItem: ""
    })

  }
  //function that deletes things from outr list
  deleteItem(id) {
    const list = [...this.state.list]

    const updatedList = list.filter(item => item.id !== id) // filter out the deleted id

    this.setState({
      list:updatedList // send the updated list
    })
  }
  //function that changes the state of our input

  updateInput(key, value){ //track user input -- we can use this to storeresponses in a database or local storage

    this.setState({
      [key]: value
    })

  }

  render(){
  return (
    <div className="App">
      <div>
        <p>Add an item...</p>
        <br />
        <input type="text" placeholder="Add an item" value={this.state.newItem} onChange = {e => this.updateInput("newItem", e.target.value)} />
        <button onClick={() => this.addItem()}>Add</button>
        <br />

        <ul>
          {this.state.list.map(item => {
            return(
            <li key={item.id}>
              {item.value}
              <button onClick={() => this.deleteItem(item.id)}>X</button>

            </li>
            )
          })}
          <li>Daniel</li>
        </ul>
      </div>


      {/* <Products name="Dan" food="Tacos" /> */}
    </div>
  );
}
}

export default App;
