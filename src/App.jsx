import { useState } from 'react'
import './App.css'

import { SimonButton } from  "./components/SimonButton.jsx"


function App() {
  const [board, setBoard] = useState(Array(4).fill(null))
  const [sequence, setSequence] = useState([0,  1, 2, 3])
  const colors =  ['bg-red-300', 'bg-green-300', 'bg-blue-300', 'bg-yellow-300']
  const pressColors = ['bg-red-900', 'bg-green-900', 'bg-blue-900', 'bg-yellow-900']

  const runSequence = () =>  {
    sequence.forEach(elem => {
      
    });
  }

  return (
    <main className='flex flex-col'>
      <h1 className='text-tl mb-4'>
        Simón Dice
      </h1>
      <section className='grid grid-cols-2 gap-5'>
        {
          board.map((_, index) => {
            return ( 
              <SimonButton key={index} index={index} color={colors[index]}/>
            )
          })
        }
      </section>
      <button onClick={runSequence}>Run Sequence</button>
      
    </main>
  )
}

export default App
