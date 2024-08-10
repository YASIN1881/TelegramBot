import {BellFilled} from '@ant-design/icons';
import { AiOutlineMenu } from "react-icons/ai";
export default function Header() {
  return (
    <>
    <div className="flex flex-row justify-between items-center pt-4">
      {/* bell icon */}
      <BellFilled style={{color:'#fcd34d', fontSize:21}}/>
      {/* title => Arch Net */}
      <p className=' text-lg font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-purple-400'>Arch Net</p>
      {/* menu => opened from right */}
      <AiOutlineMenu style={{fontSize:22}}/>{/* click shod menu az samt rast baz besh */}
    </div>
    </>
  )
}
