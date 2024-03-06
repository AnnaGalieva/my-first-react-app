import { increment, decrement } from "./counterSlice.js";
import { useSelector, useDispatch } from "react-redux";


function Counters() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (<>
        <h1>{count}</h1>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(increment())}>Increment</button>
    </>);
}

export default Counters;