import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../redux/counterSlice'

function Counter() {
    const [range,setRange]=useState("")
    /* hook - useDispatch() to call action */
    const dispatch =useDispatch()

    /* useSelector () to access state in store */

    const count =useSelector((state)=>state.counter.value)


  return (
    <div className='d-flex justify-content-center align-items-center w-100' style={{height:'100vh'}}>
        <div className='shadow rounded border border-secondary p-3' style={{width:'400px',}}>
        <h3 className='text-center text-primary'>Counter App</h3>

        <h1 className='text-center ' style={{fontSize:"100px"}}> {count}</h1>

        <div className='d-flex  justify-content-evenly'>
            <button className='btn btn-success m-2 p-2 w-25' onClick={()=>dispatch((increment(Number(range))))}>Increment</button>
            <button className='btn btn-warning m-2 p-2  w-25' onClick={()=>dispatch((reset()))}>Reset</button>
            <button className='btn btn-danger m-2 p-2  w-25' onClick={()=>dispatch((decrement(Number(range))))}>Decrement</button>
        </div>
        <input className='form-control mt-4 w-100' type="text" placeholder='enter range' onChange={(e)=>{setRange(e.target.value)}}/>
        </div>
    </div>
  )
}

export default Counter