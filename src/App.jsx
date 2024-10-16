import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Rectangle  = ({ children, index}) => {
  return (
  <div className='w-32 h-32 border-solid border-2 border-stone-50 rounded-md place-items-center grid grid-cols-1'>
      {index}
  </div>
  )
}


function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  return (
    <main className='flex flex-col'>
      <h1 className='text-tl mb-4'>
        Simón Dice
      </h1>
      <section className='grid grid-cols-3 gap-5'>
        {
          board.map((_, index) => {
            return ( 
              <Rectangle key={index} index={index}>
                {index}
              </Rectangle>
            )
          })
        }
      </section>
      
    </main>
  )
}

export default App
