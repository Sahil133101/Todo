import styles from './Todoitem.module.css';
export default function Todoitem ({todoproduct , tododate}){
   
    return (
        <>
        <div class ="row">
  
  <div class='col-6'>
    <h3 className={styles['Todoitem']}> {todoproduct}</h3>
  </div>
  
  <div class='col-4'>
    <h3 className={styles['Todoitem']}>{tododate}</h3>
  </div>
  <div class ='col-2'>
  <button type="button" class="btn btn-danger" className={styles['Todo']}>Delete</button>

  </div>
</div>
        </>
    );
}