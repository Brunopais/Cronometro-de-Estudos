import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Lista from './components/Lista';
import { ITarefa } from './types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [tarefaSelecionada, setTarefaSelecionada] = useState<ITarefa | null>(null);

  function selecionaTarefa(tarefa: ITarefa) {
    setTarefaSelecionada(tarefa);
  }

  return (
    <div className="App">
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa} />
    </div>
  );
}

export default App;
