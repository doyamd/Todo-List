import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete, } from "react-icons/ai";
import {IoMdDoneAll} from "react-icons/io"
import "./styles.css"
type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo,todos,setTodos}:Props) => {
  

  const [edit, setedit] = useState<boolean>(false);
  const [editable, seteditable] = useState<string|number>(todo.todo);
  const handleDone = (id: number) =>{
    setTodos(todos.map((todo) => todo.id === id? {
      ...todo, isDone:!todo.isDone
    }: todo));
  };

  const handleDelete = (id: number) =>{
    setTodos(todos.filter((todo) => todo.id !== id))
  };
  const handleEdit = (e: React.FormEvent, id:number) =>{
    e.preventDefault();

    setTodos(todos.map((todo) => todo.id === id ? {
      ...todo, todo: editable
    }: todo ))
    setedit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit])
  
  return (
    <form className="todos_single" onSubmit ={(e)=> handleEdit(e,todo.id)}>
      
        {edit ? (
            <input value = {editable} onChange = {(e) => seteditable(e.target.value)} className ='todos_single_edit'/>
          ) :
          (
            todo.isDone ? (
              <s className='todos_singel_text'>{todo.todo}</s>
             ) : (
              <span className='todos_singel_text'>{todo.todo}</span>
            )
          )
        }
        
        <div>
            <span className="icons" onClick = {() =>{
              if(!edit && !todo.isDone)
                setedit(!edit)
              }
            }>
                <AiFillEdit/>
            </span>
            <span className="icons"onClick = {() => handleDelete(todo.id)}>
                <AiFillDelete/>
            </span>
            <span className="icons" onClick = {() => handleDone(todo.id)}>
                <IoMdDoneAll/>
            </span>
        </div>
    </form>
  )
}

export default SingleTodo