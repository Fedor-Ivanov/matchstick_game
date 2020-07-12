import React, { useEffect } from 'react'
import { connect } from 'react-redux'

function Pull({ itemsPull }) {


    return (
        <div>
            <div>{itemsPull}</div>


        </div>
    )
}

function mapStateToProps(state) {

    return {
        itemsPull: state.itemsPull,
    }
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Pull)
