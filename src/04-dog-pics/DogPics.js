import {useState, useEffect} from 'react'

const getImageSrc = async (url) => {
  const resultJson = await fetch(url);
  const result = await resultJson.json();
  return result.message;
}

export default function DogPics () {
  // API: https://dog.ceo/dog-api/

  const [imgSrc, setImgSrc] = useState('')

  useEffect( () => {
    getImageSrc('https://dog.ceo/api/breeds/image/random').then(pic => setImgSrc(pic));
  },[])

  return (
    <div className='dog-pics'>
      <img src={imgSrc} />
      <button 
        onClick={
         async () =>  setImgSrc( 
            await getImageSrc('https://dog.ceo/api/breeds/image/random')
          )
        }
      >
        🐶
      </button>
    </div>
  )
}
