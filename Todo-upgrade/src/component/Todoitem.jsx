import styles from './Todoitem.module.css';
export default function Todoitem ({todoName , todoDate, onDeleteClick }){
   
    return (
        <>
        <div class ="row">
  
  <div class='col-6'>
    <h3 className={styles['Todoitem']}> {todoName}</h3>
  </div>
  
  <div class='col-4'>
    <h3 className={styles['Todoitem']}>{todoDate}</h3>
  </div>
  <div class ='col-2'>
  <button type="button" class="btn btn-danger" className={styles['Todo']}
  onClick={()=> onDeleteClick(todoName)}
  >Delete</button>

  </div>
</div>
        </>
    );
}