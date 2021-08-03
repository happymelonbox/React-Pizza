
import React from "react"

const PizzaForm = ({editPizza,topping, size, vegetarian, notVegetarian}) => {
  const handleSubmit = () => {

  }
  const editing = (event) =>{
    const name = event.target.name
    const value = event.target.value
    editPizza(name, value)
  }
  return(
      <div className="form-row">
        <div className="col-5">
            <input name="topping" id="topping" type="text" className="form-control" placeholder="Pizza Topping" defaultValue={topping}/>
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
            <input id="vegetarianTrue" className="form-check-input" type="radio" value="Vegetarian" name='vegetarian' defaultChecked={vegetarian} onChange={editing}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input id="vegetarianFalse" className="form-check-input" type="radio" value="Not Vegetarian" name='notVegetarian' defaultChecked={notVegetarian} onChange={editing}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onSubmit={handleSubmit} onClick={console.log}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
