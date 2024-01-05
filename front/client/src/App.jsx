import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Users from './component/user'
import Createuser from './component/createuser'
import Updateuser from './component/updateuser'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Users />}></Route>
      <Route path='/create' element={<Createuser />}></Route>
      <Route path='/update/:id' element={<Updateuser />}></Route>

     </Routes>
     </BrowserRouter>
   </div>
  )
}

export default App
