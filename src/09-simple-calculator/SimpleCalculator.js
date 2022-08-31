import {useReducer} from 'react';
const initialState = {
  num1: 0,
  num2: 0,
  result: 'no result yet'
}

function reducer (state, action) {

switch(action.type) {
  case 'SET-NUM1':
  return { ...state, num1: action.payload}
  case 'SET-NUM2':
  return { ...state, num2: action.payload}
  case 'ADD':
  return {...state, result: state.num1 + state.num2}
  case 'SUB': 
  return {...state, result: state.num1 - state.num2}
  case 'RESET':
  return {...state, result: 0}
  default: 
  throw new Error(); 
}}
export default function SimpleCalculator () {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("state : ",state);
  return (
    <div>
      <div>
        <h2>Number 1</h2>
        {numbers.map(number => (
          <button key={number} onClick={() => dispatch({type: 'SET-NUM1', payload: number})}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Number 2</h2>
        {numbers.map(number => (
          <button key={number} onClick={() => dispatch({type: 'SET-NUM2', payload: number})}>
            {number}
          </button>))}
      </div>
      <div>
        <h2>Actions</h2>
        <button onClick={() => dispatch({type: 'ADD'})}>+</button>
        <button onClick={() => dispatch({type: 'SUB'})}>-</button>
        <button onClick={() => dispatch({type: 'RESET', payload: 0})}>c</button>
      </div>
      <div><h2>Result: {state.result}</h2></div>
    </div>
  )
}
