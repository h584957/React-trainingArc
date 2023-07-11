import '../style/DefaultPage.css';
import '../style/Calculator.css';
import '../style/Lv1.css';
import { evaluate } from 'mathjs';



function Lv1() {
  const calculate = (str) => {
    try {
      return evaluate(str);
 
  
    } catch (e) {
      return "Invalid experssion!"
    }
    
  };




const equalsClick = () => {
  let input = getInputBarValue();
  console.log("input : "+input);
  
  let answer = calculate(input);
  changeInputBarValue(answer);
  console.log("answer : "+answer);
};

function getInputBarValue(){
  let inputBar = document.getElementById("inputBar");
  let value = inputBar.value;
  console.log(value);

  return value; 
}

const changeInputBarValue = (str) => {
  let inputBar = document.getElementById("inputBar");
  inputBar.value = str;
};

const handleClick = (e) => {
  console.log(e.target.innerText);
  let newValue = e.target.innerText;
  let inputBar = document.getElementById("inputBar");
  inputBar.value = inputBar.value + newValue;
};

const eraseClick = () => {
  let inputBar = document.getElementById("inputBar");
  inputBar.value = inputBar.value.substr(0,inputBar.value.length-1);
};

const eraseAllClick = () => {
  let inputBar = document.getElementById("inputBar");
  inputBar.value=null;
};
const handleEnter=(e)=>{

  if(e.key === 'Enter'){
   equalsClick();
  }
}
    return (
    
      <div id='Page'>
        <div id='header'>
        <h1>LEVEL 1</h1>
        </div>
        <div id='lv1PageContainer'>
          <text id ='calcText'>Calculator</text>
       
       
          <div className='CalculatorContainer' onKeyDown={handleEnter}>

              <div id="inputContainer">
                <input id='inputBar'></input>
              </div>


              <div id='numpadContainer'>

                <div id='numpad'>
                <button className='mathbuttons' onClick={eraseAllClick} id="eraseAll">CE</button>
                <button className='mathbuttons' onClick={eraseClick}id="erase">Delete</button>
                <button className='mathbuttons' onClick={handleClick} id="num1">1</button>
                <button className='mathbuttons' onClick={handleClick} id="num2">2</button>
                <button className='mathbuttons' onClick={handleClick} id="num3">3</button>
                <button className='mathbuttons' onClick={handleClick} id="num4">4</button>
                <button className='mathbuttons' onClick={handleClick} id="num5">5</button>
                <button className='mathbuttons' onClick={handleClick} id="num6">6</button>
                <button className='mathbuttons' onClick={handleClick} id="num7">7</button>
                <button className='mathbuttons' onClick={handleClick} id="num8">8</button>
                <button className='mathbuttons' onClick={handleClick} id="num9">9</button>
                <button className='mathbuttons' onClick={handleClick} id="num0">0</button>
                </div>  

              </div>

              <div id='mathbuttonContainer'>
              
                <div id="mathops">
                  <button className='mathbuttons' onClick={handleClick} id="plussBtn">+</button>
                  <button className='mathbuttons' onClick={handleClick} id="minusBtn">-</button>
                  <button className='mathbuttons' onClick={handleClick} id="multiplyBtn">*</button>
                  <button className='mathbuttons' onClick={handleClick} id="dividBtn">/</button>
                </div>
                <div id="equalOp">
                  <button className='mathbuttons' onClick={equalsClick} id="equalsBtn">=</button>
                </div>
            </div>







          </div>
        </div>
       
       
       
       
       
      </div>
 
    );
  }
  
  export default Lv1;