import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { CiServer } from "react-icons/ci";

const BuySubscription = ({ onDismiss }) => {
  const [bandwidth, setBandwidth] = useState("5 گیگابایت");
  const [ipLimit, setIpLimit] = useState(1);
  const [offset] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    if (typeof onDismiss === 'function') {
      onDismiss();
    } else {
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      style={{
        transform: `translateY(${offset}px)`,
        transition: 'transform 0.2s ease-out'
      }}
      className="fixed bottom-0 left-0 right-0 bg-zinc-50 shadow-lg rounded-t-[30px] rtl z-[100]"
    >
      <div className="flex flex-col items-center mb-2 pt-2">
        <div className="w-10 h-1 bg-gray-300 rounded-full mb-1"></div>
      </div>
      <div className="relative p-4">
        <div className="flex justify-between items-center mb-4">
          <button onClick={handleDismiss}>
            <IoClose size={24}/>
          </button>
          <span className="text-lg font-VazirMedium font-bold flex items-center">
            سرویس  آرچ نت
          </span>
          1
        </div>
        <h3 className="text-base font-bold font-VazirMedium text-gray-800 flex items-center justify-center">
          اشتراک های یک ماه
        </h3>
        <p className="text-sm font-medium text-gray-500 my-4 flex items-center justify-center">
          سرویس آرچ نت امن و سریع برای تمام نیازهای آنلاین شما
        </p>

        <div className="mb-4">
          <input
            type="range"
            min="0"
            max="3"
            value={["5 گیگابایت", "50 گیگابایت", "100 گیگابایت", "نامحدود"].indexOf(bandwidth)}
            onChange={(e) =>
              setBandwidth(
                ["5 گیگابایت", "50 گیگابایت", "100 گیگابایت", "نامحدود"][e.target.value]
              )
            }
            className="w-full accent-purple-600"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-1 font-semibold">
            <span>5 گیگابایت</span>
            <span>50 گیگابایت</span>
            <span>100 گیگابایت</span>
            <span>نامحدود</span>
          </div>
        </div>

        <div className="flex flex-col-reverse justify-between items-center gap-4 mb-6">
          <div>
            <span className="text-xl font-bold font-VazirLight text-gray-800">۶۷۰,۰۰۰  تومان</span>
            {/* <span className="text-gray-500 line-through mr-2 relative">
              $8.0
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-red-500"></span>
            </span> */}
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className="text-sm text-gray-600 font-medium mb-1 flex items-center">
              <CiServer size={20} className="ml-2" />
              محدودیت IP (دستگاه‌ها)
            </span>
            <div className="flex items-center border border-gray-300 rounded-full">
              <button
                className="px-3 py-1 text-purple-600 text-3xl"
                onClick={() => setIpLimit(Math.max(1, ipLimit - 1))}
              >
                -
              </button>
              <span className="mx-3 text-2xl font-VazirLight ">{ipLimit}</span>
              <button
                className="px-3 py-1 text-purple-600 text-3xl"
                onClick={() => setIpLimit(Math.min(4, ipLimit + 1))}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <button className="w-full bg-purple-600 text-white py-3 rounded-full font-semibold flex items-center justify-center">
          خرید اشتراک 
        </button>
      </div>
    </div>
  );
};

export default BuySubscription;