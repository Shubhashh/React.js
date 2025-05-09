    import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {RootState} from '../state/store'
import {decrement,increment,incrementByAmount} from '../state/counter/counterSlice'

const Counter = () => {

    const count = useSelector((state: RootState)=>state.counter.value);
    const dispatch = useDispatch();
  return (
    <div>
        <h2>{count}</h2>
        <div>
            <button on onClick={()=>dispatch(increment())}>Increment</button>
            
            <button on onClick={()=>dispatch(decrement( ))}>Decrement</button>
        </div>
        </div>
  )
}

export default Counter