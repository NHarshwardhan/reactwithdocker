import React, { useState } from 'react'

export default function Todo() {
   const [newTodo,setNewTodo] = useState('')

   const [todoList , setTodoList] = useState([
           {action:'Book Ticket', done:false},
           {action:'Meeting at 6pm', done:true},
           {action:'Print Invoice Ticket', done:false},
   ]) 

   const addTodo = ()=>{
       
        setTodoList([...todoList,{action:newTodo,done:false}])

   }
   const setToggleTodo = ()=>{
     
   }
  return (
    <div>
        <p> 
             <input type='text' onChange={(event)=>setNewTodo(event.target.value)}/>
             <button onClick={addTodo}>Add</button>
        </p>
         <table border={1}>
            <thead>
                 <tr>
                     <th>Action</th>
                     <th>Completed</th>
                     
                 </tr>
            </thead>
            <tbody>
                {
                    todoList.map((todo,index)=>(
                        <tr key={index}>
                            <td>{todo.action}</td>
                            <td>
                                <input type='checkbox' checked={todo.done} onChange={setToggleTodo}/>
                            </td>
                            
                        </tr>
                    ))
                }
            </tbody>
        </table>   
    </div>
  )
}
