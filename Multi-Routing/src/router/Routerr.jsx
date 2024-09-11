import { Route,Routes } from "react-router-dom"
import Login from "../paginas/Login"
import Routerr2 from "./Router2"
import { RutasPublicas } from "./RutasPublicas"
import RutasPrivadas from "./RutasPrivadas"

const Routerr = () => {
  return (
    <>
    <Routes>
        <Route path="login" element={
        <RutasPublicas>  
          <Login />
        </RutasPublicas>
        }/>
        <Route path="/*" element={
          <RutasPrivadas>
            <Routerr2 />
          </RutasPrivadas>
         }/>
    </Routes>
    </>
  )
}

export default Routerr
