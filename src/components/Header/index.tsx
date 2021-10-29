import React from 'react'
import Button from '../Button'
import * as S from './styles'

export default function Header() {
    return (
    <>
        <S.HeaderContainer>
           
           <div className='headerContent' >
              
            <h2  className='headerTitle' >C+S</h2>   
                <div className='button' >
               <Button name='Contribuir Agora' color='red'height='3.5rem' font_size='18px' link='https://nubank.com.br/pagar/5nbfl/GUZLEPo5jA' />
                </div>
             
                </div>
                 
                </S.HeaderContainer>
                    
         


        </>
    )
}
