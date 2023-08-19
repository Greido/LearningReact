import {configureStore} from '@reduxjs/toolkit'

import  { counterSlice } from '../Features/CounterSlice'

const store = configureStore({
    reducer:{
        counter: counterSlice.reducer
    }
})

export default store;



