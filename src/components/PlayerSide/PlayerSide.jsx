import React, { useState } from 'react'
import { connect } from 'react-redux'
import { takeItems, pullItems, switchTurn, haveWinner } from '../../store/actions'


function PlayerSide({
    playerCount,
    updatePlayerCount,
    switchTurn,
    playerTurn,
    takeItems,
    itemsPull,
    haveWinner,
    setWinner,
    taking
}) {

    const [takingItems, setTakingItems] = useState();

    haveAWinner();

    function haveAWinner() {
        if (itemsPull == 0 && !haveWinner) {
            checkWinner()
        }
    }

    function checkWinner() {
        if (playerCount % 2 == 0)
            alert("выиграл");
        setWinner();
        if (playerCount % 2 == 1)
            alert("проиграл");
    }

    function onEndTurn() {
        if (takingItems <= taking && takingItems > 0) {
            if (itemsPull - takingItems > 0) {
                takeItems(takingItems)
                updatePlayerCount(+takingItems)
                switchTurn()
            } else if (itemsPull - takingItems == 0) {
                takeItems(takingItems)
                updatePlayerCount(+takingItems)
            }
        } else {
            alert(`Необходимо ввести число от 1 до ${taking}`)
        }
    }

    let arr = Array.apply(null, Array(playerCount)).map((val, idx) => idx);

    return (
        <div>
            <div>
                <span>My count - {playerCount}</span>
            </div>
            <div>
                {arr.map(item => (
                    <img key={item} src={require('../../img/match.png')} />
                ))}
            </div>
            <div><input style={{ width: '100%' }} type='number' name='points' min='1' max={taking} onChange={event => setTakingItems(event.target.value)}></input></div>
            <div style={{ display: 'flex', justifyContent: 'center' }}><button disabled={!playerTurn} onClick={() => onEndTurn()}>end turn</button></div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        playerCount: state.playerCount,
        playerTurn: state.playerTurn,
        itemsPull: state.itemsPull,
        haveWinner: state.haveWinner,
        taking: state.taking,
    }
}

const mapDispatchToProps = {
    takeItems: takeItems,
    updatePlayerCount: pullItems,
    switchTurn: switchTurn,
    setWinner: haveWinner
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSide)
