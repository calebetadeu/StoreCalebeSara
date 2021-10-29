import styled from 'styled-components'

interface ButtonProps{
    color: string;
    height: string;
    font_size:string
    
}
export const LinkButton=styled.a ` 
text-decoration: none;
`

export const ButtonContainer =  styled.button<ButtonProps> ` 
background-color:${props=>(props.color)}; 
padding: 9px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
    font-size: 12px;
  margin: 4px 2px;
  cursor: pointer;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;

   
  @media  (max-width: 900px){
      width:99%;
      display: flex;
      align-items: center;
      height: ${props=>props.height};
      margin-left:2rem;
      font-size:${props=>props.font_size};
      border-radius: 10px;
    
  }

  @media  (max-width: 768px){
      width:99%;
      display: flex;
      align-items: center;
      height: ${props=>props.height};
      margin-left:2rem;
      font-size:${props=>props.font_size};
      border-radius: 10px;
    
  }

`
       
       
  
