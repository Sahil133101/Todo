import "./App.css";
import Display from "./Display";
import Buton from "./Buton";
import { useState } from "react";
export default function App(){

 



  const Button = ["C", "DEL", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", " 3", " +","0", "." ,"="];

  return(
    <>

    <div  className= "Calculator">
     <Display > </Display>
       

        
        
        <Buton item = {Button}></Buton>
        

        
        
        


    </div>
    
    </>
  )
}