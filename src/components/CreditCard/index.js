// Write your code here
import {useState} from 'react'

import {
  MainContainer,
  CreditCardContainer,
  PaymentMethodContainer,
  CreditCardHeading,
  HorizontalLine,
  CreditCardImage,
  CardNumber,
  TextInfo,
  CardHolderName,
  PaymentMethodContainer2,
  PaymentMethodHeading,
  NumberInput,
  NameInput,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [holderName, setHolderName] = useState('')

  const onChangeNumber = event => {
    setNumber(event.target.value)
  }
  const onChangeName = event => {
    setHolderName(event.target.value)
  }

  return (
    <MainContainer>
      <CreditCardContainer>
        <CreditCardHeading>CREDIT CARD</CreditCardHeading>
        <HorizontalLine />
         <CreditCardImage data-testid="creditCard">
           <CardNumber>{number}</CardNumber>
          <TextInfo>CARDHOLDER NAME</TextInfo>
          <CardHolderName>{holderName}</CardHolderName>
         </CreditCardImage>  
      </CreditCardContainer>
      <PaymentMethodContainer>
        <PaymentMethodContainer2>
          <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
          <NumberInput
            type="text"
            placeholder="Card Number"
            onChange={onChangeNumber}
          />
          <NameInput
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeName}
          />
        </PaymentMethodContainer2>
      </PaymentMethodContainer>
    </MainContainer>
  )
}
export default CreditCard
