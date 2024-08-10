export default function PersianDateTime({date , time}) {
    const persianDate = new Date(date).toLocaleDateString('fa-IR')
  return (
    <div>
      <div className='flex flex-col justify-center items-center child:font-VazirLight child:text-lg'>
        <p>
        {persianDate}
        </p>
        <p>
        {time}
        </p>
        </div>
    </div>
  )
}
