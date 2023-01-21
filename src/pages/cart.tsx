import {
  BuyButton,
  CartContent,
  CartItem,
  CartLine,
  CartPrice,
} from "../styles/pages/cart"
import Image from "next/image"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import sum from 'lodash.sum'

export default function Cart() {
  const { cart, cartLength, removeItemFromCart } = useContext(CartContext)
  let arrCart: any[] = []
  let itensPrice: any[] = []
  let cartTotalPrice: any[] = []
  let totalPrice

  for (var j = 0; j < cart.length; j++) {
    arrCart.push(cart[j].product)
  }

  arrCart.map((price) => {
    itensPrice.push(price.product.price)
  })

  itensPrice.map((price) => {
    cartTotalPrice.push(parseFloat(price.substring(3)))

    totalPrice = sum(cartTotalPrice)

    console.log(cartTotalPrice)
  })

  return (
    <CartContent>
      <h3 style={{ marginTop: "5rem" }}>Sacola de compras</h3>
      {arrCart.map((item, index) => (
        <CartItem key={`${item.product.id}-${index}`}>
          <Image src={item.product.imageUrl} alt="" width={100} height={100} />
          <div>
            <p>{item.product.name}</p>
            <h4>{item.product.price}</h4>
            <button onClick={() => removeItemFromCart(item.product.id)}>Remover</button>
          </div>
        </CartItem>
      ))}
      <CartPrice>
        <CartLine>
          <p>Quantidade</p>
          <p>{cartLength} {cartLength > 1 ? 'itens' : 'item' }</p>
        </CartLine>
        <CartLine>
          <h3>Valor total</h3>
          <h3>R$ {totalPrice},00 </h3>
        </CartLine>

        <BuyButton>
          <h2>Finalizar compra</h2>
        </BuyButton>
      </CartPrice>
    </CartContent>
  );
}
