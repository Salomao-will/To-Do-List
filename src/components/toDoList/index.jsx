import './style.sass';
import edit from '../../assets/FiEdit.svg'
import trash from '../../assets/FiTrash2.svg'

import { useTodo } from '../../hooks/useTodos';

export const ToDoList = () => {

  const { todo, isFetching, error } = useTodo()

  if (isFetching) {
    return <h1>Carregando</h1>
  }

  if (error) {
    return <h1>página não econtrada</h1>
  }

  return (
    <div className='box-todo'>

      <div className="title">

        <h1>Mostrar Tarefas</h1>

        <p>Total: 2 tarefas</p>

      </div>

      {JSON.stringify(todo)}

      <div className="card-todo">

        <div className="task-info">

          <div className="text">
            <h3>Tarefa 2</h3>

            <p>Categoria 2</p>
          </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum pharetra est in efficitur</p>

        </div>

        <div className="date-update">
          <p>{todo.date}</p>
          <div className="images">
            <img src={edit} alt="" />
            <img src={trash} alt="" />
          </div>
        </div>

      </div>

    </div>
  )
}
