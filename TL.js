document.addEventListener("DOMContentLoaded", () => {
    const addTodoBtn = document.getElementById('addTodoBtn');
    const newTodoInput = document.getElementById('newTodo');
    const todoList = document.getElementById('todoList');
    const completeAllBtn = document.getElementById('completeAllBtn');
  
    // Add new todo
    addTodoBtn.addEventListener('click', () => {
      const todoText = newTodoInput.value.trim();
      if (todoText !== "") {
        addTodo(todoText);
        newTodoInput.value = '';
      }
    });
  
    // Complete all todos
    completeAllBtn.addEventListener('click', () => {
      const todos = todoList.querySelectorAll('li');
      todos.forEach(todo => {
        todo.classList.add('completed');
      });
    });
  
    // Function to add a todo
    function addTodo(todoText) {
      const todoItem = document.createElement('li');
      const todoCheckbox = document.createElement('input');
      todoCheckbox.type = 'checkbox';
  
      const todoSpan = document.createElement('span');
      todoSpan.textContent = todoText;
  
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'x';
      deleteBtn.classList.add('deleteBtn');
  
      // Mark todo as complete
      todoCheckbox.addEventListener('change', (e) => {
        if (e.target.checked) {
          todoItem.classList.add('completed');
        } else {
          todoItem.classList.remove('completed');
        }
      });
  
      // Delete todo
      deleteBtn.addEventListener('click', () => {
        todoList.removeChild(todoItem);
      });
  
      todoItem.appendChild(todoCheckbox);
      todoItem.appendChild(todoSpan);
      todoItem.appendChild(deleteBtn);
      todoList.appendChild(todoItem);
    }
  });
  