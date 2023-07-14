import '../style/DefaultPage.css';
import '../style/lv2/Lv2.css';
import '../style/lv2/Todo.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

function Lv2() {
    const handleAddTodo = () => {
      
        if(newtoDos.trim() !== ""){
            setTodos([...toDos, newtoDos]);     
            setNewTodos("");
            
            inputRef.current.focus();

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
   
  return (
      <div id='Page'>
        <div id='header'>
          <h1>LEVEL 2</h1>
        </div>
        <text>Todo-list</text>
    
    
        <div id='lv2PageContainer'>
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
  
  export default Lv2;