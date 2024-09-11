import './App.css'
import A from './A'
import B from './B'
import C from './C'
import Nav from './Nav'
import {BrowserRouter, Route,Routes,Navigate} from 'react-router-dom'
import Error404 from './Error404'
import D from './D'


function App() {

  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
       <Route path = "/" element={<A />}/>
       <Route path = "/Pagina2" element={<B />}/>
       <Route path = "/Pagina3" element={<C />}/> 
       <Route path = "/Pagina4/:letra" element={<D />}/> 
       <Route path = "/Pagina1" element={<Navigate to = "/" />}/> 
       <Route path = "*" element={<Error404 />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
