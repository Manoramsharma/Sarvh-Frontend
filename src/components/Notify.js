import React from "react";
import {useSelector, useDispatch} from 'react-redux'
const Notify =()=>{
    useSelector(state => console.log(state ))
    return(
        <div>
            <h1>Notify</h1>
        </div>
    )
}
