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
   var item = todoInputElement.value;
   if (item == "") {
      errorMessageElement.innerHTML = "Todo should not be empty";
      errorMessageElement.style.display = "inline";
   } else {
      errorMessageElement.innerHTML = "";
      errorMessageElement.style.display = "none";
      var todo = `<li>${item}</li>`;
      todosListContainerElement.innerHTML += todo;
      todoInputElement.value = "";
   }
}

function validateKeyAndAddTodo(event) {
   if (event.keyCode === 13) {
      addTodo();
   }
}
