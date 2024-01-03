import { useState } from "react";
import Appnane from "./component/Appnane";
import Firstrow from './component/Firstrow';

import WelcomeMessage from "./component/WelcomeMessage";

import Todoitems from "./component/Todoitems";


export default function App(){
  

 



  
  const [todoItems ,setTodoItems]= useState([]);
   
  const handleNewItem = (itemName , itemDueDate) => {
 //console.log(`new item Added: ${itemName} Date: ${itemDueDate}`);
  
const newTodoItem = [...todoItems,{name : itemName,
dueDate : itemDueDate,}]
setTodoItems(newTodoItem);
}
  
const handleDelete = (xyz) => {
  
const newItems = todoItems.filter(item => item.name !== xyz);
  console.log(`Item delete :${todoItemName}`)
setTodoItems(newItems);
};

  return <>
 <center className='TodoContainer'>
        <Appnane />
        {todoItems.length === 0 && <WelcomeMessage />}
       <Firstrow onNewItem = {handleNewItem} />
  <br />
  
 
<Todoitems items={todoItems}> onDeleteclick= {handleDelete}</Todoitems>

</center>
    
  </>
}
