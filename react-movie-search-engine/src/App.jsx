import { useEffect, useRef, useState, useCallback } from 'react'
import './App.css'
import { Movies} from './components/Movies'
import { useMovies } from './hooks/useMovies'
import debounce from 'just-debounce-it'

function useSearch () {
  const [search, updateSearch] = useState('')
  const [error,setError] = useState(null)
  const isFirstInput = useRef(true)


  //el useEffect se ejecuta cada vez que cambia el ref
  useEffect(() => {
    //Si es la primer input del usuario entonces no hago las demas validaciones
    // Es un claro ejemplo de useRef
    if(isFirstInput.current){
      isFirstInput.current = search ==='' //no se va a volver a renderizar, solo controlar
      return
    }

    //Aplico validaciones a la hora de buscar una pelicula 
    if(search === ''){
      setError('You cannot find an empty movie')
    }

    if (search.match(/^\d+$/)){
      setError('Yoy cannot find a movie using numbers')
    }

    if (search.length < 3){
      setError('It is need to be more than 3 characters')
    }

    setError(null)
  }, [search])

  return {search,updateSearch,error}
}


function App() {
  const [sort,setSort] = useState(false)
  const {search, updateSearch,error} = useSearch() 
  const {movies, loading, getMovies} =useMovies({search, sort})



  const debounceGetMoives = useCallback(
    debounce(search => {
    getMovies({search})
  }, 500)
  ,[getMovies]
  )

  const handleSumbit = (event) => {
    event.preventDefault()
    getMovies({search})
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debounceGetMoives(newSearch)
  }
  //en handleSumbit y handleChange obtengo lo que escribe el usuario como objeto y actualizo los estados


  //Las validaciones no controladas las podemos poner dentro del return usando Api o OnIdvalid, etc
  //controlado o no controlado depende que el primero es de react y el segundo no
  return (
    <div className = "page">

      <header>
        <h1>Movie Searching</h1>
        <form className = 'form' onSubmit={handleSumbit}> 
          <input style = {{
            border: '1px solid transparent',
            borderColor: error ? 'red' : 'transparent'
          }} onChange={handleChange} value={search}  placeholder='Avengers, Star Wars, The matrix...'/>
          <input  type='checkbox' onChange={handleSort} checked={sort}/>
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      

      <main>
        {
          loading ? <p>Cargando ... </p> : <Movies movies = {movies}/> 
        }
        
      </main>
    </div>
  )
}

export default App
