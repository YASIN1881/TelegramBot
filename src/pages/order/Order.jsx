import { useState } from 'react';
import { Divider, Table , Button , Modal , Select } from 'antd';//TODO remove Button component
import { MdOutlineFactCheck } from "react-icons/md";
import { BsBasket3 } from "react-icons/bs";
import PersianDateTime from '../../components/persianDate&Time/PersianDate&Time';
import PersianNumber from '../../components/persianNumber/PersianNumber';
import StatusBtn from '../../components/statusBtn/StatusBtn';

export default function Order() {
  const [open , setOpen] = useState(false)
  const [loading] = useState(false)
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(10)
  const handlePageSize = (value) => {setPageSize(value)}
  const dataStatus = 'پرداخت شده'

  const columns = [
    {
      align: 'center',
      title: '#',
      dataIndex: 'button',
      filtered: true,
      key: '1',
    },
    {
      align: 'center',
      title: 'تاریخ ایجاد',
      dataIndex: 'data',
      key: '2',
    },
    {
      align: 'center',
      title: 'وضعیت',
      dataIndex: 'subscriptionStatus',
      key: '3',
    },
  ];
  const data = [
    {
      key: '1',
      loading: true,
      button: 
       <>
      <Button
      className='bg-purple-500'
      open={open}
      type="primary" 
      onClick={() => setOpen(true)}>
      <span>فاکتور</span>
      <MdOutlineFactCheck/>
    </Button>
    <Modal
        open={open}
        // title="Title"
        // loading={true}
        footer={null}
        onCancel={() => setOpen(false)}
      >
        <div>
          {/* Header */}
          <div className="custom-shape-divider-top-1721471154">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" fill='#c084fc'>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
          </div>
          {/* Title */}
          <div className='pt-11 flex justify-center'>
            <Divider>
            <BsBasket3 size={20}/>
            </Divider>
          </div>
            <div className='flex justify-center flex-col items-center'>
              {/* subscription name */}
              <p className='text-lg font-bold'>20GB - 1 IP LIMIT</p>
              {/* order number */}
              <p className='text-sm font-light' dir='rtl'>#JEPKMOBBRX8YP1F</p>
            </div>
          {/* Body */}
          <div className='flex justify-between pt-5 flex-row-reverse items-center child:flex child:flex-col child:items-center child:justify-between child:gap-2' style={{ alignItems: 'stretch' }}>
            {/* date */}
            <div>
              <p className='font-VazirLight font-extrabold text-sm'>: تاریخ و زمان</p>
              <PersianDateTime date={'2024/7/21'} time={null}/>
            </div>
            {/* status */}
            <div>
              <p className='font-VazirLight font-extrabold text-sm'>: وضعیت</p>
              {/* {statusSubscription} */}
              <p className='py-1 px-2 rounded-md bg-green-100 text-green-600'>پرداخت شده</p>
            </div>
            {/* Banking portal */}
            <div>
              <p className='font-VazirLight font-extrabold text-sm'>: درگاه</p>
              <p className='font-VazirLight text-lg'>درگاه پرداخت(ریالی)</p>
            </div>
          </div>
          {/* Footer */}
          <div className='pt-5'>
            {/* Title */}
            <p className='text-right font-VazirMedium text-base'>صورت حساب</p>
            {/* Body */}
            <div className='border-2 border-[#efeff6] rounded-lg mt-2 child:flex child:justify-between child:flex-row-reverse child:px-2 child:py-2 child:border-b-2 child-last:border-b-0 child:font-VazirMedium child:text-base'>
              <div>
                <p className='font-VazirMedium text-base'>مبلغ</p>
                <PersianNumber number={220000}/>
              </div>
              <div>
                <p>تخفیف</p>
                <PersianNumber number={0}/>
              </div>
              <div>
                <p>کارمزد درگاه</p>
                <PersianNumber number={0}/>
              </div>
              <div>
                <p>مبلغ پرداخت شده</p>
                <PersianNumber number={220000}/>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      </>,
      data: <PersianDateTime date={'2024/7/21'} time={'۱۶:۲۳:۲۰'}/>,
      subscriptionStatus: 
        (dataStatus === 'پرداخت شده' && <StatusBtn title={'پرداخت شده'} bg={'green-100'} text={'green-600'}/> || dataStatus === 'در حال انتظار' && <StatusBtn title={'در حال انتظار'} bg={'blue-100'} text={'blue-600'}/> || dataStatus === 'لغو شده' && <StatusBtn title={'لغو شده'} bg={'red-100'} text={'red-600'}/>),
      },
    ];

    const newColumns = columns.map((item) => ({
      ...item,
    }));
  return (
    <div className='h-screen'>
     <Divider className='font-VazirMedium text-xl'>
      سوابق سفارشات
     </Divider>
     <Select
     direction='rtl'
    defaultValue={pageSize}
    style={{ width: 120 }}
    onChange={handlePageSize}
    options={[
      {
        value: '10',
        label: '10',
      },
      {
        value: '25',
        label: '25',
      },
      {
        value: '50',
        label: '50',
      },
      {
        value: '100',
        label: '100',
      },
    ]}
    />

      <Table
      loading={loading}
      columns={newColumns}
      scroll={{
        x:true
      }}
      pagination={{
        style:{direction:'ltr'},  
        current: page,
        pageSize: pageSize,
        onChange: (page,pageSize) => {
          setPage(page),
          setPageSize(pageSize)
        }
      }}
      dataSource={data}
      style={{
        marginTop: 24,
      }}
      />
    </div>
  )
}