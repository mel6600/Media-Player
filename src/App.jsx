
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Landing from './pages/Landing'
import History from './pages/History'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {
  

  return (
    <>
<Header/>
<Routes>
<Route element={<Landing/>} path='/'/>
  <Route element={<Home/>} path='/home'/>
  <Route element={<History/>} path='/history'/>
</Routes>
<Footer/>
    </>
  
  )
}

export default App
