import  { useEffect, useState } from "react";
import { getSingleProduct } from "../../Data";
import { useParams } from "react-router-dom";
import { Skeleton } from 'primereact/skeleton';
import { setLoading } from "../../redux/features/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface Product {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
}

const ProductDetails = () => {
  const [loading, setLoading] = useState<boolean>(true);
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product>({
        id: 0,
        title: "",
        price: "",
        category: "",
        description: "",
        image: "",
    });
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      setLoading(true);
        getSingleProduct(id)
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((error) => {
                setError("Failed to load product details");
            });
            
          }, []);
          console.log(loading);

    return (
        <div>
      
            {loading ? (
              <div className="h-screen flex justify-center items-center">

                <div className=" grid grid-cols-1 sm:grid-cols-2  gap-5 mt-12 w-[80vw]">
                <Skeleton shape="rectangle" width="100%" height="400px" />
                    <div className="flex flex-col justify-center">
                    <Skeleton width="50%" className="mt-5" />
                    <Skeleton width="70%" className="mt-5" />
                    <Skeleton width="30%" className="mt-5" />
                    <Skeleton width="80%" className="mt-5" />
                    <Skeleton width="50%" className="mt-5" />
                    </div>
              </div>
                </div>
            )  : (
                <div className="w-full flex justify-center items-center lg:h-screen shadow-md">
                    <div className="lg:flex justify-between items-center  lg:border border-gray-200 lg:w-[88%] w-[90%] lg:p-12 lg:shadow lg:rounded-[10px]">
                        <div className="lg:w-[25%] justify-center items-center lg:mb-0 mb-3">
                            <img src={product?.image} alt={product?.title} className="w-full h-full" />
                        </div>
                        <div className="lg:w-[60%]">
                            <p className="font-light text-[25px]  text-[#6c7885]">
                                <span className="font-semibold">Title : </span>{product?.title}
                            </p>
                            <p className="font-light text-[25px]  text-[#6c7885]">
                                <span className="font-semibold">Category : </span>{product?.category}
                            </p>
                            <p className="font-light text-[25px]  text-[#6c7885]">
                                <span className="font-semibold">Description : </span>{product?.description}
                            </p>
                            <p className="font-light text-[25px]  text-[#6c7885]">
                                <span className="font-semibold">Price : </span>{product?.price}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
