import { useContext } from "react"
import {countContext} from "../App"


const B = () => {
    const {dispatch} = useContext(countContext);
  return (
    <div>
         <span>ComponentB</span>
        <button onClick={()=>dispatch("increment")}>Increment</button>
        <button onClick={()=>dispatch("decrement")}>Decrement</button>
        <button onClick={()=>dispatch("reset")}>Reset</button>
    </div>
  )
}

export default B