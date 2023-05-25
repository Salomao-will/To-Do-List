import api from "../services/api";

export async function getTodos() {
  return (await api.get('/todo')).data
}

/**
 * função para adicionar nova tarefa
 * @param {{title: string, category: string, date: Date, description: string}} todo 
 */

export async function addTodos(todo) {
  return (await api.post('/todo', todo)).data
}