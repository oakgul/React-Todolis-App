import React from 'react';
import TodoList from './components/Todolist';
import TodoForm from './components/Todoform';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends React.Component {
  
  constructor(){
    super();
    // Tasklar bu array içine kayıt oluyor.
    // eslint-disable-next-line 
    this.state = { myTasks : [{ text:'Projeyi Bitir', status:'passive'},
                              { text:'Issularla ilgilen', status:'passive'}] } 
    this.addTask = this.addTask.bind(this);
  }

  addTask(val) {
    let updateList = this.state.myTasks;
    updateList.push({text:val, status:'passive'});
    this.setState({ myTasks: updateList });
  }

  render(){
    return(
      <div>
          <div className="content">
              <Header/>
              <TodoForm addTask = { this.addTask } />
              <TodoList myTasks = {this.state.myTasks} />
              <Footer/>
          </div>
      </div>
    )
  }
}

export default App;
