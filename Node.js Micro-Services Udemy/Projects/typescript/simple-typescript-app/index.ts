import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface todo {
  id: number
  title: string
  completed: boolean
}

axios.get(url).then(response => {
  const { id, title, completed }: todo = response.data
  logTodo(id, title, completed)
})

const logTodo = (id: number, title: string, completed: boolean): void => {
  console.log(`
    ID: ${id},
    Title: ${title},
    Completed: ${completed}
  `)
}