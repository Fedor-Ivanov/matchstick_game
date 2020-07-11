import React, { useState } from 'react'
import { connect } from 'react-redux'
import { takeItems, pullItems, switchTurn } from '../../store/actions'


function PlayerSide({ playerCount, updatePlayerCount, switchTurn, playerTurn, takeItems }) {

    const [takingItems, setTakingItems] = useState()

    function onChange({ target }) {
        setTakingItems(target.value)
    }

    function onEndTurn() {
        if (takingItems <= 3 && takingItems > 0) {
            takeItems(takingItems)
            updatePlayerCount(+takingItems)
            switchTurn()
        } else {
            alert('Необходимо ввести число от 0 до 3')
        }
    }

    return (
        <div>
            <p>PlayerSide</p>
            <div>
                <span>My count - {playerCount}</span>
            </div>
            <div><input style={{ width: '100%' }} type='number' name='points' min='1' max='3' onChange={onChange}></input></div>
            <button disabled={!playerTurn} onClick={() => onEndTurn()}>end turn</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        playerCount: state.playerCount,
        playerTurn: state.playerTurn
    }
}

const mapDispatchToProps = {
    takeItems: takeItems,
    updatePlayerCount: pullItems,
    switchTurn: switchTurn
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSide)
