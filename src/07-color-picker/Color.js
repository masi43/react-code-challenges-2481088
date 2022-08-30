export default function Color ({ hex, name, setColor }) {
  return (
    <button
      className='color-square'
      style={{ backgroundColor: hex }}
      onClick = {() => setColor(hex)}
    >
      <h2>{name}</h2>
    </button>
  )
}
