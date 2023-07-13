import '../style/DefaultPage.css';
import '../style/lv2/Lv2.css';
import '../style/lv2/Todo.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { number } from 'mathjs';

function Lv2() {
    
  
  
  return (
      <div id='Page'>
        <div id='header'>
          <h1>LEVEL 2</h1>
        </div>
        <text>Todo-list</text>
    
    
        <div id='lv2PageContainer'>
          <div id='todoBox'>
            <input id='inputBar' autoComplete='off'/>

            <div id='todoListBox'>
              <ul id='ul1'>
              {}
              </ul>

            </div>
          
            <button id='checkTodo' className='todoBtn'>
            <FontAwesomeIcon icon={faCheck} />
            </button>
            <button id='deleteTodo' className='todoBtn'>
            <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
          <div id='todoComplete'>

          </div>


        </div>
    
      </div>
 
    );
  }
  
  export default Lv2;