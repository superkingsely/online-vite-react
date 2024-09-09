import { categories } from '../../Data'
import Cartobj from './cartobj/Cartobj'
import { Cart } from '../../Data'
const Categories = () => {
  return (
    <div className='flex  flex-wrap gap-2 '>
        {
            categories.map((obj:Cart)=>{
                return(
                    <Cartobj key={obj.id} obj={obj} />
                )
            })
        }
    </div>
  )
}

export default Categories