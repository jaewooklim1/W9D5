

const todos = JSON.parse(localStorage.getItem("todos")) || [];




const todoList = document.querySelector(".todos")
const addTodos = document.querySelector(".add-todo-form")


const addToDo = (e) => {
    e.preventDefault();
    debugger

    const toInput = document.querySelector("input[name='add-todo']")
    debugger
    const value = toInput.value;
    const todo = { value, done: false }

    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos))

    populateList(todos);
    e.currentTarget.reset();
}

const populateList = (todos) => {
    todoList.innerHTML = todos.map( (todo) => {
    return `<li>
                <label>
                    <input type='checkbox'>
                ${todo.value}</label> 
             </li>
        `
    }).join("");
}

addTodos.addEventListener("submit", addToDo)

populateList(todos)