// C = create
// R = read / retrieve
// U = update
// D = delete

let todos = [
  { id: 1, text: 'Learn JavaScript', completed: true },
  { id: 2, text: 'Seek for a job', completed: false },
  { id: 3, text: 'Forget everything' },
]

function render() {
  document.querySelector('ul').innerHTML = todos
    .map(
      todo => `<li ${todo.completed ? 'class="done"' : ''}>${todo.text}</li>`
    )
    .join('')
}

render()

document.querySelector('form').onsubmit = function(event) {
  event.preventDefault()

  let todo = { id: 4, text: 'Eat your vegetables' }
  todos.push(todo)
  render()
}
