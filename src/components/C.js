import {useContext} from 'react'
import {countContext} from '../App'

const C = () => {
    const {dispatch} = useContext(countContext)
  return (
    <div>
         <span>ComponentC</span>
        <button onClick={()=>dispatch("increment")}>Increment</button>
        <button onClick={()=>dispatch("decrement")}>Decrement</button>
        <button onClick={()=>dispatch("reset")}>Reset</button>
    </div>
  )
}

export default C