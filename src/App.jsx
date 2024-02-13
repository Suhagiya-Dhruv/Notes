import { useState } from 'react'
import './App.css'
import TestingCount from './testingCount'
import { useDispatch } from 'react-redux'
import { increment } from './slice/couter';
function App() {
  
  const dispatch = useDispatch();

  return (
    <>
      <button onClick={() => dispatch(increment(10))}>
        count is
      </button>
      <br />
      <TestingCount />
    </>
  )
}

export default App
