import React from 'react'
import './Child.css'

function Child({ childCount }) {
    console.log(' child re-rendering');
    return (
        <div className='child'>
            <h2>This is Child Class</h2>
            <h3>Parent Count {childCount}</h3>
        </div>
    )
}

export default React.memo(Child)
