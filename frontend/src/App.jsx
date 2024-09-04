// MATERIAL UI
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/login/Login'
import Registration from './pages/registration/Registration'
import Tasks from './pages/tasks/Tasks'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Registration/>}/>
            <Route path='/tasks' element={<Tasks/>}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
