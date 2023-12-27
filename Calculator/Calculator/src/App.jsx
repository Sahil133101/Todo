import "./App.css";
import Display from "./Display";
import Buton from "./Buton";
import { useState } from "react";
export default function App(){

  const[result, setresult] = useState("");

  const clickHandler = (value) => {
    if(value === "="){
      try{
        setresult(eval(result).toString());

      } catch(error){
        setresult("Error");
      }
    }
    else if (value === "clear"){
      setresult("");
    }
    else if(value === "->"){
      setresult(result.slice(0,-1))
    }
    else {
      setresult(result.concat(value));
    }
  };
  

 



  const Button = ["C", "DEL", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", " 3", " +","0", "." ,"=", "->"];

  return(
    <>

    <div  className= "Calculator">
     <Display  result = {result}> </Display>
       

        
        
        <Buton  item = {Button} clickHandler={clickHandler}></Buton>
        

        
        
        


    </div>
    
    </>
  )
}