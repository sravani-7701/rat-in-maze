import React from 'react'
import rat from './rat.png'

function Cellr({row, col}) {
    return (
        < div className="square" id={`${row}-${col}`}>
            <img src={rat} className="rat"/>
        </div>
    )
}

export default Cellr
