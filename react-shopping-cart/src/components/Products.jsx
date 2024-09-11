/* eslint-disable react/prop-types */
import './Products.css'
import { AddToCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function Products ({ products }) {
  const {AddToCart} = useCart()
  return (
    <main className = "products">
      <ul>
        {products.map(product => (
          <li key = {product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
              />
              <div>
                  <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                  <button onClick={() => AddToCart(product)}>
                      <AddToCartIcon/>
                  </button>
              </div>
          </li>
        ))}
      </ul>
    </main>
  )
}