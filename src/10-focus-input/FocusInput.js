import {useEffect, useRef} from 'react'

export default function FocusInput() {

  const inputEl = useRef(null);
  useEffect( () => {
    inputEl.current.focus();
  }, [])
  return (
    <div>
      <label htmlFor='focused-input'>Focus me on page load!</label>
      <input ref={inputEl} name='focused-input'></input>
    </div>
  )
}
