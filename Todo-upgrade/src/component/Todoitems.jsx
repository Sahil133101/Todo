import Todoitem from "./Todoitem";
const  Todoitems = ({items}) => {
    return (
        <>
        {items.map((items) => (
            <Todoitem tododate={items.date} todoproduct = {items.product}> 
            </Todoitem>
        ))}
        </>
    );
}
export default Todoitems;