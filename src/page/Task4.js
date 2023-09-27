import '../style/DefaultPage.css';
import '../style/task4/Task4.css';


function Task4() {
  
  // handles log in functionality
  const handleLogin = () => {
    // check if username field is empty
    
    // check if password field is empty
    
    // forward user input for validation 
    // and check with DB
    
    // log in if user inputs correct

    // empty input fields 
  }

  const handleRegister = () => {
    // check if username field is empty
    
    // check if password field is empty
    
    // check if password repeat field is empty
     
    // forward user input for valdiation and add to DB

    // empty all input fields if validation correct

    // empty password fields if validation failed

  }

  const validateCheckFailed = () => {

    // forward user input to api for validation

    // return true or false

  }

  const handleEmptyField = () =>{
    // checks for empty required fields

    // mark red if required fields are empty
    // and provide isEmpty error msg to user
    
    // ignore username fields

    // empty password fields 
    
  } 



    return (
      <div id='Page'>
        <div id='header'>
        <h1>TASK 4</h1>
      
        </div>
        <h1>User login</h1>
        <div id="task4Container">
          <div id="loginContainer">
            <div id="loginInputBox">
              <h1>Log in</h1>
              <text id="headerLogUser">Username</text>
              <input id="usernameInput"></input>
              <text id="headerLogPass">Password</text>
              <input id="passwordInput"></input>
              <button id="loginBTN">Login</button>
            </div>
          
        </div>

        <div id="registerContainer">
        <div id="registerInputBox">
          <h1>Register</h1>
          <text id="headerRegUser">Username</text>
          <input id="usernameRegInput"></input>
          <text id="headerRegPass">Password</text>
          <input id="passwordRegInput"></input>
          <text id="headerReg2Pass">Repeat Password</text>
          <input id="passwordReg2Input"></input>
          <button id="registerBTN">Register</button>

        </div>
        </div>

        </div>
       
      </div>

 
    );
  }
  
  export default Task4;