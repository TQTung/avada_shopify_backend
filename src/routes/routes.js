import Router from "koa-router";
import todoListHandler from "../handlers/todoListHandler.js";
import todoInputArrNumberMiddleware from "../middleware/todoInputArrNumberMiddleware.js";
import todoInputMiddleware from "../middleware/todoInputMiddleware.js";

const router = new Router({
  prefix: "/api",
});

router.get("/todos", todoListHandler.getTodos);
router.post(
  "/todos/createTodo",
  todoInputMiddleware,
  todoListHandler.addNewTodo
);
router.put("/todos/updateComplete/:id", todoListHandler.completeTodo);
router.put(
  "/todos/updateCompleteTodos",
  todoInputArrNumberMiddleware,
  todoListHandler.updateCompleteTodos
);
// router.put("/todos/undoComplete/:id", todoListHandler.undoCompleteTodo);
router.delete("/todos/deleteTodo/:id", todoListHandler.deleteTodo);
router.post(
  "/todos/deleteTodos",
  todoInputArrNumberMiddleware,
  todoListHandler.deleteTodos
);

export default router;
