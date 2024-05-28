import {useState} from 'react'
import './App.css'
import {Modal} from './Modal';
import {Form} from './Form';

function App() {
    const [isBlack, setIsBlack] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [homeworks, setHomeworks] = useState(["e.자료구조", "d.수학", "c.확률과통계", "b.선형대수", "a.물리학"])

    const sort = () => {
        setHomeworks([...homeworks.sort()])
    }

    const addHomework = (homework: string) => {
        setHomeworks((prev) => [...prev, homework])
    }

    const removeByIndex = (index: number) => {
        setHomeworks((prev) => prev.filter((_, i) => i !== index))
    }

    return (
        <div>
            <div>
                <h1 className={isBlack ? 'black' : 'white'}>안녕하세요.</h1>
            </div>

            <button onClick={() => setIsBlack((prev) => !prev)}>반전시키기</button>
            {homeworks.map((homework, index) => <div key={homework}>{homework}
                <button onClick={() => {
                    setIsModalOpen(true)
                    setSelectedIndex(index)
                }}>open
                </button>
                <button onClick={() => removeByIndex(index)}>remove</button>
            </div>)}
            <button onClick={sort}>정렬</button>

            {isModalOpen && <Modal title={homeworks[selectedIndex]}/>}
            <Form addHomework={addHomework}/>
        </div>
    )
}

export default App;
