import { useState } from 'react'
import './App.css'
import CountdownTimer from './components/CountdownTimer/CountdownTimer'
import UserList from './components/UserList/UserList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CountdownTimer />
      <UserList />
    </div>
  )
}

export default App
