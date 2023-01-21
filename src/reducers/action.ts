import { ProductProps } from "../pages/product/[id]"

export enum ActionTypes {
  INCREASE_QUANTITY_OF_PRODUCTS = 'INCREASE_QUANTITY_OF_PRODUCTS',
  DECREASE_QUANTITY_OF_PRODUCTS = 'INCREASE_QUANTITY_OF_PRODUCTS',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART"
}

export const addProductToCartAction = (product: ProductProps) => {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: {
      product,
    }
  }
}

export const removeProductFromCart = (productId: string) => {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      productId
    }
  }
}