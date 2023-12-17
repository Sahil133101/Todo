import { useState } from "react";
import ButtonContainer from "./ButtonContanier";
import Dislplay from "./Display";

export default function App(){
  
    const [result, setResult] = useState("");
  
    const clickHandler = (value) => {
      if (value === "=") {
        
          setResult(eval(result).toString());
       
        
      } else if (value === "Clear") {
        setResult("");
      } 
      else if(value === "->"){
        setResult(result.slice(0,-1))
      }
      else {
        setResult(result.concat(value));
      }
    };

  const Button = ["9", "8" ]
  return (
    <>

    <Dislplay result={result} clickHandler={clickHandler}> </Dislplay>
    <ButtonContainer Item= {Button}></ButtonContainer>
    
    </>
  );
}