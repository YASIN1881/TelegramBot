import { FcAndroidOs } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { SiWindows11 } from "react-icons/si";
import { MdOutlineLaptopMac } from "react-icons/md";
import { FcLinux } from "react-icons/fc";
const programTrainingData = [
    {
        id: 1,
        name: 'Android',
        icon: <FcAndroidOs size={30}/>,
        cildren: ['ClashMeta', 'HiddifyNext', 'V2rayNG', 'Nekobox']
    },
    {
        id: 2,
        name: 'Ios',
        icon: <FaApple size={30}/>,
        cildren: ['Shadowrocket', 'V2box', 'Sing Box', 'FoXray', 'Streisand']
    },
    {
        id: 3,
        name: 'Windows',
        icon: <SiWindows11 size={30}/>,
        cildren: ['V2rayN', 'ClashVerge', 'Nekoray', 'Hiddify Next']
    },
    {
        id: 4,
        name: 'Mac',
        icon: <MdOutlineLaptopMac size={30}/>,
        cildren: ['Streisand', 'V2box', 'Shadowrocket', 'Hiddify Next']
    },
    {
        id: 5,
        name: 'Linux',
        icon: <FcLinux size={30}/>,
        cildren: ['ClashVerge', 'Nekoray']
    }
]

export {programTrainingData} 