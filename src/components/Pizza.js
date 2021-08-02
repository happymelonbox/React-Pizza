import React from "react"

const Pizza = ({pizza, editPizza}) => {
  const handleClick = (event) => {
    const value = event.target.value
    editPizza(value)
  }
  return(
    <tr>
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? 'Yes' : 'No'}</td>
      <td><button value={pizza.id} type="button" className="btn btn-primary" onClick={handleClick}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
