// Style your elements here
import styled from "styled-components"

export const MainContainer=styled.div`
display:flex;
flex-direction:row;
justify-content:center;
`

export const CreditCardContainer=styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
background-color:#3b4b69;
height:100vh;
width:50%;
padding:50px;
text-align:center;
`

export const CreditCardHeading=styled.h1`
font-size:32px;
font-family:"Roboto";
font-weight:500;
color:#ffffff;
`

export const HorizontalLine=styled.hr`
height:5px;
width:200px;
background-color:#ffd773;
margin-bottom:200px;
`
export const CreditCardImage=styled.div`
background-image:url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
background-size:cover;
height:200px;
width:350px;
border-radius:10px;
`
export const CardNumber=styled.p`
color:#fff;
font-size:30px;
font-family:"Roboto";
`
export const TextInfo=styled.p`
color:#fff;
font-size:22px;
font-family:"Roboto";
`
export const CardHolderName=styled.p`
color:#fff;
font-size:20px;
font-family:"Roboto";
`

export const PaymentMethodContainer=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:#d3d9e0;
background-size:cover;
height:100vh;
width:50%;
`

export const PaymentMethodContainer2=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background-color:#ffffff;
height:250px;
width:350px;
border-radius:10px;
box-shadow:5px 5px 5px 5px grey;
padding:20px;
`
export const PaymentMethodHeading=styled.h1`
color:#475569;
font-size:24px;
font-family:"Roboto";
`

export const NumberInput=styled.input`
height:25px
width:190px;
margin-bottom:10px;
`

export const NameInput=styled.input`
height:25px;
width:190px;

`


