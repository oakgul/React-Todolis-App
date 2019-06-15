import React from 'react';

class TodoForm extends React.Component {

  constructor(){
    super();
    // addTask adlı fonksiyonu bind() et..
    this.addTask = this.addTask.bind(this);
  }
  
  addTask(e) {
    e.preventDefault();
    const inp = document.getElementById('todoInput');
    const val = inp.value;
    inp.value = '';
    this.props.addTask(val);
  }

  render() {
    return(
      <div>
        <div className='todo type1'>
          <form className='input-wrapper' onSubmit={this.addTask}>
            <input id='todoInput' className='add-todo' type='text' placeholder='Bir Görev Ekle' autoComplete='off'></input>
          </form>
        </div>
        <button type='button' className='add-btn' onClick={this.addTask} />
      </div>
    )
  }
}
export default TodoForm;