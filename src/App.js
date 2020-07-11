import React from 'react'
import ComputerSide from './components/ComputerSide/ComputerSide'
import PlayerSide from './components/PlayerSide/PlayerSide'
import Pull from './components/Pull/Pull'


function App() {
  return (
    <div style={fieldWrap}>
      <ComputerSide></ComputerSide>
      <Pull></Pull>
      <PlayerSide></PlayerSide>
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

export default App
