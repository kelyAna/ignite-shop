import { useContext, useEffect, useState } from 'react'
import sum from 'lodash.sum'
import axios from 'axios'
import { CartContext } from '../context/CartContext'
import { Box, useToast } from '@chakra-ui/react'
import toast from 'react-hot-toast'
import Image from 'next/image'

import { ToastComponent } from './components/Toast'
import {
  BuyButton,
  CartContent,
  CartItem,
  CartLine,
  CartPrice,
} from '../styles/pages/cart'

const notifyRemovedProduct = () => toast('Produto removido')

export default function Cart() {
  const toast = useToast()
  const [showToast, setShowToast] = useState(false)

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)
  const { cart, cartLength, removeItemFromCart } = useContext(CartContext)

  const arrCart: any[] = []
  const itensPrice: any[] = []
  const cartTotalPrice: any[] = []
  let totalPrice

  for (let j = 0; j < cart.length; j++) {
    arrCart.push(cart[j].product)
  }

  arrCart.map((price) => {
    return itensPrice.push(price.product.price)
  })

  itensPrice.map((price) => {
    cartTotalPrice.push(parseFloat(price.substring(3)))

    return (totalPrice = sum(cartTotalPrice))
  })

  const handleBuyButton = async () => {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        products: arrCart,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout!')
    }
  }

  const handleRemoveButtonClick = (itemId: string) => {
    removeItemFromCart(itemId)

    setShowToast(!showToast)

    notifyRemovedProduct()
  }

  useEffect(() => {
    toast({
      position: 'bottom-left',
      render: () => (
        <Box color="white" p={3} bg="blue.500">
          Hello World
        </Box>
      ),
    })
  }, [showToast, setShowToast, toast])

  return (
    <CartContent>
      <h3 style={{ marginTop: '5rem' }}>Sacola de compras</h3>
      {arrCart.map((item, index) => (
        <CartItem key={`${item.product.id}-${index}`}>
          <Image src={item.product.imageUrl} alt="" width={100} height={100} />
          <div>
            <p>{item.product.name}</p>
            <h4>{item.product.price}</h4>
            <button onClick={() => handleRemoveButtonClick(item.product.id)}>
              Remover
            </button>
            <div>
              <ToastComponent />
            </div>
          </div>
        </CartItem>
      ))}
      <CartPrice>
        <CartLine>
          <p>Quantidade</p>
          <p>
            {cartLength} {cartLength === 1 ? 'item' : 'itens'}
          </p>
        </CartLine>
        <CartLine>
          <h3>Valor total</h3>
          <h3>R$ {totalPrice > 0 ? `${totalPrice},00` : '00,00'} </h3>
        </CartLine>

        <BuyButton
          onClick={handleBuyButton}
          disabled={isCreatingCheckoutSession}
        >
          <h2>Finalizar compra</h2>
        </BuyButton>
      </CartPrice>
    </CartContent>
  )
}
