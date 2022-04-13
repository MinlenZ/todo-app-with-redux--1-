export const getTodosState = store => store.todos;

export const getTodoList = store =>
  getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store, id) =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {};

export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));

// get all completed todos example (unused)
export const getCompletedTodo = (store) => {
  const allTodos = getTodos(store);
      return allTodos.filter(todo => todo.completed);
};

