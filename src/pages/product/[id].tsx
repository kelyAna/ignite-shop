import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import toast from 'react-hot-toast'
import Stripe from 'stripe'
import { CartContext } from '../../context/CartContext'

import { stripe } from '../../lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'
import { ToastComponent } from '../components/Toast'

export type ProductProps = {
  product?: {
    id: string | number
    name: string
    imageUrl: string
    price: number
    description: string
    defaultPriceId: string
    quantity?: number
  }
}

const notifyAddedProduct = () => toast('Produto adicionado')

export default function Product({ product }: ProductProps) {
  const { addItemToCart } = useContext(CartContext)

  const addItemToCartClick = () => {
    addItemToCart({ product })

    notifyAddedProduct()
  }

  return (
    <>
      <Head>
        <title>{product?.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product?.imageUrl} width="520" height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product?.name}</h1>
          <span>{product?.price}</span>

          <p>{product.description}</p>

          <button onClick={addItemToCartClick}>Colocar na sacola</button>
          <ToastComponent />
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: 'prod_MIwMNZU8sIbVfI' },
      },
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
  }
}
