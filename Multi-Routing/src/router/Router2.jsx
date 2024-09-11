import { Route,Routes, Navigate } from "react-router-dom"
import { CP } from "../paginas/CP"
import { NO } from "../paginas/NO"
import NavBar from "../NavBar/NavBar"
import { Comprar } from "../paginas/Comprar"
import MiViaje from "../paginas/MiViaje"


const Routerr = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path="cp" element={<CP />} />
        <Route path="no" element={<NO />} />
        <Route path="viaje" element={<MiViaje />} />
        <Route path="destino/:nombre" element={<Comprar />} />
        <Route path="/" element={<Navigate  to = "cp"/>} />
    </Routes>
    </>
  )
}

export default Routerr
