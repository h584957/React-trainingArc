import '../style/DefaultPage.css';
import '../style/task2/Task2.css';
import '../style/task2/Todo.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';


function Task2() {
    const handleAddTodo = () => {
      console.log("Add btn clicked");
      if(checkListSize()<12) {
        if(newtoDos.trim() !== ""){
          setTodos([...toDos, newtoDos]);     
          setNewTodos("");
              
          inputRef.current.focus();
        }
      } else {

      console.log("listsize 12 or more")
        // make input field red

        // add text in input field "too many todos"
        setNewTodos("The Todo list is full!")

      }
      

    };

    const inputRef = useRef(null);


    const [toDos, setTodos] = useState([]);
    const [newtoDos, setNewTodos] = useState("");
    const handleInputChange = (e) => {
      console.log("entered handleIn");
      setNewTodos(e.target.value);
    };

    const handleCompleteTodo = (e) => {

      console.log("Todo was completed");
    };

    const handleDeleteTodo = (e) => {

      
      console.log("Todo was deleted");
    };


    const handleEnter = (e) => {


      if(e.key === "Enter"){
        e.preventDefault();
        handleAddTodo();
      }
    };
   
    const checkListSize = (e) => {
      console.log("list size : " + toDos.length)
      return toDos.length
    }

  return (
      <div id='Page'>
        <div id='header'>
          <h1>TASK 2</h1>
        </div>
        <text>Todo-list</text>
    
    
        <div id='task2PageContainer'>
          <div id='todoBox'>
            <input id='inputBar' onKeyDown={handleEnter} ref={inputRef} type='text' value={newtoDos} onChange={handleInputChange} autoComplete='off'/>
            <button id ='addTodoBtn'onClick={handleAddTodo}>Add</button>

            <div id='todoListBox'>
              <ul id='listContainer'>
                {toDos.map((todo, index) => (<li id="list" key={index}>{todo}<button id='checkTodo' onClick={handleCompleteTodo} className='todoBtn'>
            <FontAwesomeIcon icon={faCheck} />
            </button>
            <button id='deleteTodo' onClick={handleDeleteTodo} className='todoBtn'>
            <FontAwesomeIcon icon={faXmark} />
            </button> </li>))}                
                
                </ul>
            

            </div>
          
            <button id ='archiveBtn'onClick={handleAddTodo}>Archive</button>

          </div>
          <div id='todoComplete'>

          </div>


        </div>
    
      </div>
 
    );
  }
  
  export default Task2;