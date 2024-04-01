import { useState } from 'react'
import './App.css'

function App() {
  const [isBlack, setIsBlack] = useState(false);

  return (
    <div>
      <div>
        <h1 className={isBlack ? 'black': 'white'}>안녕하세요.</h1>
      </div>
       
       <button onClick={() => setIsBlack((prev) => !prev)}>반전시키기</button>
    </div>
  )
}

export default App
