import './style.sass';
import edit from '../../assets/FiEdit.svg'
import trash from '../../assets/FiTrash2.svg'

export const ToDoList = () => {

  return (
    <div className='box-todo'>

      <div className="card-todo">

        <div className="task-info">

          <h3>Tarefa 2</h3>

          <p>Categoria 2</p>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut interdum pharetra est in efficitur</p>

        </div>

        <div className="date-update">
          <p>08/06/1992</p>
          <img src={edit} alt="" />
          <img src={trash} alt="" />
        </div>

      </div>

    </div>
  )
}
