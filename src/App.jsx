
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'


function App() {
  
  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  const addToFive = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h1>React Core Concepts 2</h1>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>click me 2</button>

      <button onClick={() => {alert('Third clicked')}}>Third</button>
      
      {/* vejailla  */}      <button onClick={() => addToFive(5)}>add to five</button>
    </>
   )       
}

export default App
