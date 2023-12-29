import Todoitem from "./Todoitem";
const  Todoitems = ({items, onDeleteClick}) => {
    return (
        <>
        {items.map((items) => (
            <Todoitem tododate={items.dueDate} todoproduct = {items.name}
            onDeleteClick={onDeleteClick}> 
            </Todoitem>
        ))}
        </>
    );
}
export default Todoitems;