import styled from "styled-components"

const ContainerItemns = styled.div`
    box-shadow: 0px 2px 8px 0px #00000043;
    width: 217.56px;
    height: 285px;
    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
`

const Descriptions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 14px;
    gap: 10px 0;
`
const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
const NameProduct = styled.p`
   font-size: 16px;
   font-weight: 400;
   width: 124px;
   height: 38px;
   line-height: 19px;
   color: #2C2C2C;
`
const PriceProduct = styled.p`
   font-size: 15px;
   font-weight: 700;
   width: 64px;
   height: 26px;
   line-height: 19px;
   color: #fff;
   border-radius: 5px;
   background-color: #373737;
   display: flex;
   justify-content: center;
   align-items: center;
`
const Legend = styled.p`
    width: 192px;
    height: 25px;
    font-weight: 300;
    font-size: 10px;
    line-height: 12px;
`
const Button = styled.button`
    width: 100%;
    height: 31.91px;
    border-radius: 0 0 8px 8px;
    border: none;
    outline: none;
    background-color: #0F52BA;
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 1px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
`

interface CartProductProps {
  name: string;
  description: string;
  brand: string;
  price: number;
}


const CartProduct: React.FC<CartProductProps> = ({ name, description, brand, price }) => {
    return (
      <ContainerItemns>
        <Descriptions>
          <Info>
            <NameProduct>{name}</NameProduct>
            <PriceProduct>{price}</PriceProduct>
          </Info>
          <Legend>{description}</Legend>
        </Descriptions>
        <Button>COMPRAR</Button>
      </ContainerItemns>
    );
  }
  
  export default CartProduct;