import { AiOutlineLoading3Quarters } from 'react-icons/ai'
function Loading() {
  return (
    <div className='justify-center absolute inset-0 flex'>
        <AiOutlineLoading3Quarters className='animate-spin'/>
    </div>
  )
}


export default Loading