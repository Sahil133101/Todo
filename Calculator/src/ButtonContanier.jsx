import Button from "./Button.Jsx";

export default function ButtonContainer( {Item , clickHandler}){

    return (
        <>
        
  

        { 

        Item.map((xyz) => ( 
            < Button key = {xyz} ButtonContainer = {xyz}  onClick={() => clickHandler(xyz)}></Button>
    
            ))
            }
            
?            
        </>
    );
}