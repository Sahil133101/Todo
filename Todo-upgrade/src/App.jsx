import { useState } from "react";
import Appnane from "./component/Appnane";
import Firstrow from './component/Firstrow';

import Todoitems from "./component/TodoItems";


export default function App(){
  const initialTodoitems = [
    {
     name : "buy milk",
     dueDate : "13/10/2023",
    }
    
  ];

 



  
  const [todoItems ,setTodoItems]= useState(initialTodoitems);
   
  const handleNewItem = (itemName , itemDueDate) => {
 //console.log(`new item Added: ${itemName} Date: ${itemDueDate}`);
  
const newTodoItem = [...todoItems,{name : itemName,
dueDate : itemDueDate,}]
setTodoItems(newTodoItem);
}
  
const handleDelete = (xyz) => {
  const newItem = todoItems.filter(item => item.name !== todoItemName);
};
  return <>
 <center className='TodoContainer'>
        <Appnane />
       <Firstrow onNewItem = {handleNewItem} />
  <br />
  
 
<Todoitems items={todoItems}> onDeleteclick= {handleDelete}</Todoitems>

</center>
    
  </>
}
