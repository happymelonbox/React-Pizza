
import React from "react"

const PizzaForm = ({editPizza,topping, size, vegetarian, notVegetarian, updatePizza}) => {
  const handleSubmit = () => {
    const pizzaSize = document.getElementById('size').value
    const pizzaTopping = document.getElementById('topping').value
    const pizzaVegetarian = document.getElementById('vegetarianTrue').defaultChecked
    updatePizza(pizzaSize, pizzaTopping, pizzaVegetarian)
  }
  const editing = (event) =>{
    const name = event.target.name
    const value = event.target.value
    editPizza(name, value)
  }
  return(
      <div className="form-row">
        <div className="col-5">
            <input name="topping" id="topping" type="text" className="form-control" placeholder="Pizza Topping" defaultValue={topping} onChange={editing}/>
        </div>
        <div className="col">
          <select name="size" id="size" value={size} className="form-control" onChange={editing}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input id="vegetarianTrue" className="form-check-input" type="radio" name='vegetarian' value='vegetarian' defaultChecked={vegetarian} onChange={editing}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input id="vegetarianFalse" className="form-check-input" type="radio" value='notVegetarian' name='vegetarian' defaultChecked={notVegetarian} onChange={editing}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
