import React from 'react'
import Field from './components/Field/Field'
import Modal from './components/Modal/Modal'
import { connect } from 'react-redux'


function App({ isVisible }) {
  return (
    <div style={{ background: 'linear-gradient(to right, #11998e, #38ef7d)' }} >
      <Modal></Modal>
      {!isVisible &&
        <Field></Field>}

    </div>
  )
}


function mapStateToProps(state) {
  return {
    isVisible: state.isVisible
  };
}

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
