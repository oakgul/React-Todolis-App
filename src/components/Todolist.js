import React from 'react';

class TodoList extends React.Component {  

  constructor(){
        super();
        this.state = {todoFilter:'All'};
  }

  // Bind işlemini arrow func ile yapıyorum..
  doneTask = (e) => {
    this.props.doneTask(e.target.parentNode.id);
  }

  removeTask = (e) => {
    this.props.removeTask(e.target.parentNode.id);
  }

  todoListFilter = (param) => {
    // aşağıda function yazmamızın sebebi asenkron çalışması için
    this.setState({ todoFilter:param }, function(){
      console.log('State Değişti');
    });
    const activeBtn = document.getElementById('filterBtn' + param);
    // active olan butonu başka bir butona tıklandığında active olmaktan çıkar
    document.getElementById('filterBtnAll').classList.remove('active');
    document.getElementById('filterBtnActive').classList.remove('active');
    document.getElementById('filterBtnCompleted').classList.remove('active');
    activeBtn.classList.add('active');
  }

  render() {
    let items_left = 0;
    const items = this.props.myTasks.map((elem, i) => {
      if(elem.status === 'passive'){
        items_left ++;
      }
      
      if(this.state.todoFilter === 'All' || (this.state.todoFilter === 'Active' && elem.status === 'passive') ||
        (this.state.todoFilter === 'Completed' && elem.status === 'active')) {
          let task_id = 'task_'+i;  
          
    
      return(
        <li key={i} id={task_id} className={elem.status}>
          <span className='id'>{ i+1 }</span>
          <span className='title'>{ elem.text }</span>
          <span className='type' onClick={ this.doneTask } />
          <span className='delete' onClick={ this.removeTask } />
        </li>
      )
        }

      
    });
    return(
      <div className='todo-list'>
        <ul>
          { items }
        </ul>
        <div className='todo-filter'>
          <div className='left'>
            <span>{ items_left } items left</span>
          </div>
          
          <div className='right' id='listChanger'>
            <ul>
              <li id='filterBtnAll' className='active'><span onClick= {() => this.todoListFilter('All')}>All</span></li>
              <li id='filterBtnActive'><span onClick= {() => this.todoListFilter('Active')}>Active</span></li>
              <li id='filterBtnCompleted'><span onClick= {() => this.todoListFilter('Completed')}>Completed</span></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default TodoList;