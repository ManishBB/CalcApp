import './App.css';
import {useState} from "react";

function App() {
  
  let [oldExpression, setOldExpression] = useState("")
  let [expression, setExpression] = useState("");

  let numerics = new Set("0123456789");
  let operators = new Set("+-*/");

  let handleKeyUp = function(event){
    console.log(event.key);
    if(event.key === "Backspace"){
      setExpression(expression.slice(0,-1));
    }else if(numerics.has(event.key) || operators.has(event.key)){
      setExpression(expression + event.key);
    }else if(event.key === "Enter"){
      let evaluate = eval(expression);
      setOldExpression(expression);
      setExpression(String(evaluate));
    }
  }
  
  return (
    <div className="App" tabIndex={0} onKeyUp= {handleKeyUp} style={{
      width : "100vw",
      height : "100vh",
      background : "#999999",
      display : "flex",
      flexDirection : "column",
      justifyContent : "center",
      alignItems : "center"
    }}>

      <div style={{
        width : "400px",
        height : "130px",
        background : "#ffffff",
        display : "flex",
        flexDirection : "column",
        alignItems : "flex-end",
        justifyContent : "center",
        padding : "20px",
        borderRadius : "10px"
      }}>

        <h6>{oldExpression}</h6>
        <h1>{expression}</h1>

      </div>
      
    </div>
  );
}

export default App;
