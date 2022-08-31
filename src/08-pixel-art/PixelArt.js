import React, {useState, useContext} from 'react'

// create react context #7
// wrap top component with contextprovider #59
// hook useContext() is used get the desired context in desired component (#12) and (#33)
// we can also use <ColorContext.Consumer> to pass the context instead of useContext
const ColorContext = React.createContext({
  mainColor: 'lightGrey',
  setMainColor: () => { }
});

function ColorPicker () {
  const {setMainColor} = useContext(ColorContext);
  const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple']
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map(
        color => <button key={color} style={{ backgroundColor: color }} 
        onClick={() => setMainColor(color)} 
      />)}
    </div>
  )
}

function Pixel () {
  const [ selectedColor, setSelectedColor ] = useState('lightGrey')
  const {mainColor } = useContext(ColorContext);
  return <div 
    style={{ height: '20px', width: '20px', backgroundColor: selectedColor , margin: '1px' }} 
    onClick = {() => setSelectedColor(mainColor)}
    />
}

function Pixels () {
  const pixels = []
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i}/>)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '210px', margin: '0 auto' }}>
      {pixels}
    </div>
  )
}

export default function PixelArt () {
  const [mainColor, setMainColor ] = useState('lightGrey');
  return (
    <div>
      <ColorContext.Provider value={{mainColor, setMainColor}}>
        <ColorPicker/>
        <Pixels />
      </ColorContext.Provider>
    </div>
  )
}

