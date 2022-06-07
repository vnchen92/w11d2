import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import { receiveTodos, receiveTodo, removeTodo } from './actions/todo_actions';
import Todos from './components/todos';

const textActions = () => {
      const newTodos = [{ id: 1, title:"apple", body:"appled", done:true }];
      console.log(window.store.getState()); // should return default state object
      window.store.dispatch(receiveTodo({ id: 3, title: "New Todo" }));
      console.log(window.store.getState()); // should include the newly added todo
      //window.store.dispatch(receiveTodos(newTodos));
      //console.log(window.store.getState()); // should return only the new todos
      window.store.dispatch(removeTodo({ id: 3, title: "New Todo" }))
      console.log(window.store.getState()); // should return only the new todos

}


document.addEventListener('DOMContentLoaded', () => {
      const store = configureStore();
      window.store = store;      
      textActions();
      ReactDOM.render(<Todos />, document.getElementById('root'));

});