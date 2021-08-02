import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'

const pizzaURL = 'http://localhost:3000/pizzas'
class App extends Component {
  constructor(){
    super()
    this.state={
      pizzas: [],
      editPizza: []
    }
  }

  componentDidMount(){
    fetch(pizzaURL)
    .then(resp=>resp.json())
    .then(data=>{
      this.setState({
        pizzas: data
      })})
  }

  editPizza = (value) => {
    console.log(Number(value))
    const pizzaToEdit = this.state.pizzas.find(pizza => pizza.id === Number(value))
    this.setState({
      editPizza: pizzaToEdit
    })
}
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm pizzaToEdit={this.state.editPizza}/>
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
