const data = {
    todos: [
      {
        id: 1,
        task: 'task1',
        name: 'assignee1000',
        status: 'Relevant'
      },
      {
        id: 2,
        task: 'task2',
        name: 'assignee1001',
        status: ''
      },
      {
        id: 3,
        task: 'task3',
        name: 'assignee1002',
        status: 'Not Relevant'
      },
      {
        id: 4,
        task: 'task4',
        name: 'assignee1000',
        status: 'Relevant'
      },
      
    ]
  };

  module.exports = {
    getToDos: function() {
        return data.todos;
    },
    addToDo: function(task) {
        task.id = data.todos.length + 1;
        data.todos.push(task);
        return {
            message: "task added",
            tasks: data.todos.length
        }
    },
    deleteToDos: function(id) {
        data.todos = data.todos.filter(todo => todo.id != id)
        return {
            message: "task deleted",
            tasks: data.todos.length
        }
    },
    editTodos: function(task) {
        data.todos = data.todos.map(todo => {
            if (todo.id === task.id) todo = task;
            return todo;
        });
        return {
            message: "task edited",
            tasks: data.todos.length
        }
    }
  }