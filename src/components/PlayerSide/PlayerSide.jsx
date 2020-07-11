import React, { useState } from 'react'
import { connect } from 'react-redux'
import { takeItems, pullItems, switchTurn } from '../../store/actions'


function PlayerSide({ playerCount, updatePlayerCount, switchTurn, playerTurn, takeItems, itemsPull }) {

    const [takingItems, setTakingItems] = useState();

    function checkWinner() {
        if (playerCount % 2 == 0)
            alert("выиграл");
        if (playerCount % 2 == 1)
            alert("проиграл");
    }

    function onEndTurn() {
        if (takingItems <= 3 && takingItems > 0) {

            if (itemsPull - takingItems > 0) {
                takeItems(takingItems)
                updatePlayerCount(+takingItems)
                switchTurn()
            } else if (itemsPull - takingItems == 0) {
                takeItems(takingItems)
                updatePlayerCount(+takingItems)
                checkWinner()
            }
        } else {
            alert('Необходимо ввести число от 1 до 3')
        }
    }

    return (
        <div>
            <p>PlayerSide</p>
            <div>
                <span>My count - {playerCount}</span>
            </div>
            <div><input style={{ width: '100%' }} type='number' name='points' min='1' max='3' onChange={event => setTakingItems(event.target.value)}></input></div>
            <button disabled={!playerTurn} onClick={() => onEndTurn()}>end turn</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        playerCount: state.playerCount,
        playerTurn: state.playerTurn,
        itemsPull: state.itemsPull,
    }
}

const mapDispatchToProps = {
    takeItems: takeItems,
    updatePlayerCount: pullItems,
    switchTurn: switchTurn,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSide)
