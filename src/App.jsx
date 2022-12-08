import { BrowserRouter, Link, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Create from './pages/Create'
import Update from './pages/Update'
import Detail from './pages/Detail'

const App = () => {
  return (
    <div className="bg-zinc-300 w-full px-5 pt-20 min-h-screen overflow-hidden">
      <div className="bg-white max-w-7xl mx-auto p-6">
        <BrowserRouter>
          <nav className='mb-10 flex justify-between items-center'>
            <h1>Data Mahasiswa</h1>
            <div className='space-x-4'>
              <Link to="/">Home</Link>
              <Link to="/create">Create</Link>
            </div>
          </nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/update' element={<Update />} />
            <Route path='/detail/:id' element={<Detail />} />
            <Route path='*' element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App