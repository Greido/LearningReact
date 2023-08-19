import React from 'react'

import {useSelector,useDispatch} from 'react-redux'
import { increment,decrement } from '../Redux/Features/CounterSlice'


function Home() {

    const count = useSelector((state) => state.counter.value);

    const dispatch = useDispatch()
    
    
    return (
        <>
            <h1>How to use Redux?</h1>
            <p>{count}</p>
            <button
            aria-label='Increment Value'
            onClick={() => dispatch(increment())}>
                Increment
            </button>
            <button
            aria-label='Increment Value'
            onClick={() => dispatch(decrement())}>
                Decrement
            </button>
        </>
    )
}

export default Home