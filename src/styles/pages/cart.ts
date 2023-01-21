import { styled } from '..'

export const CartHeader = styled('header', {
  button: {
    width: '5rem',
    height: '5rem',

    fontSize: '1rem',
    background: 'transparent',

    border: 0,
    color: '$gray300',
    float: 'right',
    marginLeft: '200px',

    cursor: 'pointer'
  },

  'button:hover': {
    color: '$gray100'
  }
})

export const CartContent = styled('main', {

})

export const CartContainer = styled('main', {
  marginTop: '0 auto',
  height: '100vh',
  background: '#202024',

  flexDirection: 'row-reverse',
  boxShadow: '-4px 0px 30px rgba(0,0,0,0.8)',

  position: 'absolute',

  width: '30%',
  right: 0,
  float: 'left',

  main: {
    padding: '0px 40px 40px 40px',

    h3: {
      marginBottom: '1rem',
    },
  
    img: {
      background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
      borderRadius: '0.5rem',
    }
  }
})

export const CartPrice = styled('div', {
  marginTop: '12.375rem'
})

export const CartItem = styled('div', {
  display: 'flex',
  marginBottom: '1rem',

  div: {
    marginLeft: '1.25rem'
  },

  p: {
    marginBottom: '0.625rem'
  },  

  h4: {
    marginBottom: '1.875rem'
  },

  button: {
    color: '$green500',
    textDecoration: 'none',

    background: 'transparent',
    border: 0,

    fontSize: '1rem',
    fontStyle: 'normal',
    fontWeight: 700
  },

  'a:hover': {
    color: '$green300'
  }
})

export const CartLine = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  h3: {
    marginTop: '0.438rem'
  }
})

export const BuyButton = styled('button', {
  width: '100%',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.625rem',

  top: '783px',

  marginTop: '3.563rem',
  background: '$green500',

  border: 0,
  padding: '1.25rem 2rem',
  color: 'white',

  borderRadius: '0.5rem',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
  },

  '&:hover': {
    backgroundColor: '$green300',
  }
})
