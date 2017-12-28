var todoList = {
  todos: [],
  addTodo: function(todoText){
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText){
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
 
  //if everything is true; make everything false
  toggleAll: function(){
  var totalTodos = this.todos.length;
  var completedTodos = 0;

  this.todos.forEach(function(todo){
    if(todo.completed === true){
      completedTodos++;
    };  
  });

  this.todos.forEach(function(todo){
    if(completedTodos === totalTodos){
    //make everything false
      todo.completed = false;
      } //otherwise make everything true 
    else {
      todo.completed = true;
     }
  })
  } 
};

var handlers = {
  addTodo: function(){
    var addTodoInput = document.getElementById('addTodoInput');
    todoList.addTodo(addTodoInput.value);
    addTodoInput.value = '';
    view.displayTodos();
  },
  changeTodo: function(){
    var changeTodoPosition = document.getElementById('changeTodoPosition');
    var changeTodoText = document.getElementById('changeTodoText');
    todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoText.value);
    changeTodoPosition.value = '';
    changeTodoText.value = '';
    view.displayTodos();
  },
  deleteTodo: function(position){
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function(){
    var toggleCompletedPosition = document.getElementById('toggleCompletedPosition');
    todoList.toggleCompleted(toggleCompletedPosition.valueAsNumber);
    toggleCompletedPosition.value = '';
    view.displayTodos();
  }, 
  toggleAll: function(){
    todoList.toggleAll();
    view.displayTodos();
  }
};


var view = {
  displayTodos: function(){
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';

    todoList.todos.forEach(function(todo, position){
      var todoLi = document.createElement('li');
      var todoTextComplete = '';

      if(todo.completed === true){
        todoTextComplete = '(X) ' + todo.todoText + ' ';
      } else{
        todoTextComplete = '( ) ' + todo.todoText + ' ';
      }

      todoLi.id = position;
      todoLi.textContent = todoTextComplete;
      todoLi.appendChild(this.createDeleteButton());
      todosUl.appendChild(todoLi);
    }, this);
  },


  createDeleteButton : function(){
    var deleteButton = document.createElement('button');
    deleteButton.textContent = ' ';
    deleteButton.className = 'deleteButton';
    return deleteButton;
  },
  setEventListeners: function(){
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event){

    //get element that was clicked on
    var elementClicked = event.target;
    if(elementClicked.className === 'deleteButton') {
      handlers.deleteTodo(elementClicked.parentNode.id);
      }
    })
  }
};

view.setEventListeners();
