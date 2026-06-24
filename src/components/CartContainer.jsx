import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router"

function CartContainer() {
    const {cart}=useContext(CartContext)
    const navigate=useNavigate()


  return (
    <div className="px-5 mt-5 ">
        <ul className="list bg-base-100 rounded-box shadow-md">
  
  <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Tu carrito</li>
  
    {cart.map(prod =>(
          <li className="list-row">
    <div><img className="size-10 rounded-box" src={prod.image} /></div>
    <div>
      <div>{prod.name} </div>
      <div className="text-xs uppercase font-semibold opacity-60">x {prod.count} </div>
    </div>
    <button className="btn btn-square btn-ghost">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </button>
    <button className="btn btn-square btn-ghost">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 11V17" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 7H12H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </button>
  </li>
))}
</ul>
<button className="bg-black text-white px-4 py-2 rounded mt-5"
onClick={
  ()=>navigate('/checkout')
}
>
  ir al checkout</button>
    </div>
  )
}

export default CartContainer