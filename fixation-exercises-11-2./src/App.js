import React from 'react';
import UserProfile from './UserProfile'

function App() {
  
  const joao = {
    id: 102,
    name: "João",
    email: "joao@gmail.com",
    src: "https://cdn.pixabay.com/photo/2016/08/20/05/38/src-1606916_640.png",
    altTxt: 'Joao'
  };

  const amelia = {
    id: 77,
    name: "Amélia",
    email: "amelia@gmail.com",
    src: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png",
    altTxt: 'Amelia'
  };

  const gato = {
    id: 23,
    name: "Gato",
    email: 'emaildegato@gmail.com',
    src: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
    altTxt: 'Cute cat staring'
  };
  return (
    <div>
      <UserProfile user={gato}/>
      <UserProfile user={joao}/>
      <UserProfile user={amelia}/>
    </div>
  );  
}

export default App;
