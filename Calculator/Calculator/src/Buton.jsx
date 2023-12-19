import Buttton from "./Buttton"
export default function Buton ({item } ){
    return (
        
             <div className="ButtonContainer"> 

             {
             item.map((xyz) =>   (
             <Buttton key  = {xyz} ButTon = {xyz}>  </Buttton> ))  }  

             </div>

        
        
        
    )
}