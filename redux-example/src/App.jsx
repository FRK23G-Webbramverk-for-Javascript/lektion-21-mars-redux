import './App.css'
import { useDispatch } from 'react-redux'
import { increment } from './reducers/counterReducer'

import ViewCounter from './components/ViewCounter/ViewCounter';

function App() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(increment(1));
  }

  return (
    <>
      <h1>Räknare</h1>
      <div className="card">
        <ViewCounter />
        <button onClick={ handleClick }>
          Öka med 1
        </button>
      </div>
    </>
  )
}

export default App
