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
                       
                       <div className='button' >
                             <Button 
                       name='Comprar Agora' 
                       color='green' 
                       height='3.5rem' 
                       font_size='18px' 
                       link={buttonBuyNow}
                       /></div>
                      <div className='button' >
                           <Button name='Cartão de Crédito' 
                      color='#561a86' 
                      height='3.5rem'
                       font_size='18px'
                       link=''
                       /></div> 
                       <div className='button' >
                           <Button name='Ajudar Com Outro Valor'
                        color='#2e3ca8'
                         height='3.5rem'
                          font_size='18px'
                          link=''
                          /></div> 
                    </section>
                    
                </div>
             </div>
            
        </S.Container>
    )
}
