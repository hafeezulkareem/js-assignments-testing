const todosListContainerElement = document.querySelector("#itemsList");
const todoInputElement = document.querySelector("#todoInput");
const errorMessageElement = document.querySelector("#errorMessage");

function validateTodo() {
   const todo = todoInputElement.value;
   if (todo.length > 50) {
      errorMessageElement.innerHTML =
         "Todo length should be less than 50 chars";
      errorMessageElement.style.display = "inline";
   } else {
      errorMessageElement.innerHTML = "";
      errorMessageElement.style.display = "none";
   }
}

function addTodo() {
   const todo = todoInputElement.value;
   if (todo == "") {
      errorMessageElement.innerHTML = "Todo should not be empty";
      errorMessageElement.style.display = "inline";
   } else {
      errorMessageElement.innerHTML = "";
      errorMessageElement.style.display = "none";
      const todoElement = `<li><input class="todoCheckbox" type="checkbox" value="${todo}" />${todo}</li>`;
      todosListContainerElement.innerHTML += todoElement;
      todoInputElement.value = "";
   }
}

function validateKeyAndAddTodo(event) {
   if (event.keyCode === 13) {
      addTodo();
   }
}
