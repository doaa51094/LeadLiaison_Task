import { Skeleton } from 'primereact/skeleton';

const SkeletonCard = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
              
              <Skeleton shape="rectangle" width="75%" height="180px" />
              <div className='w-[75%]'>

              <Skeleton width="65%"  className=" text-start mt-2" />
              <Skeleton width="90%" className="mt-2" />
              </div>
            
      </div>
  
 )
}

export default SkeletonCard