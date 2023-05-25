import { useTodo } from '../../hooks/useTodos';
import './style.sass';
import { useState } from 'react';

export const Loguin = () => {

  const [form, setForm] = useState({
    title: '',
    category: '',
    date: '',
    description: ''
  })

  const { addTodo } = useTodo()

  return (
    <main className='container'>

      <form className='loguin'>

        <h1>Cadastrar Tarefa</h1>

        <div className="box-inputs">

          <input type="text" id='title' placeholder='Title'
            value={form.title}
            onChange={(ev) => setForm({ ...form, title: ev.target.value })}
          />

          <select name="" id=""
            value={form.category}
            onChange={(ev) => setForm({ ...form, category: ev.target.value })}>
            {
              addTodo.map(categoria => (
                <>
                  <option>{categoria.title}</option>
                </>
              ))
            }
          </select>

          <input type="date" id='title' placeholder='Data'
            value={form.date}
            onChange={(ev) => setForm({ ...form, date: ev.target.value })}
          />

          <input type="text" id='title' placeholder='Descrição'
            value={form.description}
            onChange={(ev) => setForm({ ...form, description: ev.target.value })}
          />

          <button type='submit' onClick={() => addTodo(form.title, form.category, form.date, form.description)}>Salvar</button>

        </div>

      </form>
    </main>
  )
}
