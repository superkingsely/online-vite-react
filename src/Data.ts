import img from './../src/assets/slideimg.png'
import cart from './assets/pexels-photo-2983464.jpeg'
import product1 from './assets/product-ecom1.jpg'
import product2 from './assets/product-ecom2.jpg'
 export interface Islideobj{
    id:number,
    img:string,
    title:string,
    desc:string,
    bg:string
 }
const isonline=false;

export const data:Array<Islideobj>=[
    {
      id: 1,
      img: `${isonline?img:img}`,
      title: "SUMMER SALE",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "f5fafd",
    },
    {
      id: 2,
      img: `${isonline?'https://i.ibb.co/DG69bQ4/2.png':img}`,
      title: "AUTUMN COLLECTION",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "fcf1ed",
    },
    {
      id: 3,
      img: `${isonline?'https://i.ibb.co/cXFnLLV/3.png':img}`,
      title: "LOUNGEWEAR LOVE",
      desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
      bg: "fbf0f4",
    },
  ];
  export interface Cart{
    id: number,
    img: string,
    title: string,
    cat:string
  }
  export const categories = [
    {
      id: 1,
      img: `${isonline?'https://images.pexels.com/photos/5886041/pexels-photo-5886041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940':cart}`,
      title: "SHIRT STYLE!",
      cat:'women'
    },
    {
      id: 2,
      img: `${isonline?'https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940':cart}`,
      title: "LOUNGEWEAR LOVE",
      cat:'coat'
    },
    {
      id: 3,
      img: `${isonline?'https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500':cart}`,
      title: "LIGHT JACKETS",
      cat:'jeans'
    },
  ];
  export interface IpopularProdct{
    id: number,
    img: string,
  }
  export const popularProducts = [
    {
      id:1,
      img: `${isonline?'https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png':product1}`,
      
    },
    {
      id:2,
      img: `${isonline?product2:product2}`,
      
    },
    {
      id:3,
      img: `${isonline?product1:product1}`,
      
    },
    {
      id:4,
      img: `${isonline?'https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png':product2}`,
      
    },
    {
      id:5,
      img: `${isonline?'https://images.ctfassets.net/5gvckmvm9289/3BlDoZxSSjqAvv1jBJP7TH/65f9a95484117730ace42abf64e89572/Noissue-x-Creatsy-Tote-Bag-Mockup-Bundle-_4_-2.png':product1}`,
      
    },
    {
      id:6,
      img: `${isonline?'https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png':product2}`,
      
    },
    {
      id:7,
      img: `${isonline?product1:product1}`,
     
    },
    {
      id:8,
      img: `${isonline?'https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png':product2}`,
      
    }
  ]