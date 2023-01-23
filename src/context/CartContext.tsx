import { createContext, ReactNode, useEffect, useReducer } from "react"
import { ProductProps } from "../pages/product/[id]"
import { addProductToCartAction, removeProductFromCart } from "../reducers/action"
import { cartReducer } from "../reducers/reducer"

interface CartContextProps {
  cart: ProductProps[]
  cartLength: number
  addItemToCart: (item: ProductProps) => void
  removeItemFromCart: (itemId: string | number) => void
}

export const CartContext = createContext({} as CartContextProps)

type CartContextProviderProps = {
  children: ReactNode
}

export const initialState = {
  cart: []
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState)
  const cartLength = cartState.cart.length
 
  const removeItemFromCart = (itemId: string) => {
    dispatch(removeProductFromCart(itemId))
  }

  const addItemToCart = (product: ProductProps) => {
    dispatch(addProductToCartAction(product))
  }

  return (
    <CartContext.Provider
      value={{
        addItemToCart: addItemToCart,
        cart: cartState.cart,
        removeItemFromCart: removeItemFromCart,
        cartLength: cartLength
      }}
    >
      {children}
    </CartContext.Provider>
  )
}