import styled from 'styled-components'

export const Title  = styled.nav`
color: #FFFFFF;
font-size: 3rem;
text-align: center;
padding-top: 1%;



@media only screen and (max-width: 700px) and (orientation: landscape) {
   
    font-size: 1rem;
  
  
}
`

export const Nav = styled.nav`
background: #1A97E8 ;
height: 125px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
@media only screen and (max-width: 700px) and (orientation: landscape) {
   
    height: 150px;
  
  
}
`

export const Description = styled.div`
color: #1A97E8;
font-size: 25px;
margin-left: auto;
margin-right: auto;
margin: 0 5px;
padding-top: 1%;
padding-bottom: 15%;
text-align: center;

@media only screen and (max-width: 700px) and (min-width: 501px) {
   
    font-size: 1rem;
  
  
}


@media only screen and (max-width: 500px) and (orientation: landscape) {
   
    font-size: 0.5rem;
  
  
}
`

export const Result = styled.div`
color: #1A97E8;
font-size: 25px;
margin-left: auto;
margin-right: auto;
margin: 0 5px;
padding-top: 1%;
padding-bottom: 15%;
text-align: center;

@media only screen and (max-width: 700px) and (orientation: landscape) {
   
    font-size: 1rem;
  
  
}

@media only screen and (max-width:500px) and (orientation: landscape) {
   
    font-size: 1rem;
  
  
}
`