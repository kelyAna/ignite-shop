import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  padding: '2rem 10rem 2rem 10rem',
  marginLeft: 'auto',
  minHeight: 656,
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    height: '80px',

    display: 'flex',
    alignContent: 'space-between',

    borderRadius: 6,

    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100',
    },

    div: {
      display: 'block',
    },

    p: {
      marginTop: '3px',
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },

    button: {
      background: 'transparent',
      border: 0,
      cursor: 'pointer',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})
