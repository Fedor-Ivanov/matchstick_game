import React, { useState } from 'react'
import { connect } from 'react-redux';
import { setGameMode, toggleModal, setPullValue, setTakeValue } from '../../store/actions';


function Modal({
    setGameMode,
    toggleModal,
    isVisible,
    setPullValue,
    setTakeValue
}) {

    const [mode, setMode] = useState('1')

    const [customNubmers, setCustomNubmers] = useState(false)

    function startGame() {
        setGameMode(mode);
        toggleModal()
    }

    return (
        <>
            {isVisible &&
                <div style={backdropStyle}>
                    <div style={modalStyle}>
                        <h2>Game settings</h2>
                        <div style={{ textAlign: 'center' }}>
                            <div>Whose turn is the first?</div>
                            <div>
                                <label><input name="modeww" type="radio" value='1' defaultChecked onChange={event => setMode(event.target.value)} />player</label>
                                <label><input name="modeww" type="radio" value='0' onChange={event => setMode(event.target.value)} />computer</label>
                            </div>
                        </div>
                        <label><input type='checkbox' value={customNubmers} onChange={() => setCustomNubmers(!customNubmers)}></input>custom numbers mode</label>

                        {customNubmers ?
                            <div style={{ display: 'flex' }}>
                                <input name="pullValue" type="number" placeholder='number of matches' onChange={(e) => setPullValue(e.target.value)} />
                                <input name="taking" type="number" placeholder='range to take' onChange={(e) => setTakeValue(e.target.value)} />
                            </div>
                            :
                            ''
                        }
                        <div>
                            <button onClick={() => startGame()}>start game</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}


const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,1)',
    padding: 50
};

const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 300,
    minHeight: 200,
    margin: '0 auto',
    padding: 30,
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'relative',
    top: 'calc(50% - 100px)'
};


function mapStateToProps(state) {
    return {
        isVisible: state.modalIsVisible
    };
}

const mapDispatchToProps = {
    setGameMode: setGameMode,
    toggleModal: toggleModal,
    setPullValue: setPullValue,
    setTakeValue: setTakeValue
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal)