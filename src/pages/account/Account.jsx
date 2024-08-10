import { Button , Modal , Collapse , Select} from 'antd';//TODO remove Button component
import { MdSwitchAccount } from "react-icons/md";
import { GrUserExpert } from "react-icons/gr";
import { FaTelegram } from "react-icons/fa";
import { MdOutlinePassword } from "react-icons/md";
import { FaArrowsRotate } from "react-icons/fa6";
import { ImWarning } from "react-icons/im";
export default function Account() {
  let hasAccounts = false;
  let otherAccount = true;
  const { confirm } = Modal;
  const copyValue = (e) => {
    //TODO when click on text copy to clipboard
    //TODO user can't type in input feild
    const copyText = e.target.value
    navigator.clipboard.writeText(copyText)
  }
  const showConfirm = () => {
    confirm({
      icon:null,
      title: 
      <div className='flex items-center justify-center'>
        <ImWarning size={30} color='orange'/>
      </div>,
      content: 
      <p className='font-VazirLight text-base text-center'>
        هشدار: پس از بازنشانی لینک اشتراک، لینک اتصال در همه دستگاه‌های شما بلافاصله نامعتبر می‌شود و نمی‌توان آن را به‌روزرسانی کرد. باید لینک اشتراک را دوباره در همه دستگاه های خود اصلاح کنید. آیا مطمئن هستید که می خواهید لینک اشتراک را بازنشانی کنید؟
      </p>,
      okText: 'ادامه',
      okType: 'danger',
      cancelText: 'لغو',
      onOk() {
        console.log('OK');
      },
    });
  };
  const accounts = [
    {
      label:
      <div className='flex items-center gap-2'>
        <MdSwitchAccount size={20}/>
        <p className='font-VazirMedium font-extrabold text-lg'>اکانت های من</p>
      </div>,
      children:
      <div>
        {
          hasAccounts ? 
          <div className='flex flex-col items-center justify-center gap-4 child-last:w-full'>
            <p className='font-VazirRegular font-extrabold'>در حال حاظر هیچ اکانت جدیدی ندارید</p>
            <button type='primary' className='bg-purple-600 text-white font-VazirLight font-medium rounded-full py-3'>ساخت اکانت جدید</button>
          </div>
          :
          <div className='flex flex-col gap-4 child:font-VazirBold child:text-base'>
          {/* active account */}
          <div className='flex items-center justify-between'>
            <p className='font-VazirRegular font-extrabold'>اکانت فعال </p>
            <input type="text" defaultValue={'test'} onClick={copyValue} className='font-VazirLight font-medium border rounded-md pr-3'/>
          </div>
          {/* If there is another account, show it */}
          {
            otherAccount 
            && 
            (<div className='flex items-center justify-between'>
              <p className='font-VazirRegular font-extrabold'>سایر اکانت ها</p>
              <Select showSearch
              style={{width:200}}
              placeholder="Search to Select"
              filterSort={(optionA,optionB) => (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())} options={[
                {
                  key:1,
                  label:'test1'
                },
                {
                  key:2,
                  label:'test2'
                },
                {
                  key:3,
                  label:'test3'
                },
                {
                  key:4,
                  label:'test4'
                },
                {
                  key:5,
                  label:'test5'
                },

              ]}/>
            </div>)
          }
          <button type='primary' className='bg-purple-600 text-white font-VazirLight font-medium rounded-full py-3'>ساخت اکانت جدید</button>
        </div>
        }
      </div>,
      showArrow: false
    }
  ]
  const account = [
    {
      key: 0,
      label: 
      <div className='flex items-center gap-2'>
        <GrUserExpert size={20}/>
        <p className='font-VazirMedium font-extrabold text-lg'>حساب کاربری فعال</p>
      </div>,
      children:
      <div className='flex flex-col gap-4'>
        {/* telegram ID */}
        <div className='flex justify-between'>
          <p className='font-VazirRegular font-extrabold'>نام کاربری</p>
          <input type="text" defaultValue={'test'} onClick={copyValue} className='font-VazirLight font-medium border rounded-md pr-3'/>
        </div>
        {/* telegram userName */}
        <div className='flex justify-between'>
        <p className='font-VazirRegular font-extrabold'>ایمیل</p>
        <input type="text" defaultValue={'archnet@gmail.com'} onClick={copyValue} className='font-VazirLight font-medium border rounded-md pr-3'/>
        </div>
        <Collapse items={accounts}/>
      </div>,
      showArrow: false
    }
  ]
  const telegram = [
    {
      key: 1,
      label: 
      <div className='flex items-center gap-2'>
        <FaTelegram size={20}/>
        <p className='font-VazirMedium font-extrabold text-lg'>حساب کاربری تلگرام</p>
      </div>,
      children: 
      <div className='flex flex-col gap-4'>
        {/* telegram ID */}
        <div className='flex justify-between'>
          <p className='font-VazirRegular font-extrabold'>آیدی تلگرام</p>
          <input type="text" defaultValue={23495234} onClick={copyValue} className='font-VazirLight font-medium border rounded-md pr-3'/>
        </div>
        {/* telegram userName */}
        <div className='flex justify-between'>
        <p className='font-VazirRegular font-extrabold'>نام کاربری تلگرام </p>
        <input type="text" defaultValue={23495234} onClick={copyValue} className='font-VazirLight font-medium border rounded-md pr-3'/>
        </div>
      </div>,
      showArrow:false
    },
  ]
  const passwordChange = [
    {
      key: 2,
      label: 
      <div className='flex items-center gap-2'>
        <MdOutlinePassword size={20}/>
        <p className='font-VazirMedium font-extrabold text-lg'>تغییر رمز عبور</p>
      </div>,
      children:
      <div>
      <div className='flex flex-col gap-4 child:flex child:flex-col child:gap-4 child:font-VazirBold child:text-base'>
        {/* password */}
        <div>
          <p className='font-VazirRegular font-extrabold'>رمز عبور جدید</p>
          <input type="text" placeholder='رمز عبور جدید را وارد کنید' className='border rounded-md p-3'/>
        </div>
        {/* repeat password */}
        <div>
        <p className='font-VazirRegular font-extrabold'>تکرار رمز عبور جدید</p>
        <input type="text" placeholder='رمز عبور جدید خود را تکرار کنید' className='border rounded-md p-3'/>
        </div>
      </div>
      <Button className='font-VazirLight font-medium flex w-full mt-3' type='primary'>
        بروز رسانی
      </Button>
      </div>,
      showArrow:false
    }
  ]
  const changPassword = [
    {
      key:3,
      label:
      <div className='flex items-center gap-2'>
        <FaArrowsRotate size={20}/>
        <p className='font-VazirMedium font-extrabold text-lg'> بازنشانی لینک</p>
      </div>,
      children:
      <div>
        <Button className='font-VazirLight font-medium border py-3 w-full bg-red-500 text-white' onClick={showConfirm}>بازنشانی لینک</Button>
      </div>,
      showArrow:false
    }
  ]
  return (
    <div className='pt-10 pb-20 child:mb-10'>
      {/* Show inforamtion of account */}
      <Collapse accordion={true} activeKey={0} items={account}/>
      {/* show telegram information */}
      <Collapse accordion={true} activeKey={1} items={telegram}/>
      {/* change password account */}
      <Collapse accordion={true} activeKey={2} items={passwordChange}/>
      {/* chang subscription link */}
      <Collapse accordion={true} activeKey={3} items={changPassword}/>
    </div>
  )
}
