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

  const handleAddButtonClicked = (event) =>{
    event.preventDefault();
    console.log(event);
    onNewItem(todoName, dueDate);
    setTodoName(" ");
    setDueDate(" ");

  }
  return (
    <>
      <form div className="row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here"  value={todoName} onChange={handleNameChange}/>
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateonChange} />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn-success"
           
          >
            Add
          </button>
        </div>
      
      </form>
    </>
  );
}
