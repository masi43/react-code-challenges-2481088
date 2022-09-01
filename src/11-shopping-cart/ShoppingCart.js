import { useState, useReducer } from 'react'

const initialSate = [{
  name: 'apple',
  quantity: 0,
  price: 0.39
}, {
  name: 'banana',
  quantity: 0,
  price: 0.79
}, {
  name: 'cherry tomatoes',
  quantity: 0,
  price: 3.99
}

];

const items = [{
  name: 'apple',
  price: 0.39
}, {
  name: 'banana',
  price: 0.79
}, {
  name: 'cherry tomatoes',
  price: 3.99
}]

const cartReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
    const result = state.map((item) => {
      if(item.name === action.payload.name) {
        return {...item, quantity: item.quantity+1}
      }
      return item;
    })
    return result;
    case 'ADD_ITEM_QUANTITY':
    return state.map((item) => {
      if(item.name === action.payload.name) {
        return {...item, quantity: item.quantity+1}
      }
      return item;
    })
    case 'REMOVE_ITEM_QUANTITY':
    return state.map((item) => {
      if(item.name === action.payload.name & item.quantity !== 0) {
        return {...item, quantity: item.quantity-1}
      }
      return item;
    })
    default:
      throw new Error();
  }
}
function ShoppingCart () {
  const cart = [{ name: 'apple', quantity: 3, price: 0.39 }]
  const [cartState, dispatch] = useReducer(cartReducer, initialSate);
  let totalAmount = 0.0;
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className='cart'>
        <div className='items'>
          <h2>Items</h2>
          {items.map(item => (
            <div key={item.name}>
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button onClick={
                () => dispatch({type:'ADD_TO_CART', payload: {name: item.name}
              })}>
                Add to Cart
              </button>
            </div>)
          )}
        </div>
        <div>
          <h2>Cart</h2>
          {cartState.map(item => {
          {totalAmount += item.quantity * item.price}
          return (
            (item.quantity > 0 ? <div key={item.name}>
              <h3>{item.name}</h3>
              <p>
              <button onClick={() => dispatch({type: 'REMOVE_ITEM_QUANTITY', payload: {name: item.name}})}>-</button>
                {item.quantity}
                <button onClick={() => dispatch({type: 'ADD_ITEM_QUANTITY', payload: {name: item.name}})}>+</button>
              </p>
              <p>Subtotal: ${(item.quantity * item.price).toFixed(2)}</p>
              
            </div>
          : ''))})}
        </div>
      </div>
      <div className='total'>
        <h2>Total: ${totalAmount.toFixed(2)}</h2>
      </div>
    </div>
  )
}

export default ShoppingCart


// when click on add to cart add item, price and quantity to cart state