import { styled } from "..";

 export const SuccessContainer = styled('main', {
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   margin: '0 auto',
   height: 656,

   h1: {
     fontSize: '$2xl',
     color: '$gray100',

     marginTop: '10rem',
   },

   p: {
     fontSize: '$xl',
     color: '$gray300',
     maxWidth: 560,
     textAlign: 'center',
     marginTop: '2rem',
     lineHeight: 1.4,
   },

   a: {
     display: 'block',
     marginTop: '5rem',
     fontSize: '$lg',
     color: '$green500',
     textDecoration: 'none',
     fontWeight: 'bold',

     '&:hover': {
       color: '$green300',
     }
   },

   div: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px',

    position: 'absolute',
    width: '316px',
    height: '140px',
    left: 'calc(50% - 316px/2)',
    top: '220px',

    img: {
      background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
      borderRadius: '1000px',

      marginLeft: '-70px'
    }
   }
 });