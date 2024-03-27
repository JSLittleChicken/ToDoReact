import React, {useState} from "react";

function ToDoForm({addTask}) {

  const [taskName, setTaskName] = useState('');
  const [emptyWarning, setEmptyWarning] = useState('')
  
  function handleSubmit(ev) {
    ev.preventDefault();
    if (!taskName) {
      setEmptyWarning('empty');  
      return
    }
    addTask(taskName);
    setTaskName('');
  }
  
  return (
    <form onSubmit={handleSubmit} className={emptyWarning}>
      <button>+</button>
      <input type="text"
             value={taskName}
             onChange={ev => {setTaskName(ev.target.value); setEmptyWarning('')}}
             placeholder={!emptyWarning ? "Your next task..." : "Please enter something"}
      />      
    </form>
  );
}
export default ToDoForm;