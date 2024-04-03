import { useState } from 'react'
import './App.css'

function App() {
  const [isBlack, setIsBlack] = useState(false);
  const [homeworks, setHomeworks] = useState(["e.자료구조", "d.수학", "c.확률과통계", "b.선형대수", "a.물리학"])

  const sort = () => {
    setHomeworks([...homeworks.sort()])
  }

  return (
    <div>
      <div>
        <h1 className={isBlack ? 'black': 'white'}>안녕하세요.</h1>
      </div>
       
      <button onClick={() => setIsBlack((prev) => !prev)}>반전시키기</button>
      {homeworks.map((homework) => <div key={homework}>{homework}</div>)}
      <button onClick={sort}>정렬</button>

    </div>
  )
}

export default App
