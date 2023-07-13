import '../style/Hotbar.css'
import {useLocation, useNavigate} from 'react-router-dom';

function Hotbar(){
    const navitgate = useNavigate();
    function homeClick(){
        navitgate('/home');
    }
    function lv1Click(){
        
        navitgate('/lv1');
        
    }
    function lv2Click(){
        
        navitgate('/lv2');

    }
    function lv3Click(){

        navitgate('/lv3');
    }
    function lv4Click(){

        navitgate('/lv4');
    }
    
    const location = useLocation();

    return(
    <div className="Hotbar">
        <button className={`btn ${location.pathname === '/home' ? 'active' :''} || ${location.pathname === '/' ? 'active' :''}`} id='home' onClick={homeClick}>Home</button>
        <button className={`btn ${location.pathname === '/lv1' ? 'active' :''}`} id="lv1"onClick={lv1Click}>Level 1</button>
        <button className={`btn ${location.pathname === '/lv2' ? 'active' :''}`} id="lv2"onClick={lv2Click}>Level 2</button>
        <button className={`btn ${location.pathname === '/lv3' ? 'active' :''}`} id="lv3"onClick={lv3Click}>Level 3</button>
        <button className={`btn ${location.pathname === '/lv4' ? 'active' :''}`} id="lv4"onClick={lv4Click}>Level 4</button>
  
    </div>
        
    );
} export default Hotbar;