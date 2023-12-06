import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import {logo} from './assets'

import { Home, CreatePost} from './pages'

function App() {

  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-stone-950 text-white sm:px-8 px-4 py-4'>
        <Link to='/'>
          <div className='flex'>
            {/* <img src={logo} alt='logo' className='w-10 object-contain' /> */}
            <div className='p-1 pl-2 text-4xl font-bold ml-[calc(50vw-150px)]'>
              Imagine :)
            </div>
          </div>

        </Link>

        <Link to={'/create-post'} className='glow font-medium bg-[#000000] text-white px-4 py-2 rounded-md'>
          Create
        </Link>
      </header>

      <main className='sm:p-8 px-4 py-8 w-full bg-stone-950 min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
