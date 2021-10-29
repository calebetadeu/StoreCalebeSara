
import { GetStaticProps } from 'next'
import { getPrismicClient } from '../../services/prismic'
import Prismic from '@prismicio/client'
import {RichText} from 'prismic-dom'
import Products from '../components/Products'


type Products={
  slug: string;
  title: string;
  image:{
    url:string;
    alt:string;
  }
  price:number;
  buttonBuyNow:{
    url:string;
  }
}

interface ProductProps{
  products:Products[]
}



export default function Home({products}:ProductProps) {
  
    console.log(products.map(product =>product.buttonBuyNow.url))
  return (
     
      <>
     {products.map(product=>(
          <Products key={product.slug}
           name={product.title}
            image={product.image.url}
             alt={product.image.alt}  
             price={product.price}
             buttonBuyNow={product.buttonBuyNow.url}
             />
      ))}

    
      
  </>
     
  
  )
}

export const getStaticProps:GetStaticProps=async()=>{

    const prismic=getPrismicClient()

   const response= await prismic.query([
    Prismic.Predicates.at('document.type','stores')
   ],{
     fetch:['stores.title','stores.content','stores.image','stores.price','stores.buttonbuynow','stores.buttonwathsapp'],
     pageSize:100,
   })

   const products=response.results.map(product=>{
     
     console.log(product.data.title)
     return{
       slug:product.uid,
       title:RichText.asText(product.data.title),
       price:new Intl.NumberFormat('pt-BR',{
         style:'currency',
         currency:'BRL',
       }).format(product.data.price)  ,
       image:product.data.image,  
      buttonBuyNow:product.data.buttonbuynow
      };
   });
  
   return{ 
     props:{
       products
     }
   }

}
