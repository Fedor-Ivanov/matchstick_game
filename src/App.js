import React from 'react'
import Field from './components/Field/Field'
import Modal from './components/Modal/Modal'
import { connect } from 'react-redux'



function App({ isVisible }) {
  return (
    <div style={fieldWrap}>
      <Modal></Modal>
      {!isVisible &&
        <Field></Field>}

    </div>
  )
}

const fieldWrap = {
  display: 'grid',
  height: '100vh',
  gridTemplateRows: 'repeat(3, 1fr)',
  alignItems: 'center',
  justifyContent: 'center'
}


function mapStateToProps(state) {
  return {
    isVisible: state.isVisible
  };
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
