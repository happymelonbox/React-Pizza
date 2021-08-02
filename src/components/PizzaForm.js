import React from "react"

const PizzaForm = ({pizzaToEdit}) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" className="form-control" placeholder="Pizza Topping" value={pizzaToEdit.topping}/>
        </div>
        <div className="col">
          <select value={pizzaToEdit.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={pizzaToEdit.vegetarian ? true : null}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={pizzaToEdit.vegetarian ? null : true}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={console.log}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
