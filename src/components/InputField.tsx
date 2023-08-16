import React from 'react'
import { useRef } from 'react';
import "./styles.css"; 

interface Props{
  todo: string|number;
  setTodo: React.Dispatch<React.SetStateAction<string | number>>
  handleAdd: (e:React.FormEvent) => void;
}

const InputField = ({todo, setTodo, handleAdd}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className='input' onSubmit = {
      (e) => {
      handleAdd(e);
      inputRef.current?.blur();
      }
    }>
      
        <input type ='input' 
        value = {todo}
        onChange={
          (e) => setTodo(e.target.value)
        }
        placeholder ="Enter task" className='input_box'/>
        <button className='input-submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField