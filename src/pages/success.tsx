import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import Stripe from 'stripe'

import { stripe } from '../lib/stripe'
import { SuccessContainer } from '../styles/pages/success'

interface SuccessProps {
  costumerName: string
  products: {
    id: string
    image: string
  }[]
}

export default function Success({ costumerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <div>
          {products.map((product) => (
            <Image
              key={product.id}
              width={200}
              height={200}
              alt="product"
              src={product.image}
            />
          ))}
        </div>

        <h1>Compra efetuada</h1>

        <p>
          Uhuul <strong>{costumerName}</strong>, sua compra de {products.length}{' '}
          camisetas já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const costumerName = session.customer_details.name
  const products = session.line_items.data.map((product) => {
    const itemProduct = product.price.product as unknown as Stripe.Product

    return {
      id: itemProduct.id,
      image: itemProduct.images[0],
    }
  })

  return {
    props: {
      costumerName,
      products,
    },
  }
}
