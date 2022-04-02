import {useState,createContext,useReducer} from 'react';
import A from './components/A';
import B from './components/B'
import C from './components/C'

export const countContext = createContext();

const innitialState = 0;
const reducer = (state,action) => {
  switch (action){
    case 'increment' :
      return state+1;
    case 'decrement' :
      return state-1;
    case 'reset' :
      return innitialState;
    default:
      return state;
  }

}



const App = () => {
  const [counter,dispatch] = useReducer(reducer,innitialState)

  return (
    <countContext.Provider value={{dispatch}}>
      <div className="App">
        <h1>Count Value is : {counter}</h1>
        <A/>
        <B/>
        <C/>
      </div>
    </countContext.Provider>
    
  );
}

export default App;
