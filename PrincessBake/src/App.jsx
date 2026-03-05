import { Routes, Route } from 'react-router'
import { HomePage } from './pages/Home/HomePage'
import { AboutPage } from './pages/About/AboutPage'
import { ShopPage } from './pages/Shop/ShopPage'
import { BlogPage } from './pages/Blog/BlogPage'
import './App.css'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route index element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/shop" element={<ShopPage/>} />
        <Route path="/blog" element={<BlogPage/>} />
      </Routes>
    </div>
  )
}

export default App
