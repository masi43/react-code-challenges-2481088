import React, {useState} from 'react'

export default function DarkMode () {

  const [mode, setMode] = useState('light-mode')

  const changeMode = function(modeData) {
    setMode(modeData === 'dark' ? 'dark-mode' : 'light-mode');
  }
  return (
    <div className={`page ${mode}`}>
      <button className='dark-mode-button' onClick={() => changeMode('dark')}>Dark Mode</button>
      <button className='light-mode-button' onClick={() => changeMode('light')}>Light Mode</button>
    </div>
  )
}
