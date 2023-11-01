import React, { useState } from 'react';

function ListaDeTarefas() {
  const [tarefas, setTarefas] = useState([]);
  const [novoProfessor, setNovaTarefa] = useState('');
//aqui
  const adicionarProfessor = () => {
    if (novoProfessor !== '') { //aqui
      setTarefas([...tarefas, { texto: novoProfessor, concluida: false }]); //aqui
      setNovaTarefa('');
    }
  };

  const adicionarDisciplina = () => {
    if (novoProfessor !== '') { //aqui
      setTarefas([...tarefas, { texto: novoProfessor, concluida: false }]); //aqui
      setNovaTarefa('');
    }
  };


  const removerTarefa = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    setTarefas(novasTarefas);
  };

  const handleConcluirTarefa = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluida = !novasTarefas[index].concluida;
    setTarefas(novasTarefas);
  };

  return (
    <div className="container">
      <h2 className="titulo-borda">Cadastre um professor</h2>
      <h2>Cadastre uma disciplina</h2>
      <div className="borda-preta">
        <div>
        <input
          type="text"
          value={novoProfessor} //aqui
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="cadastre um professor"
          className="input-tarefa"
        />
        </div>

        <input
          type="text"
         // value={novaDisciplina}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="cadastre uma disciplina"
          className="input-tarefa"
        />

<input
          type="text"
         // value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="cadastre uma turma"
          className="input-tarefa"
        />

        <br></br> <br></br>
        <button onClick={adicionarProfessor} className="botao-adicionar">
          Cadastre um professor
        </button>
        
         <button onClick={adicionarDisciplina} className="botao-adicionar">
          Cadastre uma disciplina
        </button>

         
        <button onClick={adicionarProfessor} className="botao-adicionar">
          Cadastre uma turma
        </button>

        

        <br></br>  <br></br>  <br></br>
        {tarefas.length > 0 && (
          <table className="tabela-tarefas">
            <thead>
              <tr>
                <th>Professor</th>
                <th>Disciplinas</th>
                <th>Turma</th>
              </tr>
            </thead>
            <tbody>
              {tarefas.map((tarefa, index) => (
                <tr key={index} className={index % 2 === 0 ? "linha-verde-claro" : "linha-verde-mais-claro"}>
                  <td>
                    <input
                      type="checkbox"
                      checked={tarefa.concluida}
                      onChange={() => handleConcluirTarefa(index)}
                      className="checkbox-concluir"
                    />
                    <span className={tarefa.concluida ? "tarefa-concluida" : ""} style={{ marginLeft: '20px' }}>{tarefa.texto}</span>
                  </td>
                  <td>
                    {!tarefa.concluida && (
                      <button onClick={() => removerTarefa(index)} className="botao-remover">
                        Remover
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>

    
  );
}

export default ListaDeTarefas;

