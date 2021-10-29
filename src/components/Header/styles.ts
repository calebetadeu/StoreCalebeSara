import styled from "styled-components";

export const HeaderContainer=styled.div ` 
 height: 5rem;
 border-bottom: 1px solid;
 background-color: rgb(35, 36, 30);

 .headerContent{
    max-width: 1120px;
    height: 5rem;
    margin: 0 auto;
    padding: 0 2rem ;
    display:flex;
    align-items: center;
   
}
.headerTitle{
  display: flex;
  align-items: center;
  margin: 0 auto;
}

 @media only screen and (max-width:900px){
    min-height: 30px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    border-bottom: 1px solid #ccc;
    background: #161414;
    z-index: 2; 
    h1{
    font-size:2rem;
    }
    h2{
    font-size:1.5rem
    }    
    .button{
        margin-right: 10px;
    }
}
    @media only screen and (max-width:768px){
        min-height: 60px;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        border-bottom: 1px solid #ccc;
        background: #161414;
        z-index: 2; 
    h1{
    font-size:1.3rem
}
    h2{
    font-size:1.5rem;
    width: 100%;
    
}
    .headerTitle{
        padding-left: 1.5rem;
        font-size: 1.5rem;
    }
   .button{
        margin-right: 10px;
    }
}

`

