import { Collapse } from "antd";
import { Carousel } from 'antd';
import { useState } from "react";
import { BiSolidOffer } from "react-icons/bi";
import BuySubscription from "../../components/buySubscription/BuySubscription";
export default function Plans() {
  const [showVPNService, setShowVPNService] = useState(false);

  const handleBuySubscription = () => {
    setShowVPNService(true);
  };

  const handleDismissVPNService = () => {
    setShowVPNService(false);
  };
  const suggestedSub = [
    {
      key: 0,
      label:
      <div className="flex items-center gap-2">
        <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.739 8.875c-0.186-0.264-0.489-0.422-0.812-0.422h-3.117l-6.41-5.463c-0.78-0.78-2.047-0.781-2.828 0l-6.302 5.463h-2.566l-1.607-5.54c-0.63-2.182-2.127-2.417-2.741-2.417h-4.284c-0.549 0-0.993 0.445-0.993 0.993s0.445 0.993 0.993 0.993h4.283c0.136 0 0.549 0 0.831 0.974l5.527 20.311c0.12 0.428 0.511 0.724 0.956 0.724h13.499c0.419 0 0.793-0.262 0.934-0.657l4.758-14.053c0.11-0.304 0.064-0.643-0.122-0.907zM19.986 4.404l4.751 4.050h-9.504zM25.47 22.506h-12.046l-3.161-12.066h19.253zM23.5 26.504c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5zM14.5 26.504c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5c0-1.381-1.119-2.5-2.5-2.5z"></path>
        </svg>
      <p className="font-VazirMedium font-extrabold text-lg">
        اشتراک های پیشنهادی
      </p>
      </div>,
      children:
        <Carousel autoplay arrows={true} dots={false} className="my-2 w-[80%] m-auto rounded-lg shadow-md">
            <div className="child:pt-3 mx-[0.1px] text-center customBlurSuggest rounded-lg shadow-md bg-zinc-50" dir="rtl">
              {/* volume and date of subscription */}
              <p className="font-VazirMedium font-semibold text-xl">
                ۴۰ گیگ 
              </p>
              <p className="font-VazirMedium font-semibold text-xl">
                یک ماه 
              </p>
              {/* price of subscription */}
              <p className="font-VazirRegular text-lg">۲.۰۰۰ تومان</p>
              {/* Button */}
              <button className="bg-purple-500 text-white p-2 my-3 rounded-md font-VazirLight font-medium w-[90%] ">خرید اشتراک</button>
            </div>
            <div className="child:pt-3 mx-[0.1px] text-center customBlurSuggest rounded-lg shadow-md bg-zinc-50" dir="rtl">
              {/* volume and date of subscription */}
              <p className="font-VazirMedium font-semibold text-xl">
                ۷۰ گیگ 
              </p>
              <p className="font-VazirMedium font-semibold text-xl">
                یک ماه 
              </p>
              {/* price of subscription */}
              <p className="font-VazirRegular text-lg">۷۰.۰۰۰ تومان</p>
              {/* Button */}
              <button className="bg-purple-500 text-white p-2 my-3 rounded-md font-VazirLight font-medium w-[90%] ">خرید اشتراک</button>
            </div>
        </Carousel>,
      showArrow:false
    }
  ]
  const buySub = [
    {
      key: 1,
      label:
      <p className="flex items-center gap-2 font-VazirMedium font-extrabold text-lg">
        <svg fill="#000000" width="20px" height="20px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M 22.853516 6.0078125 C 20.164121 6.0816133 18.078828 6.8123281 16.048828 7.5175781 C 13.877828 8.2715781 11.828234 8.9827188 8.9902344 9.0117188 C 7.0932344 9.0417187 5.1931719 8.7143594 3.3261719 8.0683594 L 2 7.609375 L 2 24.691406 L 2.6660156 24.927734 C 4.4050156 25.542734 6.183125 25.897422 7.953125 25.982422 C 8.234125 25.995422 8.5092969 26.001953 8.7792969 26.001953 C 11.792297 26.001953 14.098938 25.202687 16.335938 24.429688 C 18.693937 23.613688 20.918125 22.843328 23.953125 22.986328 C 25.527125 23.061328 27.112016 23.379687 28.666016 23.929688 L 30 24.402344 L 30 7.3144531 L 29.341797 7.0742188 C 27.616797 6.4492188 25.834922 6.0945781 24.044922 6.0175781 C 23.634422 5.9993281 23.237715 5.9972695 22.853516 6.0078125 z M 22.908203 7.9941406 C 23.247131 7.9836484 23.595781 7.9837969 23.957031 7.9980469 C 24.330995 8.0142703 24.705197 8.0481553 25.078125 8.0917969 C 25.344924 9.1855072 26.323979 10 27.5 10 C 27.671 10 27.838 9.9812188 28 9.9492188 L 28 19.050781 C 27.838 19.018781 27.671 19 27.5 19 C 26.264201 19 25.245058 19.898153 25.042969 21.076172 C 24.710892 21.041393 24.378543 21.017795 24.046875 21.001953 C 20.631875 20.851953 18.113688 21.710687 15.679688 22.554688 C 13.318688 23.372687 11.081828 24.145953 8.0488281 24.001953 C 7.6729998 23.983858 7.2965195 23.94781 6.9199219 23.902344 C 6.650967 22.811694 5.67385 22 4.5 22 C 4.329 22 4.162 22.018781 4 22.050781 L 4 12.949219 C 4.162 12.981219 4.329 13 4.5 13 C 5.7444763 13 6.7671584 12.088686 6.9589844 10.898438 C 7.6438975 10.970039 8.3294829 11.011452 9.0117188 11 C 12.176719 10.968 14.478078 10.166578 16.705078 9.3925781 C 18.665953 8.7100781 20.535709 8.0675859 22.908203 7.9941406 z M 16 11 C 13.794 11 12 13.243 12 16 C 12 18.757 13.794 21 16 21 C 18.206 21 20 18.757 20 16 C 20 13.243 18.206 11 16 11 z M 16 13 C 17.084 13 18 14.374 18 16 C 18 17.626 17.084 19 16 19 C 14.916 19 14 17.626 14 16 C 14 14.374 14.916 13 16 13 z M 23.5 13 A 1.5 1.5 0 0 0 23.5 16 A 1.5 1.5 0 0 0 23.5 13 z M 8.5 16 A 1.5 1.5 0 0 0 8.5 19 A 1.5 1.5 0 0 0 8.5 16 z"/></svg>
        خرید اشتراک
      </p>,
      children:
      <>
        {/* Subscription period */}
      <p className="font-VazirMedium text-lg text-center mb-3">
        مدت زمان اشتراک
      </p>
      <div className="flex items-center justify-between child:flex child:items-center child:justify-center child:size-10 child:rounded-lg child:bg-purple-500 child:text-white child:shadow-xl child:font-VazirMedium child:min-w-max child:px-2 child:cursor-pointer">
        <div onClick={handleBuySubscription}>
          ۱ ماهه
        </div>
        <div onClick={handleBuySubscription}>
          ۲ ماهه
        </div>
        <div onClick={handleBuySubscription}>
          ۳ ماهه
        </div>
        <div onClick={handleBuySubscription}>
          ۴ ماهه
        </div>
      </div>
      </>,
      showArrow:false
    }
  ]
  const offerSub = [
    {
      key: 2,
      label:
      <p className="flex items-center gap-2 font-VazirMedium font-extrabold text-lg">
        <BiSolidOffer size={20}/>
        اشتراک های تخفیف دار
      </p>,
      children:
      <div className="flex gap-10 my-5 pb-5 overflow-x-scroll customScroll touch-auto max-w-max child:shadow-lg child:min-w-max child:bg-zinc-50  child:h-60 child:p-3 child:rounded-md">
        <div className="flex flex-col items-center justify-between child-last:bg-purple-500">
          <div className="relative"></div>
          <p className="font-VazirMedium font-semibold text-xl">۷۰ گیگ</p>
          <p className="font-VazirMedium font-semibold text-xl">۲ کاربره</p>
          <p className="font-VazirMedium font-semibold text-xl">یک ماه</p>
          <p className="font-VazirRegular text-lg text-red-400 line-through">۲۰,۰۰۰ تومان</p>
          <p className="font-VazirRegular text-lg">۲۰,۰۰۰ تومان</p>
          <button className="text-white p-2 rounded-md font-VazirLight font-medium w-full"> خرید اشتراک </button>
        </div>

        <div className="flex flex-col items-center justify-between child-last:bg-purple-500">
          <div className="relative"></div>
          <p className="font-VazirMedium font-semibold text-xl">۷۰ گیگ</p>
          <p className="font-VazirMedium font-semibold text-xl">۲ کاربره</p>
          <p className="font-VazirMedium font-semibold text-xl">یک ماه</p>
          <p className="font-VazirRegular text-lg text-red-400 line-through">۲۰,۰۰۰ تومان</p>
          <p className="font-VazirRegular text-lg">۲۰,۰۰۰ تومان</p>
          <button className="text-white p-2 rounded-md font-VazirLight font-medium w-full"> خرید اشتراک </button>
        </div>

        <div className="flex flex-col items-center justify-between child-last:bg-purple-500">
          <div className="relative"></div>
          <p className="font-VazirMedium font-semibold text-xl">۷۰ گیگ</p>
          <p className="font-VazirMedium font-semibold text-xl">۲ کاربره</p>
          <p className="font-VazirMedium font-semibold text-xl">یک ماه</p>
          <p className="font-VazirRegular text-lg text-red-400 line-through">۲۰,۰۰۰ تومان</p>
          <p className="font-VazirRegular text-lg">۲۰,۰۰۰ تومان</p>
          <button className="text-white p-2 rounded-md font-VazirLight font-medium w-full"> خرید اشتراک </button>
        </div>

        <div className="flex flex-col items-center justify-between child-last:bg-purple-500">
          <div className="relative"></div>
          <p className="font-VazirMedium font-semibold text-xl">۷۰ گیگ</p>
          <p className="font-VazirMedium font-semibold text-xl">۲ کاربره</p>
          <p className="font-VazirMedium font-semibold text-xl">یک ماه</p>
          <p className="font-VazirRegular text-lg text-red-400 line-through">۲۰,۰۰۰ تومان</p>
          <p className="font-VazirRegular text-lg">۲۰,۰۰۰ تومان</p>
          <button className="text-white p-2 rounded-md font-VazirLight font-medium w-full"> خرید اشتراک </button>
        </div>

        <div className="flex flex-col items-center justify-between child-last:bg-purple-500">
          <div className="relative"></div>
          <p className="font-VazirMedium font-semibold text-xl">۷۰ گیگ</p>
          <p className="font-VazirMedium font-semibold text-xl">۲ کاربره</p>
          <p className="font-VazirMedium font-semibold text-xl">یک ماه</p>
          <p className="font-VazirRegular text-lg text-red-400 line-through">۲۰,۰۰۰ تومان</p>
          <p className="font-VazirRegular text-lg">۲۰,۰۰۰ تومان</p>
          <button className="text-white p-2 rounded-md font-VazirLight font-medium w-full"> خرید اشتراک </button>
        </div>
      </div>,
      showArrow: false
    }
  ]
  return (
    <div className="pb-24 flex flex-col justify-between">
    {/* Suggested subscriptions */}
    <Collapse items={suggestedSub} activeKey={0} className="my-5"/>
    {/* Buy subscriptions */}
    <Collapse items={buySub} activeKey={1} className="my-5"/>
    {showVPNService && (
        <BuySubscription onDismiss={handleDismissVPNService} />
      )}
    {/* Special subscription discounts */}
    <Collapse items={offerSub} activeKey={2} className="max-h-fit mt-5"/>
    </div>
  )
}
