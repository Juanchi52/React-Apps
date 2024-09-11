import { useContext } from "react"
import { Context } from "./hooks/Context"

export function Pagina2 () {
    const {color} = useContext(Context)
    return(
        <div className="hijo" style={{background:color}}>
            Pagina 2
        </div>
    )
}