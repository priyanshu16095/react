import "./App.css";
import { useState } from "react";

function BasicConcepts() {
  const name = <h2>Priyanshu</h2>;
  const age = 18;
  return (
    <div className="App">
      <PlayWithNum />
      <ShowHideText />
      <ShowInputValue />
      <IncreaseOnClick />
      <Names />
      <Sum />
      <PropsUser name="Ram" age={18}/>
      <User />
    </div>
  )
}

const User = () => {
  return(
    <div>
      <h1 className="name">Hello, my name is Priyanshu Gupta</h1>
      <h2>Age : 18</h2>
    </div>
  )
}
const PropsUser = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h2>{props.age}</h2>
    </div>
  )
}

const age = 20
age >= 18 ? console.log("Age is greater than 18") : console.log("Age is less than 18")

function Sum() {
  const sum = 12;
  if(sum > 10) {
    return <h2>Sum is greater is 10</h2>
  } else {
    return <h1>Sum is less than 10</h1>
  }
}

function Names() {
  const names = ["Priyanshu", "Dogesh", "Cheems"];
  return (
    <div>
    <h1>{names[1]}</h1>
    {names.map((name, key) => {
      return <h1 key={key}>{name}</h1>
    })}
    </div>
  )
}

function IncreaseOnClick() {
  const [num, setNum] = useState(0)
  const increaseNum = () => {
    setNum(num+1)
  }
  return(
    <div> 
      {num}<button onClick={increaseNum}>Increase</button> 
    </div>
  )
}

function ShowInputValue() {
  const[inputValue, setInputValue] = useState("")
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }
  return (
    <div>
      <input type="text" placeholder="Enter" onChange={handleInputChange}/>
      {inputValue}
    </div>
  )
}

function ShowHideText() {
  const [showText, setShowText] = useState(true)
  const toggleText = () => {
    setShowText(!showText)
  }
  return (
    <div>
      <button onClick={toggleText}>Show/Hide</button>
      {showText == true && <h1>My name is Priyanshu Gutpa</h1>}
    </div>
  )
}

function PlayWithNum() {
  const[initialValue, setInitialValue] = useState(0)
  const increaseValue = () => {
    setInitialValue(initialValue + 1);
  }
  const resetValue = () => {
    setInitialValue(0);
  }
  const decreaseValue = () => {
    setInitialValue(initialValue - 1);
  }
  return (
    <div>
      {initialValue}
      <button onClick={increaseValue}>Increase</button>
      <button onClick={resetValue}>Set to Zero</button>
      <button onClick={decreaseValue}>Decrease</button>
    </div>
  )
}

export default BasicConcepts
