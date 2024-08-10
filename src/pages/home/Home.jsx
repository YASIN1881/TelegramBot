import { Progress } from "antd";//TODO remove Progress component
import { Select } from "antd";
import { Collapse } from "antd";
import { CiWallet } from "react-icons/ci";
import { LuRefreshCcw } from "react-icons/lu";
import { FcDownload } from "react-icons/fc";
import { FcUpload } from "react-icons/fc";
import { FcPlanner } from "react-icons/fc";
import { FcConferenceCall } from "react-icons/fc";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { RxClipboardCopy } from "react-icons/rx";
import { FaInfoCircle } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
    const [ typeShow  ] = useState(false)

    const activeSubscription = [
        {
            key: 0,
            label: 
            <div className='flex items-center gap-2'>
              <svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <path fillRule="evenodd" clipRule="evenodd" d="M1.5 2h13l.5.5v5.503a5.006 5.006 0 0 0-1-.583V3H2v9h5a5 5 0 0 0 1 3H4v-1h3v-1H1.5l-.5-.5v-10l.5-.5z"/><path fillRule="evenodd" clipRule="evenodd" d="M9.778 8.674a4 4 0 1 1 4.444 6.652 4 4 0 0 1-4.444-6.652zm2.13 4.99l2.387-3.182-.8-.6-2.077 2.769-1.301-1.041-.625.78 1.704 1.364.713-.09z"/></svg>
              <p className='font-VazirMedium font-extrabold text-lg'>اشتراک فعال من</p>
            </div>,
            children:
            <div className='flex flex-col gap-4 child:text-base'>
              {/* subscription name */}
              <div className='flex justify-between'>
                <p className="font-VazirRegular font-extrabold">نام اشتراک</p>
                <p className="font-VazirLight">اشتراک ۲۰ گیگ تک کاربره</p>
              </div>
              {/* subscription expiry date */}
              <div className='flex justify-between'>
              <p className="font-VazirRegular font-extrabold">تاریخ پایان</p>
              <p className="font-VazirLight">۱۴۰۳/۰۵/۲۳</p>
              </div>
            </div>,
            showArrow: false
          }
    ]
    return (
        <>
            {/* active subscription */}
            <Collapse accordion={true} activeKey={0} items={activeSubscription} className="my-5  shadow-xl"/>
            {/* Expiry date and used and remaining volume */}
            <div className='py-5 border-b border-t border-zinc-500 flex flex-col gap-4 child:flex child:justify-between child:items-center child-first:justify-end'>
                {/* refresh */}
                <div className="text-blue-500">
                    <LuRefreshCcw size={20}/>
                </div>
                {/* used volume */}
                <div className="child-first:flex child-first:items-center child-first:gap-2">
                    {/* left side => icon + title */}
                    <div>
                        {/* icon */}
                        <div>
                            <FcDownload size={25} />
                        </div>
                        {/* title */}
                        <div>
                            <p className='font-VazirMedium text-xl'>حجم کل</p>
                            <p className='font-VazirLight text-md'>۳۰ گیگ</p>
                        </div>
                    </div>
                    {/* progress bar */}
                    <div dir='ltr'>
                        <Progress
                            status="active"
                            percent={55}
                            percentPosition={{ align: 'center', type: 'inner' }}
                            size={[170, 15]} />
                    </div>
                </div>
                {/* remaining volume */}
                <div className="child-first:flex child-first:items-center child-first:gap-2">
                    {/* left side => icon + title */}
                    <div className='flex items-center gap-2'>
                        {/* icon */}
                        <div>
                            <FcUpload size={25} />
                        </div>
                        {/* title */}
                        <div>
                            <p className='font-VazirMedium text-xl '>حجم مصرف شده</p>
                            <p className='font-VazirLight text-md'>۱۵۰ مگابایت</p>
                        </div>
                    </div>
                    {/* progress bar */}
                    <div>
                        <div dir='ltr'>
                            <Progress
                                status="active"
                                percent={55}
                                percentPosition={{ align: 'center', type: 'inner' }}
                                size={[170, 15]} />
                        </div>
                    </div>

                </div>
                {/* expiry date volume */}
                <div className="child-first:flex child-first:items-center child-first:gap-2">
                    {/* left side => icon + title */}
                    <div>
                        {/* icon */}
                        <div>
                            <FcPlanner size={25} />
                        </div>
                        {/* title */}
                        <div>
                            <p className='font-VazirMedium text-xl'>تاریخ انقضا</p>
                            <p className='font-VazirLight text-md'>۳۰ روز</p>
                        </div>
                    </div>
                    {/* progress bar */}
                    <div>
                        <div dir='ltr'>
                            <Progress
                                percent={0}
                                format={(percent) => percent}
                                percentPosition={{ align: 'center', type: 'inner' }}
                                size={[170, 15]} />
                        </div>
                    </div>
                </div>
                {/* ip limit  */}
                <div className="child-first:flex child-first:items-center child-first:gap-2">
                    {/* left side => icon + title */}
                    <div>
                        {/* icon */}
                        <div>
                            <FcConferenceCall size={20}/>
                        </div>
                        {/* title */}
                        <div>
                        <p className='font-VazirMedium text-xl'>تعداد کاربران</p>
                        <p className='font-VazirLight text-md'>۴ کاربره</p>
                        </div>
                    </div>
                    {/* progress bar */}
                    <div>
                        <div dir='ltr'>
                                <Progress
                                    percent={40}
                                    format={(percent) => percent}
                                    percentPosition={{ align: 'center', type: 'inner' }}
                                    size={[170, 15]} 
                                />
                        </div>
                    </div>
                </div>
            </div>
            {/* wallet */}
            <div className='w-full h-40 mt-10 px-2 rounded-xl flex flex-col justify-between bg-purple-200 shadow-xl'>
                {/* title and button  */}
                <div className="w-full flex justify-between items-start mt-3">
                    <p className="font-VazirMedium text-base flex items-center gap-1"> 
                        <CiWallet size={20}/>
                        حساب دیجیتال آرچ نت
                    </p>
                    <button className="font-VazirLight font-light h-5 p-3 shadow-xl flex items-center bg-purple-500 rounded-md text-white">افزایش موجودی</button>
                </div>
                {/* Show amount of money */}
                <div className="w-full flex flex-row justify-between items-end mb-3">
                    {/* icon */}
                    <button>
                        {typeShow ? <VscEye size={20}/> : <VscEyeClosed size={20}/> }
                    </button>
                    {/* money & title */}
                    <div className="flex flex-col gap-1 child:font-VazirLight child:text-lg text-center">
                        <p>موجودی حساب</p>
                        <p>۲۲۰,۰۰۰ <span className="font-VazirLight text-sm">تومان</span></p>
                    </div>
                </div>
            </div>  
            <div className="border-b border-zinc-500 mt-10"></div>
            {/* apps config */}
            <div className="pt-10 pb-20">
                {/* select system operation */}
                <div className="flex">
                    <Select style={{flex: 1}} className="bg-zinc-100" options={[
                        {value: 'android', label: <p className="flex justify-between items-center">
                            Android
                            <svg width="20px" height="20px" viewBox="0 0 32 32" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.5915 3.88444C13.6002 3.32107 14.7626 3 16 3C17.2374 3 18.3998 3.32107 19.4085 3.88444L20.1464 3.14645C20.3417 2.95118 20.6583 2.95118 20.8536 3.14645C21.0488 3.34171 21.0488 3.65829 20.8536 3.85355L20.2612 4.44595C21.9266 5.72558 23 7.73743 23 10H9C9 7.73743 10.0734 5.72558 11.7388 4.44595L11.1464 3.85355C10.9512 3.65829 10.9512 3.34171 11.1464 3.14645C11.3417 2.95118 11.6583 2.95118 11.8536 3.14645L12.5915 3.88444ZM14 7C14 7.55228 13.5523 8 13 8C12.4477 8 12 7.55228 12 7C12 6.44772 12.4477 6 13 6C13.5523 6 14 6.44772 14 7ZM19 8C19.5523 8 20 7.55228 20 7C20 6.44772 19.5523 6 19 6C18.4477 6 18 6.44772 18 7C18 7.55228 18.4477 8 19 8Z" fill="#87C527"/>
                            <path d="M5 12.5C5 11.6716 5.67157 11 6.5 11C7.32843 11 8 11.6716 8 12.5V18.5C8 19.3284 7.32843 20 6.5 20C5.67157 20 5 19.3284 5 18.5V12.5Z" fill="#87C527"/>
                            <path d="M12 24V27.5C12 28.3284 12.6716 29 13.5 29C14.3284 29 15 28.3284 15 27.5V24H17V27.5C17 28.3284 17.6716 29 18.5 29C19.3284 29 20 28.3284 20 27.5V24H21C22.1046 24 23 23.1046 23 22V11H9V22C9 23.1046 9.89543 24 11 24H12Z" fill="#87C527"/>
                            <path d="M24 12.5C24 11.6716 24.6716 11 25.5 11C26.3284 11 27 11.6716 27 12.5V18.5C27 19.3284 26.3284 20 25.5 20C24.6716 20 24 19.3284 24 18.5V12.5Z" fill="#87C527"/>
                            </svg>
                        </p>},
                        {value: 'ios', label: <p className="flex justify-between items-center">
                            Ios
                            <svg width="20px" height="20px" viewBox="-4.8 -4.8 57.60 57.60" version="1.1" fill="#6b6b6b" stroke="#6b6b6b" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                            <g id="SVGRepo_iconCarrier"> <title>Apple-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-204.000000, -560.000000)" fill="#6e6e6e"> <path d="M231.174735,567.792499 C232.740177,565.771699 233.926883,562.915484 233.497649,560 C230.939077,560.177808 227.948466,561.814769 226.203475,563.948463 C224.612784,565.88177 223.305444,568.757742 223.816036,571.549042 C226.613071,571.636535 229.499881,569.960061 231.174735,567.792499 L231.174735,567.792499 Z M245,595.217241 C243.880625,597.712195 243.341978,598.827022 241.899976,601.03692 C239.888467,604.121745 237.052156,607.962958 233.53412,607.991182 C230.411652,608.02505 229.606488,605.94498 225.367451,605.970382 C221.128414,605.99296 220.244696,608.030695 217.116618,607.999649 C213.601387,607.968603 210.913765,604.502761 208.902256,601.417937 C203.27452,592.79849 202.68257,582.680377 206.152914,577.298162 C208.621711,573.476705 212.515678,571.241407 216.173986,571.241407 C219.89682,571.241407 222.239372,573.296075 225.322563,573.296075 C228.313175,573.296075 230.133913,571.235762 234.440281,571.235762 C237.700215,571.235762 241.153726,573.022307 243.611302,576.10431 C235.554045,580.546683 236.85858,592.121127 245,595.217241 L245,595.217241 Z" id="Apple"> </path> </g> </g> </g>
                            </svg>
                        </p>},
                        {value: 'windows', label: <p className="flex justify-between items-center">
                            Windows
                            <svg fill="#3023e7" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" stroke="#3023e7">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                <g id="SVGRepo_iconCarrier"> <title>microsoft</title> <path d="M16.742 16.742v14.253h14.253v-14.253zM1.004 16.742v14.253h14.256v-14.253zM16.742 1.004v14.256h14.253v-14.256zM1.004 1.004v14.256h14.256v-14.256z"/></g>
                            </svg>
                        </p>},
                        {value: 'mac', label: <p className="flex justify-between items-center">
                            Mac
                            <svg fill="#5c5c5c" version="1.1" id="Capa_1" width="20px" height="20px" viewBox="0 0 346.435 346.435" xmlSpace="preserve" stroke="#5c5c5c">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                <g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M191.514,126.182c0-11.64,7.65-21.86,18.561-25.277c-3.146-3.882-6.971-6.218-11.145-6.803 c-0.889-0.252-1.567-0.343-2.281-0.343c-2.955,0-7.146,0.46-10.737,1.862c-3.614,1.42-6.548,3.747-9.463,3.747h-0.757 l-0.541-0.556c-4.512-4.5-11.048-5.446-15.747-5.446c-3.861,0-6.671,0.64-7.035,0.742l-0.252,0.132 c-6.074,0.829-11.337,5.317-14.805,12.61c-3.609,7.563-4.834,17.156-3.474,27.013c2.729,19.744,15.48,34.969,28.346,33.173 c4.53-0.622,8.632-3.285,11.904-7.71l1.475-1.987l1.482,1.967c3.258,4.354,7.329,6.975,11.797,7.602 c8.274,1.099,16.808-4.771,22.506-15.09C199.704,148.823,191.514,138.405,191.514,126.182z"/> </g> <g> <path d="M200.797,68.965c-3.477,0.609-10.238,2.387-15.065,7.206c-4.849,4.852-6.608,11.593-7.206,15.072 c3.477-0.622,10.221-2.384,15.066-7.206C198.426,79.203,200.185,72.439,200.797,68.965z"/> </g> <g> <path d="M322.437,0H23.986C12.229,0,2.669,9.56,2.669,21.317v224.808c0,11.745,9.56,21.317,21.317,21.317h84.295 c6.254,8.105,18.903,27.586,14.469,36.833c-1.79,3.729-6.659,5.62-14.505,5.62c-42.42,0-43.64,15.03-43.64,16.754v19.785H281.82 v-25.868l-1.189-0.907c-0.528-0.402-13.162-9.752-44.375-9.752c-6.821,0-8.179-2.672-8.617-3.536 c-3.909-7.626,6.647-27.353,14.754-38.923h80.044c11.764,0,21.329-9.566,21.329-21.312V21.317C343.76,9.56,334.2,0,322.437,0z M222.204,309.127c2.324,4.558,7.05,6.857,14.052,6.857c23.694,0,35.849,5.705,39.487,7.771v16.598H70.694l-0.006-13.571 c0.318-2.99,7.68-10.797,37.563-10.797c10.391,0,17.12-3.05,20.002-9.085c5.563-11.631-5.951-30.402-12.385-39.464h119.18 C228.714,277.134,216.56,298.114,222.204,309.127z M163.162,245.08c0-5.536,4.501-10.04,10.052-10.04 c5.54,0,10.043,4.498,10.043,10.04c0,5.548-4.504,10.052-10.043,10.052C167.663,255.12,163.162,250.628,163.162,245.08z M325.487,222.321H20.948V22.137h304.54V222.321z"/></g></g></g></g>
                            </svg>
                        </p>},
                        {value: 'linux', label: <p className="flex justify-between items-center">
                            Linux
                            <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none"><path fill="#202020" d="M13.338 12.033c-.1-.112-.146-.319-.197-.54-.05-.22-.107-.457-.288-.61v-.001a.756.756 0 00-.223-.134c.252-.745.153-1.487-.1-2.157-.312-.823-.855-1.54-1.27-2.03-.464-.586-.918-1.142-.91-1.963.014-1.254.138-3.579-2.068-3.582-.09 0-.183.004-.28.012-2.466.198-1.812 2.803-1.849 3.675-.045.638-.174 1.14-.613 1.764-.515.613-1.24 1.604-1.584 2.637-.162.487-.24.984-.168 1.454-.023.02-.044.041-.064.063-.151.161-.263.357-.388.489-.116.116-.282.16-.464.225-.183.066-.383.162-.504.395v.001a.702.702 0 00-.077.339c0 .108.016.217.032.322.034.22.068.427.023.567-.144.395-.163.667-.061.865.102.199.31.286.547.335.473.1 1.114.075 1.619.342l.043-.082-.043.082c.54.283 1.089.383 1.526.284a.99.99 0 00.706-.552c.342-.002.717-.146 1.318-.18.408-.032.918.145 1.503.113a.806.806 0 00.068.183l.001.001c.227.455.65.662 1.1.627.45-.036.928-.301 1.315-.762l-.07-.06.07.06c.37-.448.982-.633 1.388-.878.203-.123.368-.276.38-.499.013-.222-.118-.471-.418-.805z"/><path fill="#F8BF11" d="M13.571 12.828c-.007.137-.107.24-.29.35-.368.222-1.019.414-1.434.918-.362.43-.802.665-1.19.696-.387.03-.721-.13-.919-.526v-.002c-.123-.233-.072-.6.031-.987s.251-.785.271-1.108v-.001c.02-.415.044-.776.114-1.055.07-.28.179-.468.373-.575a.876.876 0 01.027-.014c.022.359.2.725.514.804.343.09.838-.204 1.047-.445l.122-.004c.184-.005.337.006.495.143v.001c.121.102.179.296.229.512.05.217.09.453.239.621.287.32.38.534.371.672zM6.592 13.843v.003c-.034.435-.28.672-.656.758-.377.086-.888 0-1.398-.266-.565-.3-1.237-.27-1.667-.36-.216-.045-.357-.113-.421-.238-.064-.126-.066-.345.071-.72v-.001l.001-.002c.068-.209.018-.438-.015-.653-.033-.214-.049-.41.024-.546l.001-.001c.094-.181.232-.246.403-.307.17-.062.373-.11.533-.27l.001-.001h.001c.148-.157.26-.353.39-.492.11-.117.22-.195.385-.196h.005a.61.61 0 01.093.008c.22.033.411.187.596.437l.533.971v.001c.142.296.441.622.695.954.254.333.45.666.425.921z"/><path fill="#D6A312" d="M9.25 4.788c-.043-.084-.13-.164-.28-.225-.31-.133-.444-.142-.617-.254-.28-.181-.513-.244-.706-.244a.834.834 0 00-.272.047c-.236.08-.392.25-.49.342-.02.019-.044.035-.104.08-.06.043-.15.11-.28.208-.117.086-.154.2-.114.332.04.132.167.285.4.417h.001c.145.085.244.2.358.291a.801.801 0 00.189.117c.072.031.156.052.26.058.248.015.43-.06.59-.151.16-.092.296-.204.452-.255h.001c.32-.1.548-.301.62-.493a.324.324 0 00-.008-.27z"/><path fill="#202020" d="M8.438 5.26c-.255.133-.552.294-.869.294-.316 0-.566-.146-.745-.289-.09-.07-.163-.142-.218-.193-.096-.075-.084-.181-.045-.178.066.008.076.095.117.134.056.052.126.12.211.187.17.135.397.266.68.266.284 0 .614-.166.816-.28.115-.064.26-.179.379-.266.09-.067.087-.147.162-.138.075.009.02.089-.085.18-.105.092-.27.214-.403.283z"/><path fill="#ffffff" d="M12.337 10.694a1.724 1.724 0 00-.104 0h-.01c.088-.277-.106-.48-.621-.713-.534-.235-.96-.212-1.032.265-.005.025-.009.05-.011.076a.801.801 0 00-.12.054c-.252.137-.389.386-.465.692-.076.305-.098.674-.119 1.09-.013.208-.099.49-.186.79-.875.624-2.09.894-3.122.19-.07-.11-.15-.22-.233-.328a13.85 13.85 0 00-.16-.205.65.65 0 00.268-.05.34.34 0 00.186-.192c.063-.17 0-.408-.202-.68-.201-.273-.542-.58-1.043-.888-.368-.23-.574-.51-.67-.814-.097-.305-.084-.635-.01-.96.143-.625.51-1.233.743-1.614.063-.046.023.086-.236.567-.232.44-.667 1.455-.072 2.248.016-.564.15-1.14.377-1.677.329-.747 1.018-2.041 1.072-3.073.029.02.125.086.169.11.126.075.221.184.344.283a.85.85 0 00.575.2c.24 0 .427-.079.582-.168.17-.096.304-.204.433-.245.27-.085.486-.235.608-.41.21.83.7 2.027 1.014 2.611.167.31.5.969.643 1.762.091-.002.191.01.299.038.375-.973-.319-2.022-.636-2.314-.128-.124-.135-.18-.07-.177.343.304.795.917.96 1.608.075.315.09.646.01.973.04.017.08.034.12.054.603.293.826.548.719.897z"/><path fill="#E6E6E6" d="M8.04 8.062c-.556.002-1.099.251-1.558.716-.46.464-.814 1.122-1.018 1.888l.061.038v.004c.47.298.805.598 1.012.878.219.296.316.584.223.834a.513.513 0 01-.27.283l-.041.015c.074.097.146.197.213.3.944.628 2.042.396 2.867-.172.08-.278.153-.536.163-.698.021-.415.042-.792.124-1.12.082-.33.242-.63.544-.795.017-.01.034-.015.051-.023a.756.756 0 01.022-.094c-.242-.622-.591-1.14-1.01-1.5-.42-.36-.897-.551-1.382-.554zm2.37 2.155l-.002.005v-.002l.001-.004z"/><path fill="#ffffff" d="M9.278 3.833a1.05 1.05 0 01-.215.656 4.119 4.119 0 00-.218-.09l-.127-.045c.029-.035.085-.075.107-.127a.669.669 0 00.05-.243l.001-.01a.673.673 0 00-.035-.236.434.434 0 00-.108-.184.223.223 0 00-.156-.07H8.57a.228.228 0 00-.151.06.434.434 0 00-.122.175.676.676 0 00-.05.243v.01a.718.718 0 00.009.14 1.773 1.773 0 00-.354-.12 1.196 1.196 0 01-.01-.133v-.013a1.035 1.035 0 01.088-.447.793.793 0 01.25-.328.554.554 0 01.346-.123h.006c.125 0 .232.036.342.116a.78.78 0 01.257.324c.063.138.094.273.097.433l.001.012zM7.388 3.997a1.05 1.05 0 00-.277.125.623.623 0 00.002-.15v-.008a.651.651 0 00-.048-.192.37.37 0 00-.096-.141.158.158 0 00-.119-.045c-.042.004-.077.024-.11.065a.372.372 0 00-.07.156.626.626 0 00-.013.205v.008a.634.634 0 00.048.193.367.367 0 00.116.156l-.102.08-.078.056a.706.706 0 01-.16-.24c-.053-.12-.082-.24-.09-.381v-.001a1.071 1.071 0 01.045-.39.668.668 0 01.167-.292.359.359 0 01.264-.118c.084 0 .158.028.235.09a.68.68 0 01.199.271c.053.12.08.24.089.382v.001c.003.06.003.115-.002.17z"/><path fill="#202020" d="M7.806 4.335c.01.034.065.029.097.045.027.014.05.045.08.046.03.001.076-.01.08-.04.005-.038-.052-.063-.088-.077-.047-.019-.107-.028-.151-.003-.01.005-.021.018-.018.03zM7.484 4.335c-.01.034-.065.029-.096.045-.028.014-.05.045-.081.046-.03.001-.076-.01-.08-.04-.005-.038.052-.063.088-.077.047-.019.108-.028.152-.003.01.005.02.018.017.03z"/></svg>
                        </p>}
                    ]} 
                    defaultValue={'android'} 
                    popupMatchSelectWidth={false}/>
                    {/* icon */}
                </div>

                {/* apps */}
                <div className="flex flex-col items-center justify-between gap-4 flex-wrap mt-5 mb-8 child:shadow-xl child:w-[60%]">
                    <div className="flex rounded-md">
                        <Collapse className="w-full" defaultActiveKey={['1']} accordion={true} items={[
                            {
                                key: 1,
                                label: 
                                <div>
                                <p className="flex flex-row-reverse gap-4 justify-center font-VazirRegular text-base">
                                    v2rayng
                                    <img src="./image/android/v2ray.webp" alt="v2ray" className="size-6" />
                                </p>
                                </div>,
                                children: 
                                <div className="flex flex-col justify-center gap-4 child:font-VazirLight child:text-lg child:text-white">
                                    <button className="bg-purple-600 flex items-center justify-center gap-2 rounded-md">
                                          لینک اتصال
                                        <RxClipboardCopy/>
                                    </button>
                                    <button className="bg-amber-500 flex items-center justify-center gap-2 rounded-md"> 
                                        آموزش برنامه
                                        <FaInfoCircle/>
                                    </button>
                                    <button className="bg-green-500 flex items-center justify-center gap-2 rounded-md">
                                        دانلود برنامه
                                        <FaCloudDownloadAlt/>
                                    </button>
                                </div>,
                                showArrow:false
                            }
                        ]}/>
                    </div>
                </div>
            </div>
        </>
    )
}
