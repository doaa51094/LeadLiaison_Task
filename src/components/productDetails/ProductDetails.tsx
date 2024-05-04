import { useEffect, useState } from "react";
import { getSingleProduct } from "../../Data";
import { Link, useParams } from "react-router-dom";
import { Skeleton } from "primereact/skeleton";
import img from "../../assets/turn-back.png";
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
      ) : (
        <div className="w-full flex flex-col justify-center items-center lg:min-h-screen shadow-md lg:py-0 py-5">
          <div className="lg:w-[88%] w-[90%] h-[50px] mt-3">
            <Link to={"/"}>
              <img
                src={img}
                alt="back button"
                className="lg:w-[50px] w-[40px] p-2 rounded-md bg-black"
              />
            </Link>
          </div>

          <div className="lg:flex justify-between items-center  lg:border border-gray-200 lg:w-[88%] w-[90%] lg:p-12 lg:shadow lg:rounded-[10px]">
            <div className="lg:w-[30%]  p-9 w-full bg-red flex justify-center items-center lg:mb-0 mb-3">
              <img
                src={product?.image}
                alt={product?.title}
                className="w-full h-full"
              />
            </div>
            <div className="lg:w-[60%]">
            <span className="font-semibold  text-[25px] ">Title : </span>
              <p className="font-light text-[18px]  text-[#6c7885]">
                
                {product?.title}
              </p>
              <span className="font-semibold  text-[25px] ">Category : </span>
              <p className="font-light text-[18px]  text-[#6c7885]">
                {product?.category}
              </p>
              <span className="font-semibold  text-[25px] ">Description : </span>
              <p className="font-light text-[18px]  text-[#6c7885]">
                {product?.description}
              </p>
              <span className="font-semibold  text-[25px] ">Price : </span>

              <p className="font-light text-[18px]  text-[#6c7885]">
                {product?.price}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
