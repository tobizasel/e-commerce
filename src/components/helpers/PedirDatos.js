import React from 'react'
import { productos } from '../productos'

export const PedirDatos = () => {
  return (
    new Promise((resolve) => {
        
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    })
  )
}
