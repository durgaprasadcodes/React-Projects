import './ReactMemo.css';
import React, { useState } from 'react'
import Child from './Child.jsx'
export default function ReactMemo() {
    const [count, SetCount] = useState(0);
    const [childCount, SetChildCount] = useState(0);
    console.log(' parent re-rendering');
    return (
        <div className="react-memo">
            <h1>React Memo</h1>
            <h2>This is Child Class</h2>
            <h3>Parent Count  {count}</h3>
            <button onClick={() => SetCount(prev => prev + 1)}>Increment Parent Count (Which Causes Re-rendering in Parent)</button>
            <button onClick={() => SetChildCount(prev => prev + 1)}>Increment Child Count (Which Causes Re-rendering in Child)</button>
            <Child childCount={childCount}></Child>
        </div>
    )
}
