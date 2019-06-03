/*
  function showTodo(todo: { title: string; text: string }) {
    console.log(todo.title + ': ' + todo.text);
  }

  let myTodo = { title: 'Trash', text: 'Take out trash' };

  showTodo(myTodo);
*/

/*
  Interface refactor of the above code. An interface is essentially just a way
  to create your own custom type.
*/

interface Todo {
  title: string;
  text: string;
}

function showTodo(todo: Todo) {
  console.log(todo.title + ': ' + todo.text);
}

let myTodo = { title: 'Trash', text: 'Take out trash' };

showTodo(myTodo);
