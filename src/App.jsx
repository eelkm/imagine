import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import {logo} from './assets'

import { Home, CreatePost} from './pages'

function App() {

  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to='/'>
          <div className='flex'>
            <img src={logo} alt='logo' className='w-10 object-contain' />
            <div className='p-1 pl-2 text-2xl font-bold'>
              Imagine<span className='text-xs font-extralight'>.edgarsapinis.dev</span>
            </div>
          </div>

        </Link>

        <Link to={'/create-post'} className='glow font-medium bg-[#000000] text-white px-4 py-2 rounded-md'>
          Create
        </Link>
      </header>

      <main className='sm:p-8 px-4 py-8 w-full bg-[#ffffff] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
