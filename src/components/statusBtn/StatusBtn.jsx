export default function StatusBtn({title , bg , text}) {
  return (
    <p className={`max-w-max mx-auto py-1 px-2 rounded-md bg-${bg} text-${text}`}>{title}</p>
  )
}
