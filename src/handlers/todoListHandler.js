import todoRepository from "../repositories/todoRepository.js";

const getTodos = (ctx) => {
  try {
    const allDatas = todoRepository.getTodos();
    if (!allDatas) {
      ctx.status === 404;
      return (ctx.body = {
        success: false,
        message: "Couldn't found any data",
      });
    }

    ctx.status === 200;
    return (ctx.body = {
      success: true,
      data: allDatas,
    });
  } catch (error) {
    ctx.status === 500;
    ctx.body = {
      success: false,
      message: error.message,
    };
  }
};

const addNewTodo = (ctx) => {
  try {
    const newTodo = ctx.request.body;
    const data = todoRepository.addNewTodo(newTodo);
    ctx.status === 200;
    return (ctx.body = {
      success: true,
      data: data,
    });
  } catch (error) {
    ctx.status === 500;
    ctx.body = {
      success: false,
      message: error.message,
    };
  }
};

const completeTodo = (ctx) => {
  try {
    const { id } = ctx.params;
    const data = todoRepository.updateStatusComplete(parseInt(id));
    ctx.status === 200;
    return (ctx.body = {
      success: true,
      message: "Updated status Completed successfully",
      data: data,
    });
  } catch (error) {
    ctx.status === 500;
    ctx.body = {
      success: false,
      message: error.message,
    };
  }
};

const undoCompleteTodo = (ctx) => {
  try {
    const { id } = ctx.params;
    const data = todoRepository.undoStatusComplete(parseInt(id));
    ctx.status === 200;
    return (ctx.body = {
      success: true,
      message: "Updated status Completed successfully",
      data: data,
    });
  } catch (error) {
    ctx.status === 500;
    ctx.body = {
      success: false,
      message: error.message,
    };
  }
};

const deleteTodo = (ctx) => {
  try {
    const { id } = ctx.params;
    const data = todoRepository.removeTodo(parseInt(id));

    ctx.status === 200;
    return (ctx.body = {
      success: true,
      message: "Delete Todo successfully",
      data: data,
    });
  } catch (error) {
    ctx.status === 500;
    ctx.body = {
      success: false,
      message: error.message,
    };
  }
};

const updateCompleteTodos = (ctx) => {
  try {
    const { ids } = ctx.request.body;
    const data = todoRepository.updateCompleteTodosSelected(ids);
    ctx.status === 200;
    return (ctx.body = {
      success: true,
      message: "Update Complete All Todos successfully",
      data: data,
    });
  } catch (error) {
    ctx.status === 500;
    ctx.body = {
      success: false,
      message: error.message,
    };
  }
};

const deleteTodos = (ctx) => {
  try {
    const { ids } = ctx.request.body;
    const data = todoRepository.deleteTodosSelected(ids);
    ctx.status === 200;
    return (ctx.body = {
      success: true,
      message: "Delete All Todos successfully",
      data: data,
    });
  } catch (error) {
    ctx.status === 500;
    ctx.body = {
      success: false,
      message: error.message,
    };
  }
};

export default {
  getTodos,
  addNewTodo,
  completeTodo,
  undoCompleteTodo,
  deleteTodo,
  updateCompleteTodos,
  deleteTodos,
};
