// C = create
// R = read / retrieve
// U = update
// D = delete

let todos = [
  { id: 1, text: 'Learn JavaScript', completed: true },
  { id: 2, text: 'Seek for a job', completed: false },
  { id: 3, text: 'Forget everything' },
]

function showTodos() {
  // 1. loop over all the todos
  // 2. for every todo:
  //    1. create '<li>{todo.text}</li>'
  //    2. concatenate to the html

  let html = '<ul>'

  // for (let todo of todos) {
  //   html += '<li>' + todo.text + '</li>'
  // }

  html += todos.map(todo => `<li>${todo.text}</li>`).join('\n')

  html += '</ul>'
  return html
}

console.log(showTodos())
