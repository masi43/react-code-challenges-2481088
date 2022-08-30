import {useEffect} from 'react';

export default function WindowEvent () {
  useEffect( () => {
    const doubleClick = () => alert("mouse pressed");
    // callback in add and remove should be same check below link for explanation
    // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener#matching_event_listeners_for_removal
    window.addEventListener('dblclick', doubleClick);

    return () =>  window.removeEventListener('dblclick', doubleClick);
      
  },[])
  return (
    <h2>Window event active</h2>
  )
}
