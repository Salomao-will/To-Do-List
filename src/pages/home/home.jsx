import { ToDoList } from '../../components/toDoList';
import { Loguin } from '../loguin';
import './style.sass';

export const Home = () => {

  return (

    <main>
      <Loguin />
      <ToDoList />
    </main>

  )
}
