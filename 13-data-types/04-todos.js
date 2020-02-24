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
      (todo, index) => `
      <li ${todo.completed ? 'class="done"' : ''}>
        <button onclick="handleRemove(${index})">x</button>
        <span onclick="handleToggle(${index})">${todo.text}</span>
      </li>`
    )
    .join('')
}

render()

document.querySelector('form').onsubmit = function(event) {
  event.preventDefault()

  let id = generateId()
  let text = document.querySelector('input').value

  todos.push({ id, text })

  document.querySelector('input').value = ''
  render()
}

function handleRemove(index) {
  todos.splice(index, 1)
  render()
}

function handleToggle(index) {
  todos[index].completed = !todos[index].completed
  render()
}

// function generateId() {
//   if (todos.length === 0) {
//     return 1
//   }

//   let lastTodo = todos[todos.length - 1]
//   let lastId = lastTodo.id
//   let newId = lastId + 1
//   return newId
// }

// function generateId() {
//   if (todos.length === 0) {
//     return 1
//   } else {
//     return todos[todos.length - 1].id + 1
//   }
// }

function generateId() {
  return !todos.length ? 1 : todos[todos.length - 1].id + 1
}
