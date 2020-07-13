import React from 'react'
import { connect } from 'react-redux'

function Pull({ itemsPull }) {

    return (

        <div style={pullValueStyle}> {itemsPull}</div >
    )
}

function mapStateToProps(state) {
    return {
        itemsPull: state.itemsPull,
    }
}

const mapDispatchToProps = {
};

const pullValueStyle = {
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: '50%',
    width: '80px',
    height: '80px',
    color: '#000',
    fontSize: '2em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
}


export default connect(mapStateToProps, mapDispatchToProps)(Pull)
