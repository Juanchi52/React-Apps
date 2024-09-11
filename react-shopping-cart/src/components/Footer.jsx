import { useCart } from '../hooks/useCart'
import { useFilters } from '../hooks/useFilters'
import { Cart } from './Cart'
import './Footer.css'

export function Footer () {
   const { filters } = useFilters()
   const {cart} = useCart()

  return (
    <footer className ='footer'>
    {
      JSON.stringify(cart,null,2)  
    }
    </footer>
    
    /*<footer className='footer'>
      <h4>Prueba técnica de React ⚛️ </h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>*/
  )
}