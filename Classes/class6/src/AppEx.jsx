import './AppEx.css'
import {Provider}  from './Contexto/Provider'
import Idiomas from './Idiomas'
import Pagina from './Pagina'

function App() {

  return (
    <Provider>
      <div className='banderas'>
        <Idiomas />
      </div>
      <div className='contenido'>
      <Pagina />
      </div>
    </Provider>
  )
}

export default App
