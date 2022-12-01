import { useState, useEffect, createContext } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  const [taskid, setTaskid] = useState(1);

  const createTask = (task) => {
    setTaskid(taskid + 1);
    console.log(task);
    setTasks([
      ...tasks,
      {
        id: taskid,
        title: task.title,
        description: task.description,
      },
    ]);
  };

  const deleteTask = (id) => {
    console.log(`eliminado tarea ${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    setTasks(data);
    setTaskid(data.length);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
