import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { HandleDecrement, HandleIncrement } from '../redux/actions'


const Redux = (state) =>
{
    const counter = useSelector((state) => state.ReducerFunctionForIncrementDecrement)
    console.log(counter)

    const dispatch = useDispatch();
    return (
        <React.Fragment>
            <h1>Example of Redux</h1>
            <button className='button' onClick={() => dispatch(HandleIncrement())}>+</button>
            <span className='number'>
                {counter}
            </span>
            <button className='button' onClick={() => dispatch(HandleDecrement())}>-</button>
        </React.Fragment>
    )
}

export default Redux
