import { Routes, Route } from 'react-router'
import { HomePage } from './pages/Home/HomePage'
import { AboutPage } from './pages/About/AboutPage'
import { ShopPage } from './pages/Shop/ShopPage'
import './App.css'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/shop" element={<ShopPage/>} />
      </Routes>
    </div>
  )
}

export default App
