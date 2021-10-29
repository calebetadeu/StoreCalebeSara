import React from 'react'
import * as S from './styles'
import Button from '../Button'

interface ProductsProps { 
    
    name:string;
    image:string;
    alt:string;
    price:number;
    buttonBuyNow:string
}

export default function Products({name,image,alt,price,buttonBuyNow}:ProductsProps) {
    return (
        <S.Container  >
             <div  className='ContainerProduct'  >
                <div className='infoProduct' >
                    <h1> {name} </h1>
                    <img  src={image} alt={alt}  className='imgProduct' />
                    <section className='description' >
                        <span className='price'  > {price} </span>
                    </section>
                    <section>
                       
                       <li>  <Button 
                       name='Comprar Agora' 
                       color='green' 
                       height='3.5rem' 
                       font_size='18px' 
                       link={buttonBuyNow}
                       /></li>
                      <li> <Button name='Cartão de Crédito' 
                      color='#561a86' 
                      height='3.5rem'
                       font_size='18px'
                       link='https://api.whatsapp.com/send?phone=555598982677067&text=Quero%20comprar%20um%20presente%20pra%20voc%C3%AAs%20usando%20o%20Cart%C3%A3o%20de%20Cr%C3%A9dito'
                       /></li> 
                       <li><Button name='Ajudar Com Outro Valor'
                        color='#2e3ca8'
                         height='3.5rem'
                          font_size='18px'
                          link='https://nubank.com.br/pagar/5nbfl/GUZLEPo5jA'
                          /></li> 
                    </section>
                    
                </div>
             </div>
            
        </S.Container>
    )
}
