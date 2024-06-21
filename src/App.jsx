import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [container, setContainer] = useState([
    {id: 1, cards: ['Card1', 'Card2']},
    {id: 2, cards: ['Card3', 'Card4']},
    {id: 3, cards: ['Card5', 'Card6']},
  ]);

  const moveCards = (main, next)=>{
    const updateBox = [...container];
    const card = updateBox[main].cards.pop();
    updateBox[next].cards.push(card);
    setContainer(updateBox);
  }
  return (
    <>
      <div className='flex justify-center items-center gap-x-4 py-10'>
        
          {
            container.map((item, index) => (
              <div className='border p-4'key={index}>
              
                {item.cards.map((card)=>{
                  return <button className='border p-3 mb-3 flex flex-col cursor-pointer' 
                  onClick={() =>{
                    moveCards(index, (index + 1) % container.length)
                  }}
                  >{card}</button>
                })}
              </div>
              
            ))
          }
      </div>
    </>
  )
}

export default App
