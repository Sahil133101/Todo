import Todoitem from "./Todoitem";
const  Todoitems = ({items}) => {
    return (
        <>
        {items.map((items) => (
            <Todoitem tododate={items.dueDate} todoproduct = {items.name}> 
            </Todoitem>
        ))}
        </>
    );
}
export default Todoitems;