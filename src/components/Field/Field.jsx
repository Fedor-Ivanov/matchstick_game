import React from 'react'
import ComputerSide from '../ComputerSide/ComputerSide'
import Pull from '../Pull/Pull'
import PlayerSide from '../PlayerSide/PlayerSide'

function Field() {
    return (
        <div style={fieldWrap}>
            <ComputerSide></ComputerSide>
            <Pull></Pull>
            <PlayerSide></PlayerSide>
        </div>
    )
}

const fieldWrap = {
    display: 'grid',
    height: '100vh',
    fontSize: '1.5em',
    color: '#fff',
    gridTemplateRows: 'repeat(3, 1fr)',
    alignItems: 'center',
    justifyContent: 'center'
}

export default Field
