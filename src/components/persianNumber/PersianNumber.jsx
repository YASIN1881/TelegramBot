export default function PersianNumber({ number }) {
    // Convert the number to a string and add commas to separate thousands, hundreds, and tens
  const enNumber = number.toString();
  const formattedNumberWithCommas = enNumber.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Replace English digits with Persian digits
  const persianDigits = '۰۱۲۳۴۵۶۷۸۹';
  const persianNumber = formattedNumberWithCommas.replace(/\d/g, (m) => persianDigits[m]);

    return (
        <p className="font-VazirRegular text-lg" dir='rtl'>{persianNumber}  تومان</p>
    )
}
