/* eslint-disable no-redeclare */
import Stripe from 'stripe'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from 'next'
import 'keen-slider/keen-slider.min.css'

import { HomeContainer, Product } from '../styles/pages/home'
import { stripe } from '../lib/stripe'

import cartIcon from '../assets/cart-icon.svg'
import { useContext } from 'react'
import toast from 'react-hot-toast'
import { CartContext } from '../context/CartContext'

export type HomeProps = {
  products: {
    id: string | number
    name: string
    imageUrl: string
    price: number
    description: string
    defaultPriceId: string
    quantity?: number
  }[]
}

const notifyAddedProduct = () => toast('Produto adicionado')

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })

  const { addItemToCart } = useContext(CartContext)

  const addItemToCartClick = (product: any) => {
    addItemToCart(product)

    notifyAddedProduct()
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products?.map((product) => {
          console.log(products)
          return (
            <Link key={product.id} href={`/product/${product?.id}`} prefetch>
              <Product className="keen-slider__slide">
                <Image
                  src={product?.imageUrl}
                  alt=""
                  width={520}
                  height={480}
                />

                <footer>
                  <div>
                    <strong>{product?.name}</strong>
                    <p>{product?.price}</p>
                  </div>
                  <button onClick={() => addItemToCartClick(product)}>
                    <Image src={cartIcon} alt="" width={50} height={50} />
                  </button>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }
}
