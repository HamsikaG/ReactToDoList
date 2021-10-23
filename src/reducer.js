const initialState = {
  todos: [{
    id: 23,
    todoDescription: "todoDescription",
    todoFinishDate: "todoFinishDate",
    isDone: false
  }]
}

export default function appReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'todos/todoAdded': {
      const { id, todoDescription, todoFinishDate, isDone } = payload;
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: id,
            todoDescription: todoDescription,
            todoFinishDate: todoFinishDate,
            isDone: isDone
          }
        ]
      }
    }
    case 'todos/todoDeleted': {
      const { id } = payload;
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return todo.id !== id
        })
      }
    }
    case 'todos/todoToggled': {
      const { id } = payload;
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== id) {
            return todo
          }

          return {
            ...todo,
            isDone: !todo.isDone
          }
        })
      }
    }
    default:
      return state
  }
}