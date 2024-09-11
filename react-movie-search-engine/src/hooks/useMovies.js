import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies ({search, sort }) {
  const [movies, setMovies] =useState([])
  const [loading, setLoading] = useState(false)
  const [, setError] = useState(null)
  const previousSearch = useRef(search) //Algo que persiste aunq se renderize de nuevo y ahora la usamos para guardar la busqueda anterior

  //el useCallback funciona igual que el usememo pero para funciones simplificando la sintaxis
  const getMovies = useCallback(async ({search}) => {   
    if(search === previousSearch.current) return

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({search})
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    }  finally {
      setLoading(false)
    }
},[])


  //El useMemo memoriza un valor para no volver a calcularlo dependiendo de una lista de dependencias
  const sortedMovies = useMemo(() => {
    if (!movies) return;
    return sort
    ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
    : movies
    }, [sort, movies])
  
    return {movies: sortedMovies, getMovies, loading }
  }