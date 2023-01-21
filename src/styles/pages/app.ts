import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 11rem 2rem 11rem',
  width: '100%',
  margin: '0 auto',

  justifyContent: 'space-between',
  display: 'flex',

  color: '$white',

  h4: {
    color: '$white',
    background: '$green500',
    borderRadius: '100%',

    textAlign: 'center',
    width: '1.8rem',
    height: '1.8rem',

    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',

    marginLeft: '1.875rem',
    marginTop: '-10px' ,

    border: '1px solid #121214',
    
    position: 'absolute',
  },

  button: {
    cursor: 'pointer',
    border: 0,
    background: 'transparent'
  }
})