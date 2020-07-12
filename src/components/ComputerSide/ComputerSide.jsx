import React from 'react'
import { connect } from 'react-redux'
import { takeItems, switchTurn, pullItemsComp, haveWinner } from '../../store/actions'


function ComputerSide({
    playerTurn,
    computerCount,
    switchTurn,
    takeItems,
    updateComputerCount,
    itemsPull,
    haveWinner,
    setWinner,
    taking
}) {

    haveAWinner();

    function haveAWinner() {
        if (itemsPull == 0 && !haveWinner) {
            checkWinner()
        }
    }

    function checkWinner() {
        if (computerCount % 2 == 0)
            alert("проиграл");
        setWinner();
        if (computerCount % 2 == 1)
            alert("выиграл");
    }


    // function makeTurn() {

    // }

    function compTurn() {
        const computerTakeItems = Math.floor(Math.random() * taking) + 1;
        if (itemsPull - computerTakeItems > 0) {
            takeItems(computerTakeItems)
            updateComputerCount(computerTakeItems)
            switchTurn()
        } else if (itemsPull - computerTakeItems == 0) {
            takeItems(computerTakeItems)
            updateComputerCount(computerTakeItems)
        } else if (itemsPull == 0) {

        } else {
            compTurn()
        }
    }

    let arr = Array.apply(null, Array(computerCount)).map((val, idx) => idx);


    return (
        <div>
            {!playerTurn ? 'its your turn, human' : compTurn()}
            <div>computer count  - {computerCount}</div>
            <div>
                {arr.map(item => (
                    <span key={item}>o</span>
                ))}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        playerTurn: !state.playerTurn,
        computerCount: state.computerCount,
        itemsPull: state.itemsPull,
        haveWinner: state.haveWinner,
        taking: state.taking,
    }
}

const mapDispatchToProps = {
    switchTurn: switchTurn,
    takeItems: takeItems,
    updateComputerCount: pullItemsComp,
    setWinner: haveWinner
};

export default connect(mapStateToProps, mapDispatchToProps)(ComputerSide)

