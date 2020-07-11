import React from 'react'
import { connect } from 'react-redux'


function Pull({ itemsPull }) {
    return (
        <div>
            {itemsPull}
        </div>
    )
}

function mapStateToProps(state) {

    return {
        itemsPull: state.itemsPull
    }
}

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Pull)
