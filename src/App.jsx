import { useDispatch } from 'react-redux'
import './App.css'
import { nameUpdateHandler as hello, updateName } from './slice/couter'
function App() {

  const dispatch = useDispatch();

  const nameUpdateHandler = () => {
    console.log("click")

  }

  return (
    <>
      <button onClick={() => dispatch(hello())}>
        reset
      </button>

      <button onClick={() => dispatch(updateName("Dhruv"))}>
        change
      </button>
      <br />
    </>
  )
}

export default App;
