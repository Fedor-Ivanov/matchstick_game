import React from 'react'
import ComputerSide from '../ComputerSide/ComputerSide'
import Pull from '../Pull/Pull'
import PlayerSide from '../PlayerSide/PlayerSide'

function Field() {
    return (
        <div>
            <ComputerSide></ComputerSide>
            <Pull></Pull>
            <PlayerSide></PlayerSide>
        </div>
    )
}

export default Field
