import React from 'react'
import { useParams } from 'react-router-dom'

function D() {
    const dato = useParams()
  return (
    <div>{dato.letra}</div>
  )
}

export default D