import styles from "./List.module.css";

import { useState } from "react";

const List = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setTaskList((prev) => {
      return [...prev, task];
    });

    setTask("");
  };

  return (
    <div>
      <h2>Tarefas</h2>
      <p>Adicione novas tarefas</p>
      <form onSubmit={handleSubmit} className={styles.form_task}>
        <input
          type="text"
          required
          onChange={(event) => setTask(event.target.value)}
          value={task}
        />
        <button type="submit">Adicionar tarefa</button>
      </form>
      <div>
        {taskList && taskList.map((task) => <p key={Math.random()}>{task}</p>)}
      </div>
    </div>
  );
};

export default List;
