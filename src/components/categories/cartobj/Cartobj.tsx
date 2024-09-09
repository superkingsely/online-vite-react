import { Cart } from '../../../Data'
interface Objprop{
  obj:Cart
}
const Cartobj= ({obj}:Objprop) => {
  return (
    <div className=' flex-shrink flex-grow basis-[200px] h-[200px] p-2 shadow-xl relative '>
        <img className='  w-[100%] h-[100%] ' src={obj.img } alt="" />
        <div className="cat-content flex flex-col  justify-center items-center absolute top-0 left-0 w-[100%] h-[100%] ">
                  <span className="text-white font-bold">{obj.title}</span>
                  <button className='border bg-white'>SHOW NOW</button>
        </div>
    </div>
  )
}

export default Cartobj