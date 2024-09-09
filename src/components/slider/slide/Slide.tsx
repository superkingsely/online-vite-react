// import './slide.css'
// const Slide = ({item}:number) => {
//   return (
//     <div className='slide'>
//         {item}
//     </div>
//   )
// }

// export default Slide
import { Islideobj } from '../../../Data'
import './slide.css'
const Slide = ({item}:any) => {
  return (
    <div className='slide flex'>
        <div className="slide-left flex-grow  basis-0">
          <img  src={item.img} alt="" />
        </div>
        <div className="slide-right flex-grow  basis-0 flex flex-col justify-center">
        <h1>{item.title}</h1>
              <p className='my-[50px] text-[20px]'>{item.desc}</p>
              <div className="">

              <button className='border px-[10px] py-[5px]'>SHOW NOW</button>
              </div>
        </div>
    </div>
  )
}

export default Slide