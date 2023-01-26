import {useState} from 'react'
function Calculator() { 
const[count,setCount]=useState('');
const handle =(event)=>{
    setCount(count.concat(event.target.name)); 
}
const clear =()=>{
setCount("");
}
const operation =(event)=>{
    event.preventDefault();
    let result = eval(count);
    setCount(result);
}  
return (
    <div className="main">
        <h1 style={{textAlign:'center',color:"red"}}>CALCULATOR</h1>
      <div className="inputfield">
        {/* <label>Output</label> */}
        <input type={Text} value={count}/>
      </div>
      <div className="row1">
        <div className="row1-1">
          <button onClick={handle} name="9" >9</button>
        </div>
        <div className="row1-1">
          <button onClick={handle} name="8">8</button>
        </div>
        <div className="row1-1">
          <button onClick={handle} name="7">7</button>
        </div>
        <div className="row1-1">
          <button onClick={handle} name="+">+</button>
        </div>
      </div>
      <div className="row1">
        <div className="row1-1">
          <button onClick={handle} name="6">6</button>
        </div>
        <div className="row1-1">
          <button onClick={handle} name="5">5</button>
        </div>
        <div className="row1-1">
          <button  onClick={handle} name="4">4</button>
        </div>
        <div className="row1-1">
          <button onClick={handle} name="-">-</button>
        </div>
      </div>
      <div className="row1">
        <div className="row1-1">
          <button onClick={handle} name="3">3</button>
        </div>
        <div className="row1-1">
          <button onClick={handle} name="2">2</button>
        </div>
        <div className="row1-1">
          <button onClick={handle} name="1">1</button>
        </div>
        <div className="row1-1">
          <button onClick={handle} name="*">*</button>
        </div>
      </div>
      <div className="row1">
        <div className="row1-1">
          <button onClick={operation} name="=">=</button>
        </div>
        <div className="row1-1">
          <button onClick={handle} name=".">.</button>
        </div>
        <div className="row1-1">
          <button onClick={clear} name="Clear">Clear</button>
        </div>
        <div className="row1-1">
          <button onClick={handle} name="/">/</button>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
