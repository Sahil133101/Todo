import { useState } from "react";

export default function Firstrow({onNewItem}) {

  const[todoName, setTodoName]= useState();

  const[dueDate, setDueDate]= useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
    
  }

  const handleDateonChange  = (event) =>{
    setDueDate(event.target.value);
  }

  const handleAddButtonClicked = () =>{
    onNewItem(todoName, dueDate);
    setTodoName(" ");
    setDueDate(" ");

  }
  return (
    <>
      <div className="row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here"  value={todoName} onChange={handleNameChange}/>
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateonChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}
