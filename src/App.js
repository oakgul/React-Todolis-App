import React from 'react';
import TodoList from './components/Todolist';
import TodoForm from './components/Todoform';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  
  constructor(){
    super();
    // Tasklar bu array içine kayıt oluyor.
    this.state = { myTasks : [{ text:'Projeyi Bitir', status:'passive'},
                              { text:'Issularla ilgilen', status:'passive'}] }
    // Fonksiyonların bind işlemi..
    this.addTask = this.addTask.bind(this);
    this.doneTask = this.doneTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  addTask(val) {
    let updatedList = this.state.myTasks;
    updatedList.push({text:val, status:'passive'});
    this.setState({ myTasks: updatedList });
  }

  // task tamamlandı
  doneTask(task_id){
    task_id = task_id.replace('task_','');
    let updatedList = this.state.myTasks;
    let newStatus = 'active';
    let currentStatus = updatedList[task_id].status;
    if (currentStatus === 'active') {
      newStatus = 'passive';
    }
    updatedList[task_id].status = newStatus;
    this.setState({ myTasks : updatedList })
  }

  // taskı kaldır
  removeTask(task_id){
    task_id = task_id.replace('task_','');
    let updatedList = this.state.myTasks;
    updatedList.splice(task_id,1);
    this.setState({ myTasks : updatedList })
  }

  render(){
    return(
      <div>
          <div className="content">
              <Header/>
              <TodoForm addTask = { this.addTask } />
              <TodoList myTasks = {this.state.myTasks}
                          doneTask = {this.doneTask}
                            removeTask = {this.removeTask}/>
              <Footer/>
          </div>
      </div>
    )
  }
}

export default App;
