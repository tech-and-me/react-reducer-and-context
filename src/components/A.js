import { useContext } from "react"
import {countContext} from '../App'

const A = () => {
    const {dispatch} = useContext(countContext)
    return (
         <div>
            <span>ComponentA</span>
            <button onClick={()=>dispatch("increment")}>Increment</button>
            <button onClick={()=>dispatch("decrement")}>Decrement</button>
            <button onClick={()=>dispatch("reset")}>Reset</button>      
        </div>
  )
}

export default A