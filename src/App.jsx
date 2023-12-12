
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, incrementValueDynamically } from './redux/features/counter/counterSlice'

function App() {

  const { count } = useSelector((state) => state.counter)
  console.log(count)

  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <>

      <h1>Counter Handle By Redux {count}</h1>
      <div className="card">
        <button onClick={handleIncrement}>
          increment 1
        </button>

        <button onClick={handleDecrement}>
          Decrement 1
        </button>

        <button onClick={()=> dispatch(incrementValueDynamically({value: 5}))}>
          Increment 5
        </button>

      </div>

    </>
  )
}

export default App
