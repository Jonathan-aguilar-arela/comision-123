import { useState} from "react"
import Button from "./Button"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function counter ({item} ) {
//let count=0
const [count,setCount]=useState(0)
const {addToCart}=useContext(CartContext)


const handleAdd = () =>{
    if (count>9) return
  setCount(count+1)
}

const handleDecrease = () =>{
    if (count===0) return
  setCount(prev=>prev-1)
}

const handleAddToCart= () => {
  addToCart({...item,count})
}

return (

    <div className="flex flex-col mt-3">
        
        <p className='text-center text-2xl mb-3 border rounded'>{count}</p>
        <Button 
        label ='sumar'
        styles='bg-black text-white px-4 py-2 rounded mb-2 cursor-pointer' 
        onClick={handleAdd}
        ></Button>

        <Button 
        label='restar ' 
        styles='bg-black text-white px-4 py-2 rounded mb-2 cursor-pointer' 
        onClick={handleDecrease}
        ></Button>

        <Button 
        label='add to cart' 
        styles='bg-black text-white px-4 py-2 rounded cursor-pointer' 
        onClick={handleAddToCart}
        ></Button>
        
        
        </div>
)
}
export default counter