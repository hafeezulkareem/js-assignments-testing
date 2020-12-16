const ID_LENGTH = 8;
const todos = [];

const todosListContainerElement = document.querySelector("#itemsList");
const todoInputElement = document.querySelector("#todoInput");
const errorMessageElement = document.querySelector("#errorMessage");

function generateId(length) {
   var id = "";
   var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   var charactersLength = characters.length;
   for (var i = 0; i < length; i++) {
      id += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return id;
}

function isTodoLengthGreaterThan50Chars() {
   const todo = todoInputElement.value;
   return todo.length > 50 ? true : false;
}

function checkTodoLength() {
   if (isTodoLengthGreaterThan50Chars()) {
      errorMessageElement.innerHTML =
         "Todo length should be less than 50 chars";
      errorMessageElement.style.display = "inline";
   } else {
      errorMessageElement.innerHTML = "";
      errorMessageElement.style.display = "none";
   }
}

function findTodo(id) {
   return todos.find((todo) => todo.id === id);
}

function isTodoPresent(id) {
   const todo = findTodo(id);
   return todo ? true : false;
}

function updateTodoState(target) {
   const todoElementCheckbox = target.parentElement;
   const todo = findTodo(todoElementCheckbox.id);
   todo.isCompleted = target.checked;
   renderTodos();
}

function renderTodos() {
   todosListContainerElement.innerHTML = "";
   todos.forEach((todo) => {
      const todoElement = `<li id="${todo.id}">
         <input class="todo-checkbox" type="checkbox" value="${todo.todo}" ${
         todo.isCompleted ? "checked" : ""
      } onchange="updateTodoState(event.target)" />
         <span class="${todo.isCompleted ? "todo-completed" : ""}">${
         todo.todo
      }</span>
      </li>`;
      todosListContainerElement.innerHTML += todoElement;
   });
   todoInputElement.value = "";
}

function addTodo() {
   const todo = todoInputElement.value;
   let id = generateId(ID_LENGTH);
   while (isTodoPresent(id)) {
      id = generateId(ID_LENGTH);
   }
   todos.push({
      id,
      todo,
      isCompleted: false,
   });
   renderTodos();
}

function validateAndAddTodo() {
   const todo = todoInputElement.value;
   checkTodoLength();
   if (todo == "") {
      errorMessageElement.innerHTML = "Todo should not be empty";
      errorMessageElement.style.display = "inline";
   } else {
      if (!isTodoLengthGreaterThan50Chars()) {
         errorMessageElement.innerHTML = "";
         errorMessageElement.style.display = "none";
         addTodo();
      }
   }
}

function validateKeyAndAddTodo(event) {
   if (event.keyCode === 13) {
      validateAndAddTodo();
   }
}
