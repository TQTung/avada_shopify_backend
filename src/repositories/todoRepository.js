import autoIncreasingId from "../helpers/autoIncreasing.js";
import { getDataFromDb, saveDataIntoDb } from "../helpers/getAndSaveData.js";

const allDatas = await getDataFromDb();

const getTodos = () => {
  return allDatas;
};

const addNewTodo = (newTodo) => {
  const increasingId = autoIncreasingId(allDatas.map((data) => data.id));
  const newListsData = [...allDatas, { ...newTodo, id: increasingId }];

  saveDataIntoDb(newListsData);

  return newListsData;
};

const updateStatusComplete = (id) => {
  const newListWhenUpdated = allDatas.map((data) => {
    if (data.id === id) {
      return { ...data, isCompleted: true };
    }
    return data;
  });
  saveDataIntoDb(newListWhenUpdated);

  return newListWhenUpdated;
};

const undoStatusComplete = (id) => {
  const newListWhenUpdated = allDatas.map((data) => {
    if (data.id === id) {
      return { ...data, isCompleted: false };
    }
    return data;
  });
  saveDataIntoDb(newListWhenUpdated);

  return newListWhenUpdated;
};

const removeTodo = (id) => {
  const newListThenDelete = allDatas.filter((todo) => todo.id !== id);

  saveDataIntoDb(newListThenDelete);
  return newListThenDelete;
};

const updateCompleteTodosSelected = (arrayIds) => {
  const listDatasThenUpdated = allDatas.map((todo) => {
    if (arrayIds.includes(todo.id)) {
      return {
        ...todo,
        isCompleted: true,
      };
    }
    return todo;
  });

  saveDataIntoDb(listDatasThenUpdated);
  return listDatasThenUpdated;
};

const deleteTodosSelected = (arrayIds) => {
  const listDatasThenDeleted = allDatas.filter(
    (todo) => !arrayIds.includes(todo.id)
  );
  saveDataIntoDb(listDatasThenDeleted);
  return listDatasThenDeleted;
};

export default {
  getTodos,
  addNewTodo,
  updateStatusComplete,
  undoStatusComplete,
  removeTodo,
  updateCompleteTodosSelected,
  deleteTodosSelected,
};
