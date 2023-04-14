const initialState = 0;

const ReducerFunctionForIncrementDecrement = (state = initialState, action) =>
{
    switch (action.type)
    {
        case "increment":
            return state = state + 1;
        case "decrement":
            return state = state - 1;
        default:
            return state;
    }
}

export default ReducerFunctionForIncrementDecrement;