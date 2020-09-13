import React from 'react';
import Image from './Image';

function App() {
  const imageInfo = {
    src: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
    alternativeText: 'Cute cat staring'
  };
  return (
   <Image src={imageInfo.src} alt={imageInfo.alternativeText}/>
  );  
}

export default App;
