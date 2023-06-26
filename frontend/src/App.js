import './App.css';
// import { useState } from 'react';


function App() {
var isRegestered = false;
   
  return (
    <div className="App">
  <h1>Hello</h1>
  <div className = "register">
  enter your name: <input type = "text"></input> <br/>
  enter your email: <input type = "text"></input>  <br/>
  enter your password :<input type = "password"></input>  <br/>
  re-enter your password: <input type = "text"></input>
  </div> 
    </div>
  );
}

export default App;

// var date =new Date().toLocaleTimeString();
// const [count , setCount] = useState(0);
// const[time, setTime] =useState(date);

//  setInterval(getTime, 1);

// function getTime(){
// setCount( count+ 1);
// setTime(new Date().toLocaleTimeString());

// var isRegestered = false;
// (isRegestered) ? <h1>true</h1>: <h1>false</h1>

// }

{/* <h1>{time}</h1>
<h1>{count}</h1>
<button onClick={getTime} >Get Current time and count</button> */}