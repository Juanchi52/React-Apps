import {useNavigate} from "react-router-dom"

const Portada = () => {
    const navigate = useNavigate()
  return (
    <>
        <h1>Bienvenido/a</h1>
        <button className="boton" onClick={()=> navigate("/juego")}>Jugar</button>
    </>
  )
}

export default Portada