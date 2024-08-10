import { Link } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { BsBasket3 } from "react-icons/bs";
import { GrHomeRounded } from "react-icons/gr";
import { SlBasket } from "react-icons/sl";
import { MdCastForEducation } from "react-icons/md";
import { useState } from "react";
export default function Footer() {
  const Menus = [
    {id:1 ,name: 'اکانت', icon:<VscAccount/> , href:'/account' },
    {id:2 ,name: 'سفارشات', icon:<BsBasket3/> , href:'/order' },
    {id:3 ,name: 'خانه', icon:<GrHomeRounded/> , href:'/' },
    {id:4 ,name: 'خرید', icon:<SlBasket/> , href:'/plans' },
    {id:5 ,name: 'آموزش', icon:<MdCastForEducation/> , href:'/learn' }
  ]
  const [active , setActive] = useState(2)
  return (
    <div className="px-4 fixed bottom-2 left-0 right-0 z-50 customBlur">
      <ul className="flex items-center">
        {
          Menus.map((menu , index) => {
            return (
              <li key={menu.id} className="w-screen">
              <Link to={menu.href} className="flex flex-col items-center  h-full text-center" onClick={() => setActive(index)}>
                <span className={`text-xl duration-500 z-10 flex items-center justify-center flex-col ${index === active && '-mt-6 text-white bg-purple-400 border-1 border-white customBorderBlur duration-500 size-16 -top-5 rounded-full flex justify-center items-center'}`}>
                {menu.icon}
                </span>
                <span className={`${active === index ? 'font-VazirMedium translate-y-0 duration-700 opacity-100' : 'opacity-0 translate-y-10'}`}>{menu.name}</span>
              </Link>
            </li>
            )
          })
        }  
      </ul>
    </div>
  )
}
