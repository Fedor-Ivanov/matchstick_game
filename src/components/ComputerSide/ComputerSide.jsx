import React from 'react'
import { connect } from 'react-redux'
import { takeItems, switchTurn, pullItemsComp } from '../../store/actions'


function ComputerSide({ computerTurn, computerCount, switchTurn, takeItems, updateComputerCount }) {

    function compTurn() {
        const computerTakeItems = Math.floor(Math.random() * 3) + 1;
        console.log(computerTakeItems)
        takeItems(computerTakeItems)
        updateComputerCount(computerTakeItems)
        switchTurn()
    }

    return (
        <div>
            {computerTurn ? 'its your turn, moron' : compTurn()}

            <div>computer count  - {computerCount}</div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        computerTurn: state.playerTurn,
        computerCount: state.computerCount,

    }
}

const mapDispatchToProps = {
    switchTurn: switchTurn,
    takeItems: takeItems,
    updateComputerCount: pullItemsComp

};

export default connect(mapStateToProps, mapDispatchToProps)(ComputerSide)

