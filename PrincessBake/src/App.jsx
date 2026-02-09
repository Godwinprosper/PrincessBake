import { Routes, Route } from 'react-router'
import { HomePage } from './pages/Home/HomePage'
import { AboutPage } from './pages/About/AboutPage'
import './App.css'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
      </Routes>
    </div>
  )
}

export default App
