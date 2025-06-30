import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './features/counter/CounterSlice'


function App() {
  const count = useSelector(state=> state.counter.value)
  const Dispatch = useDispatch()

  return (
    <>
      <button 
      onClick={()=>Dispatch(increment())}
      >increment</button>
      <p>count:{count} </p>
      <button
      onClick={()=>Dispatch(decrement())}
      >decrement</button>

    </>
  )
}

export default App
