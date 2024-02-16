import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/Slices/CounterSlice'

export function Counter() {
    //to acess the slice state
   const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
        //   aria-label="Increment value"
           onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <br />
       <div>{count}</div>
        <button
        //   aria-label="Decrement value"
         onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}