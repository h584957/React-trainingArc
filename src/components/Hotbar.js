import '../style/Hotbar.css'
import {useLocation, useNavigate} from 'react-router-dom';

function Hotbar(){
    const navitgate = useNavigate();
    function homeClick(){
        navitgate('/home');
    }
    function task1Click(){
        
        navitgate('/task1');
        
    }
    function task2Click(){
        
        navitgate('/task2');

    }
    function task3Click(){

        navitgate('/task3');
    }
    function task4Click(){

        navitgate('/task4');
    }
    
    const location = useLocation();

    return(
    <div className="Hotbar">
        <button className={`btn ${location.pathname === '/home' ? 'active' :''} || ${location.pathname === '/' ? 'active' :''}`} id='home' onClick={homeClick}>Home</button>
        <button className={`btn ${location.pathname === '/task1' ? 'active' :''}`} id="task1"onClick={task1Click}>Task 1</button>
        <button className={`btn ${location.pathname === '/task2' ? 'active' :''}`} id="task2"onClick={task2Click}>Task 2</button>
        <button className={`btn ${location.pathname === '/task3' ? 'active' :''}`} id="task3"onClick={task3Click}>Task 3</button>
        <button className={`btn ${location.pathname === '/task4' ? 'active' :''}`} id="task4"onClick={task4Click}>Task 4</button>
  
    </div>
        
    );
} export default Hotbar;