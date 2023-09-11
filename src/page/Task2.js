import '../style/DefaultPage.css';
import '../style/task2/Task2.css';
import '../style/task2/Todo.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';


function Task2() {

    const listFullStr = "The list is full!";

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
        setListFull(true);
        // error msg, todolist full
        setNewTodos(listFullStr);
        console.log("list was set to " + listFull);

      }
      

    };

    const inputRef = useRef(null);


    const [toDos, setTodos] = useState([]);
    const [newtoDos, setNewTodos] = useState("");
    const [listFull, setListFull] = useState(false);
    const [archive, setArchive] = useState([]);

    const handleInputChange = (e) => {
      setNewTodos(e.target.value);

      // removes red inputfield 
      setListFull(false);
      // removes error msg if list is full
      if(newtoDos === listFullStr){
        setNewTodos("");
      }
    };

    const handleCompleteTodo = (index) => {

      const completedElement = toDos[index];
      setArchive([...archive, completedElement]);
      handleDeleteTodo(index);
      console.log(archive[0]);

      setListFull(false);
      console.log("Todo was completed");
    };

    const handleDeleteTodo = (index) => {

      // delete element
      const updatedTodos = [...toDos]; 
      updatedTodos.splice(index, 1);
      setTodos(updatedTodos);
      setListFull(false);
      console.log("Todo was deleted");
    };


    const handleEnter = (e) => {


      if(e.key === "Enter"){
        e.preventDefault();
        handleAddTodo();
      }
    };
   
    const checkListSize = (e) => {
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
            <input 
            id='inputBar'
            onKeyDown={handleEnter} ref={inputRef} 
            type='text'
            value={newtoDos}
            onChange={handleInputChange} 
            autoComplete='off'
            style={{backgroundColor: listFull ? 'red' : 'initial'}}
            />
            <button id ='addTodoBtn'onClick={handleAddTodo}>Add</button>

            <div id='todoListBox'>
              <ul id='listContainer'>
                {toDos.map((todo, index) => 
                (<li id="list" key={index}>
                  {todo}
                <button id='checkTodo' 
                onClick={handleCompleteTodo} className='todoBtn'>
            <FontAwesomeIcon icon={faCheck} />
            </button>
            <button id='deleteTodo' onClick={handleDeleteTodo}
            className='todoBtn'>
            <FontAwesomeIcon icon={faXmark} />
            </button> </li>))}                
                
                </ul>
            

            </div>
          
            <button id ='archiveBtn'onClick={handleAddTodo}>Archive</button>

          </div>
          <div id='todoComplete'>
           <ul id='archiveContainer'>
                  {archive.map((completed,index) => 
                  (<li id = 'archiveElement' key={index}>
                    {completed}
                    </li>))}

           </ul>

          </div>
        </div>
      </div>
 
    );
  }
  
  export default Task2;