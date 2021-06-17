import React from 'react'

function Cell({row,col}) {
    return (
        <div className="square" id={`${row}-${col}`}>
        </div>
    )
}

export default Cell
