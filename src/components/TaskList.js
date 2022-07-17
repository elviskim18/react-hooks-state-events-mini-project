import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasksInfo}) {
  const [list, setList] = useState(tasksInfo);
  
  function handleDelete(id){
    const filteredList = list.filter((item, index) => {
      return index !== id;
    });
    setList(filteredList)
  }

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {list.map((task, index) => {
       return <Task key={index} id={index} task={task} onDelete={handleDelete} />
      })}
    </div>
  );
}

export default TaskList;
