import React, {useRef} from 'react';
import {useSelector,useDispatch} from "react-redux";
import {decrement, increment,setCustom} from "../../redux/state/counter/counterSlice.js";

const Counter = () => {

    const myNumber = useRef();
    const count=useSelector((state)=>state.counter.value)
    const dispatch=useDispatch();
    return (
        <div className="card">
            <div className="card-header bg-secondary">
                <h4 className="text-white">My counter App</h4>
            </div>
            <div className="card-body">
                <h1>{count}</h1>
                <div className="mt-4">
                    <button onClick={()=>{dispatch(increment())}} className="btn mx-2 btn-success">Increase</button>
                    <button onClick={()=>{dispatch(decrement())}} className="btn mx-2 btn-danger">Decrease</button>
                </div>
                <div className="mt-4">
                    <input ref={myNumber} type="number" className="form-control w-50 my-2"/>
                    <button onClick={()=>dispatch(setCustom(myNumber.current.value))} className="btn w-50 my-2 btn-danger">Set Value</button>
                </div>

            </div>
        </div>
    );
};

export default Counter;