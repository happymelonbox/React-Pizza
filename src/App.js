
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
        vegetarian: false,
        notVegetarian: false

      })})
  }



  editPizzaDisplay = (value) => {
    console.log(Number(value))
    const pizzaToEdit = this.state.pizzas.find(pizza => pizza.id === Number(value))
    return this.setState({
      topping: pizzaToEdit.topping,
      size: pizzaToEdit.size,
      vegetarian: pizzaToEdit.vegetarian ? true : false,
      notVegetarian: pizzaToEdit.vegetarian ? false : true
    },()=>{console.log(this.state.size, this.state.topping, this.state.vegetarian, this.state.notVegetarian)})
}

editPizza = (name, value) => {
  if (value === 'vegetarian'){
  this.setState({
    vegetarian: value,
    notVegetarian: null
  })
} else if (value === 'notVegetarian'){
  this.setState({
    vegetarian: null,
    notVegetarian: value
  })
} else {
  this.setState({
    [name]: value
  })
}
}

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm editPizza={this.editPizza} topping={this.state.topping} size={this.state.size} vegetarian={this.state.vegetarian} notVegetarian={this.state.notVegetarian}/>
        <PizzaList pizzas={this.state.pizzas} editPizzaDisplay={this.editPizzaDisplay}/>
      </Fragment>
    );
  }
}

export default App;
