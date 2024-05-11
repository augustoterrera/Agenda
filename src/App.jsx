import Agenda from './components/Agenda'
import { datos } from './goblal/datos'
import './App.css'

function App() {

  return (
    <>
      <Agenda datos={datos}/>
    </>
  )
}

export default App
