import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { addTodos, getTodos } from "../requests/todo"

export function useTodo() {

  const queryClient = useQueryClient()

  //useQuery espera 2 parametros, um array com uma chave e a função que chama a api
  const { data, isFetching, error } = useQuery(['@todos'], getTodos, {
    //impede que a janela seja sempre recarregada
    refetchOnWindowFocus: false
  })

  const { mutate } = useMutation(addTodos, {
    onSuccess: () => queryClient.invalidateQueries(['@todo']),
    onError: () => alert('Requisição falhou')
  })

  return {
    todo: data,
    isFetching,
    error,
    addTodo: mutate
  }

}