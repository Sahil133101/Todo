import Appnane from "./component/Appnane";
import Firstrow from './component/Firstrow';
// import Secondrow from './component/Secondrow';
// // import Third from './component/Third';
// import Todoitem from "./component/Todoitem";
import Todoitems from "./component/TodoItems";

export default function App(){
  const todoitems = [
    {
     product : "buy milk",
     date : "13/10/2023",
    },
    {
      product : "Go to college",
      date : "13/10/2023",
     },
     {
      product : "Go to School",
      date : "13/10/2023",
     },

  ];
  return <>
 <center className='TodoContainer'>
        <Appnane/>
       <Firstrow />
  <br />
  
  {/* <Secondrow />
<br/>
<Third /> */}
{/* <Secondrow />
<br/>
<Third /> */}
<Todoitems items={todoitems}></Todoitems>

</center>
    
  </>
}
