import React from 'react';
import './App.css';

const compromissos = ['Estudar inglês', 'Varrer a casa', 'Lavar o banheiro', 
                      'Estudar japonês', 'Fazer as compras de mercado', 'Ler',
                      'Estudar francês', 'Lavar a louça', 'Codar']
const task = () => {
  const listaAtividades = compromissos.map(compromisso => <li>{compromisso}</li>)
  return listaAtividades;
}

function App() {
  return (
    <div className="App">
     {task('oi')}
    </div>
  );
}

export default App;
