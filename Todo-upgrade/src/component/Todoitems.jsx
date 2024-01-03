// Todoitems.jsx
import Todoitem from "./Todoitem";

const Todoitems = ({ items, onDeleteClick }) => {
  return (
    <>
      {items.map((item) => (
        <Todoitem
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </>
  );
};

export default Todoitems;
