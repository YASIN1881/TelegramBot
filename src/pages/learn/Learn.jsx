import { useState } from "react";
import { Link } from 'react-router-dom'
import { FcAndroidOs } from "react-icons/fc";
import { MdOutlineLaptopMac } from "react-icons/md";
import { FcLinux } from "react-icons/fc";
export default function Learn() {
  const [appID , setAppID] = useState(0)
  const programTrainingData = [
    {
        id: 1,
        name: 'Android',
        icon: <FcAndroidOs size={30}/>,
        children: [
          {
            id:11,
            name:'ClashMeta',
            src:"/image/android/clashMeta.webp"
          },
          {
            id:12,
            name:'HiddifyNext',
            src:"/image/android/hiddify.webp"
          },
          {
            id:13,
            name:'V2rayNG',
            src:"/image/android/v2ray.webp"
          },
          {
            id:14,
            name:'Nekobox',
            src:"/image/android/NekoboxAndroid.webp"
          },
        ]
    },
    {
        id: 2,
        name: 'Ios',
        icon: <svg width="30px" height="30px" viewBox="-4.8 -4.8 57.60 57.60" version="1.1" fill="#6b6b6b" stroke="#6b6b6b" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
        <g id="SVGRepo_iconCarrier"> <title>Apple-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-204.000000, -560.000000)" fill="#6e6e6e"> <path d="M231.174735,567.792499 C232.740177,565.771699 233.926883,562.915484 233.497649,560 C230.939077,560.177808 227.948466,561.814769 226.203475,563.948463 C224.612784,565.88177 223.305444,568.757742 223.816036,571.549042 C226.613071,571.636535 229.499881,569.960061 231.174735,567.792499 L231.174735,567.792499 Z M245,595.217241 C243.880625,597.712195 243.341978,598.827022 241.899976,601.03692 C239.888467,604.121745 237.052156,607.962958 233.53412,607.991182 C230.411652,608.02505 229.606488,605.94498 225.367451,605.970382 C221.128414,605.99296 220.244696,608.030695 217.116618,607.999649 C213.601387,607.968603 210.913765,604.502761 208.902256,601.417937 C203.27452,592.79849 202.68257,582.680377 206.152914,577.298162 C208.621711,573.476705 212.515678,571.241407 216.173986,571.241407 C219.89682,571.241407 222.239372,573.296075 225.322563,573.296075 C228.313175,573.296075 230.133913,571.235762 234.440281,571.235762 C237.700215,571.235762 241.153726,573.022307 243.611302,576.10431 C235.554045,580.546683 236.85858,592.121127 245,595.217241 L245,595.217241 Z" id="Apple"> </path> </g> </g> </g>
        </svg>,
        children: [
          {
            id:22,
            name:'Shadowrocket',
            src:"/image/mac/shadowRocketiconMac.webp"
          },
          {
            id:23,
            name:'V2box',
            src:"/image/mac/v2box.webp"
          },
          {
            id:24,
            name:'Sing Box',
            src:"/image/ios/singbox.webp"
          },
          {
            id:25,
            name:'FoXray',
            src:"/image/ios/foxray.webp"
          },
          {
            id:26,
            name:'Streisand',
            src:"/image/mac/streisand2.webp"
          },
        ]
    },
    {
        id: 3,
        name: 'Windows',
        icon: <svg fill="#3023e7" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" stroke="#3023e7">
        <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
        <g id="SVGRepo_iconCarrier"> <title>microsoft</title> <path d="M16.742 16.742v14.253h14.253v-14.253zM1.004 16.742v14.253h14.256v-14.253zM16.742 1.004v14.256h14.253v-14.256zM1.004 1.004v14.256h14.256v-14.256z"/></g>
    </svg>,
        // icon: <SiWindows11 size={30} color="blue" />,
        children: [
          {
            id:33,
            name:'V2rayN',
            src:"/image/android/v2ray.webp"
          },
          {
            id:34,
            name:'ClashVerge',
            src:"/image/linux/clashverge.webp"
          },
          {
            id:35,
            name:'Nekoray',
            src:"/image/windows/Nekoray.webp"
          },
          {
            id:36,
            name:'Hiddify Next',
            src:"/image/android/hiddify.webp"
          },
        ]
    },
    {
        id: 4,
        name: 'Mac',
        icon: <MdOutlineLaptopMac size={30} color="darkGray" />,
        children: [
          {
            id:44,
            name:'Streisand',
            src:"/image/mac/streisand2.webp"
          },
          {
            id:45,
            name:'V2box',
            src:"/image/mac/v2box.webp"
          },
          {
            id:46,
            name:'Shadowrocket',
            src:"/image/mac/shadowRocketiconMac.webp"
          },
          {
            id:47,
            name:'Hiddify Next',
            src:"/image/mac/hiddifyNextMac.webp"
          },
        ]
    },
    {
        id: 5,
        name: 'Linux',
        icon: <FcLinux size={30} color="" />,
        children: [
          {
            id:55,
            name:'ClashVerge',
            src:"/image/linux/clashverge.webp"
          },
          {
            id:56,
            name:'Nekoray',
            src:"/image/windows/Nekoray.webp"
          },
        ]
    }
]
const appChildren = programTrainingData[appID].children
return (
  <div className="min-h-screen pb-5">
  {/* chose app */}
  <div className="flex items-center w-full mt-10 child:hover:cursor-pointer">{programTrainingData.map( (app , index) => {
    return(
      <div 
      key={app.id} 
      className={`flex items-center flex-col justify-center gap-2 w-full ${appID === index ? 'bg-zinc-100 text-black shadow-md shadow-purple-300 rounded-md p-1 tr' : ''}`} 
      onClick={() => setAppID(index)}>
        {app.icon}
        {app.name}
      </div>
    )
  })}
  </div>
  {/* chose application */}
  <div className="my-10 mb-20 flex flex-row w-full flex-wrap items-center justify-center gap-4 child:hover:cursor-pointer">
    {appChildren.map(child => {
      return (
        <Link key={child.id} to={`/learn/${child.name}`}>
        <div key={child.id} className="p-3 mb-10 rounded-md bg-zinc-100 shadow-lg shadow-purple-200 child:w-full"> {/* customGradient */}
          <img src={child.src} className="w-10 h-10 object-contain" loading="lazy"/>
          <p className="my-2 text-center font-VazirLight text-base">{child.name}</p>
          <p className="text-center font-VazirLight text-sm">برای مشاهده آموزش اتصال به سرویس آرچ نت با برنامه {child.name} روی این آموزش کلیک کنید.</p>
        </div>
        </Link>
      )
    })}
  </div>
  </div>
)
}