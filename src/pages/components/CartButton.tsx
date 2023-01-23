import { ButtonProps } from '@chakra-ui/react'
import Image from 'next/image'
import { useContext } from 'react'
import logoTopbarCartIcon from '../../assets/topbar-cart-icon.svg'
import { CartContext } from '../../context/CartContext'

export type CartButtonProps = ButtonProps

export const CartButton = ({ onClick }: CartButtonProps) => {
  const { cartLength } = useContext(CartContext)

  return (
    <div>
      <h4>{cartLength}</h4>
      <button onClick={onClick}>
        <Image src={logoTopbarCartIcon} alt="" />
      </button>
    </div>
  )
}
