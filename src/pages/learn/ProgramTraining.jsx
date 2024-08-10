import { Link, useParams } from 'react-router-dom';
import {training} from '../../AppData'
export default function ProgramTraining() {
    const location = useParams()
    const path = location.name
    const results = training.find(app => {
        return app.name === path
    })
    // console.log(results.src);
  return (
    <div className='my-10 pb-20'>
        {/* app title */}
        <p className='text-center font-VazirBold text-xl'>آموزش برنامه ی {path}</p>
        {/* app pictures */}
        <div className='pt-4 flex flex-col items-center justify-center gap-6 w-full child:flex-1 child:w-[70%]'>
            {
                results.src.map( (result , index) => {
                    return(
                        <>
                        <div key={results.id} className='border shadow-md shadow-purple-300 bg-zinc-100 rounded-md p-3'>
                            {/* number */}
                            <p className='text-center text-3xl text-blue-600 mb-3'>{index+1}</p>
                            {/* image */}
                            <img src={result.picture} className='w-48 m-auto' loading='lazy'/>
                            {/* title */}
                            <p className='text-center my-3 text-blue-600 font-VazirMedium text-base'>{result.title}</p>
                            {/* discription */}
                            <p className='font-VazirLight font-bold text-sm tracking-wide leading-6'>{result.dis}</p>
                        </div>
                        </>
                    )
                })
            }
        </div>
        {/* back to lear page */}
        <Link to='/learn' className='bg-purple-500 text-white flex items-center justify-center p-1 my-5 rounded-lg'>بازگشت به آموزش</Link>
    </div>
  )
}
