import { Skeleton } from 'primereact/skeleton';

const SkeletonCard = () => {
  return (
    <div className="">
  
              <Skeleton shape="rectangle" width="100%" height="150px" />
              <Skeleton width="50%"  className="mt-2" />
              <Skeleton width="70%" className="mt-2" />
      </div>
  
 )
}

export default SkeletonCard