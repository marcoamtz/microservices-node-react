import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(({ data }) => {
  const { id, title, completed } = data as Todo;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  return console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
};
