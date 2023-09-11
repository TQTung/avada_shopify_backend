import Router from "koa-router";
import todoListHandler from "../handlers/todoListHandler.js";
import todoInputArrNumberMiddleware from "../middleware/todoInputArrNumberMiddleware.js";
import todoInputMiddleware from "../middleware/todoInputMiddleware.js";

const router = new Router({
  prefix: "/api",
});

router.get("/todos", todoListHandler.getTodos);
router.post("/todos", todoInputMiddleware, todoListHandler.addNewTodo);
router.put("/todo/:id", todoListHandler.completeTodo);
router.put(
  "/todos",
  todoInputArrNumberMiddleware,
  todoListHandler.updateCompleteTodos
);
// router.put("/todos/undoComplete/:id", todoListHandler.undoCompleteTodo);
router.delete("/todo/:id", todoListHandler.deleteTodo);
router.put(
  "/todos/delete-all",
  todoInputArrNumberMiddleware,
  todoListHandler.deleteTodos
);

export default router;
