
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
        pizzas: data, 
        topping: '',
        size: '',
        vegetarian: null,
        notVegetarian: null

      })})
  }

  editPizza = (value) => {
    console.log(Number(value))
    const pizzaToEdit = this.state.pizzas.find(pizza => pizza.id === Number(value))
    this.setState({
      topping: pizzaToEdit.topping,
      size: pizzaToEdit.size,
      vegetarian: pizzaToEdit.vegetarian ? true : null,
      notVegetarian: pizzaToEdit.vegetarian ? null : true
    },()=>{console.log(this.state.size, this.state.topping, this.state.vegetarian, this.state.notVegetarian)})
}
  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm editPizza={this.editPizza} topping={this.state.topping} size={this.state.size} vegetarian={this.state.vegetarian} notVegetarian={this.state.notVegetarian}/>
        <PizzaList pizzas={this.state.pizzas} editPizza={this.editPizza}/>
      </Fragment>
    );
  }
}

export default App;
