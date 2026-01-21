import { Routes, Route } from 'react-router'
import { HomePage } from './pages/Home/HomePage'
import './App.css'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route index element={<HomePage/>} />
      </Routes>
    </div>
  )
}

export default App
