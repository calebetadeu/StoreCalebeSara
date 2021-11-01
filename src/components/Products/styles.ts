import styled from "styled-components";

export const Container=styled.div ` 
  width: 100%;
  .ContainerProduct{
   background: rgb(248, 244, 244);
    height: 40rem;
    width:22rem;
    display:inline-block;
    align-items: center;
    margin: 5.5rem auto;
    border-radius:8px 8px 5px;
    border-style: hidden;
    border-top: 1rem;
    border-bottom: 2rem;
}
.infoProduct{
    width: 100%;
    height:40rem;
    margin: 0;
    padding-top: 0;
    margin-bottom: 2rem;
    h1{
        padding: 2rem;
        color: black;
    }
}
.imgProduct{
    margin:0;
    width:100%;
    height:15rem;
    padding-left:4.5rem;

}
.description{
padding-top: 2rem;
padding-left: 2rem;
}
.price{
    background-color: #ede;
    color: black;
    font-size:2rem
}
@media  screen and (max-width: 768px) {
    .ContainerProduct{
        width: 90%;
    background: rgb(248, 244, 244);
    height: 40rem;
    width:22rem;
    display:flex;
    align-items: center;
    margin: 5.5rem auto;
    border-radius:8px 8px 5px;
    border-style: hidden;
    border-top: 1rem;
    border-bottom: 2rem;
    }
.button{
    width: 87%;
    margin-top:1rem ;
}
@media only screen and (max-width: 390px) {

 .imgProduct{
    margin:0;
    width:80%;
    height:12rem;
    padding-left:4.5rem;

}   
.button{
    width:70%;
}
}

}

`