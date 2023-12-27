import Buttton from "./Buttton"
export default function Buton ({item , clickHandler} ){
    return (
        
             <div className="ButtonContainer"> 

             {
             item.map((xyz) =>   (
             <Buttton key  = {xyz} onClick = {()=>clickHandler(xyz)} ButTon = {xyz}>  </Buttton> ))  }  

             </div>

        
        
        
    )
}