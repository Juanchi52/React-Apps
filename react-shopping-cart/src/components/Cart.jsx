import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import './Cart.css'

export function Cart () {
    const cartCheckBoxId = useId()

    return(
      <>
        <label className = 'cart-button' htmlFor="cart">
          <CartIcon />
        </label>
        <input id={cartCheckBoxId} type="checkbox" hidden />

        <aside className = 'cart'>
          <ul>
            <li>
              <img  
              src = 'https://i.dummyjson.com/data/products/w/tumbnail.jpg'
              alt = 'Iphone'
              />
              <div>
                <strong>Iphone</strong> - $1499
              </div>

              <footer>
                <small>
                  Qty:1
                </small>
                <button>+</button>
              </footer>


            </li>
          </ul>

          <button>
            <ClearCartIcon/>
          </button>
        </aside>
      </>
    )
}