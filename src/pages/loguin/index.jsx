import './style.sass';

export const Loguin = () => {
  return (
    <main className='container'>

      <form className='loguin'>

        <h1>Cadastrar Tarefa</h1>

        <div className="box-inputs">

          <input type="text" id='title' placeholder='Title' />

          <input type="text" id='title' placeholder='Categoria' />

          <input type="text" id='title' placeholder='Data' />

          <input type="text" id='title' placeholder='Descrição' />

          <button type='submit'>Salvar</button>

        </div>

      </form>
    </main>
  )
}
