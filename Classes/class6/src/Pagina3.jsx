import { useContext } from "react"
import { Context } from "./hooks/Context"

export function Pagina3 () {
    const {color} = useContext(Context)
    return(
        <div className="hijo" style={{background:color}}>
            Pagina 3
        </div>
    )
}