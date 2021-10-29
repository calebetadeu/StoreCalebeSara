import React from 'react'
import * as S  from './styles'


interface ButtonProps{
    name: string;
    color: string;
    height: string;
    font_size:string;
    link: string;
}

export default function Buttons({name,color,height,font_size,link}:ButtonProps) {

    return (
        <S.LinkButton href={link}>
        <S.ButtonContainer color={color} height={height} font_size={font_size} type="button"   >
                {name}
        </S.ButtonContainer></S.LinkButton>
    )
}
