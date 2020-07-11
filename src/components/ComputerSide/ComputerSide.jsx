import React from 'react'
import { connect } from 'react-redux'
import { takeItems, switchTurn, pullItemsComp } from '../../store/actions'


function ComputerSide({ playerTurn, computerCount, switchTurn, takeItems, updateComputerCount, itemsPull }) {

    function checkWinner() {
        if (computerCount % 2 == 0)
            alert("проиграл");
        if (computerCount % 2 == 1)
            alert("выиграл");
    }

    function compTurn() {
        const computerTakeItems = Math.floor(Math.random() * 3) + 1;
        if (itemsPull - computerTakeItems > 0) {
            takeItems(computerTakeItems)
            updateComputerCount(computerTakeItems)
            switchTurn()
        } else if (itemsPull - computerTakeItems == 0) {
            takeItems(computerTakeItems)
            updateComputerCount(computerTakeItems)
            checkWinner()
        } else {
            compTurn()
        }
    }

    return (
        <div>
            {!playerTurn ? 'its your turn' : compTurn()}
            <div>computer count  - {computerCount}</div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        playerTurn: !state.playerTurn,
        computerCount: state.computerCount,
        itemsPull: state.itemsPull,
    }
}

const mapDispatchToProps = {
    switchTurn: switchTurn,
    takeItems: takeItems,
    updateComputerCount: pullItemsComp
};

export default connect(mapStateToProps, mapDispatchToProps)(ComputerSide)

