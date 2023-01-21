import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";
import { CloseButton } from "@chakra-ui/react";
import { Container, Header } from "../styles/pages/app";

import Image from "next/image";
import Cart from "./cart";

import logoImg from "../assets/logo-ignite.svg";
import { useState } from "react";
import { CartContainer, CartHeader } from "../styles/pages/cart";
import { CartContextProvider } from "../context/CartContext";
import { CartButton } from "./components/CartButton";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  const [showModal, setShowModal] = useState(false)

  return (
    <CartContextProvider>
      <Container>
        <Header>
          <Image src={logoImg} alt="" />
          <CartButton onClick={() => setShowModal((prevState) => !prevState)} />
        </Header>

        <Component {...pageProps} />

        {showModal && (
          <CartContainer>
            <CartHeader>
              <CloseButton
                size="md"
                onClick={() => setShowModal((prevState) => !prevState)}
              />
            </CartHeader>
            <Cart />
          </CartContainer>
        )}
      </Container>
    </CartContextProvider>
  );
}
