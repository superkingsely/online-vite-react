import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { IpopularProdct } from '../../../Data'
import { Link } from 'react-router-dom'
interface IproductProp{
  obj:IpopularProdct
}
const Product = ({obj}:IproductProp) => {
  return (
    // <div className=' flex-shrink flex-grow basis-[300px] h-[200px] p-2 shadow-xl'>
    //     <img className='  w-[100%] h-[100%] ' src={obj.img } alt="" />
    // </div>
    <div className="product  relative z-[1] flex-shrink flex-grow basis-[300px] h-[200px] p-2 shadow-xl ">
        <img className='w-[100%] h-[100%]' src={obj.img} alt="" />
        {/* hover content */}
        <div className="absolute  w-[100%] h-[100%] top-0 left-0 border opacity-[0] flex justify-center items-center   hover:opacity-[1]">
            <div className="icons flex text-white  cursor-pointer ">
                <div>

                <ShoppingCartOutlined/>
                </div>
                <div>
                  <Link to={'/product/1'} >
                  <SearchOutlined/>
                  </Link>
                  {/* <Link to={`/product/${idd}`} >
                  </Link> */}
                </div>
                <div>

                <FavoriteBorderOutlined/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Product