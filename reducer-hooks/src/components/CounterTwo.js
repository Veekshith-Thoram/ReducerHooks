import React,{useReducer} from 'react'


const initialState = {
    firstState: 0
}
const reducer = (state, action) => {
    switch(action.type){
        case "increment" :
            return {firstState: state.firstState +1};
        case "decrement":
            return {firstState: state.firstState -1};
        case "reset":
            return initialState
        default:
            return state;
    }
}
function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h2>Count: {count.firstState}</h2>
            <button onClick={()=> dispatch({type: "increment"})}>Increment</button>
            <button onClick={()=> dispatch({type: "decrement"})}>Decrement</button>
            <button onClick={()=> dispatch({type: "reset"})}>Reset</button>
        </div>
    )
}

export default CounterTwo
