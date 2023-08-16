import React from 'react'
import { Todo } from '../model'
import SingleTodo from './SingleTodo';
import "./styles.css";

type Props = {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const TodoList:React.FC<Props> = ({todos,setTodos}) => {
  const handleAccomplished = (id: number) =>{
    setTodos(todos.filter((todo) => todo.id !== id))
  };
  const filteredtodo = todos.filter((todo) => todo.isDone === false
  );
  const filteredAccomp = todos.filter((todo) => todo.isDone === true
  );
  return (
    <div className="container">
      
      <div className="todos">
      <div className="todo_heading">Todo Tasks</div>
      
      {filteredtodo.map(todo => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
))}
    </div>
    <div className="todos remove" >
      <div className="todo_heading">Accomplished Tasks</div>
      {filteredAccomp.map(todo => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
        
    </div>
      </div>
    
  )
}

export default TodoList