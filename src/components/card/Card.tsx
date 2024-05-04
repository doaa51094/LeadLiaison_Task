import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchInCategory, fetchProducts } from "../../Data";
import { Link } from "react-router-dom";
import SkeletonCard from "../skeleton/SkeletonCard";
interface Product {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

const Card = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(true);
  const [Products, setProducts] = useState<Product[]>([]);
  const { category } = useSelector((state: RootState) => state);

  useEffect(() => {
    setLoading(true);
    if (category === "All") {
      fetchProducts().then((data) => {
        setProducts(data);
        setLoading(false);
      });
    } else {
      fetchInCategory(category).then((data) => {
        setProducts(data);
        setLoading(false);
      });
    }
  }, [category]);
  return (
    <>
   
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5 mt-12" >
        {[...Array(6)].map((_, index) => (
          <div className=""   key={index}>
            <SkeletonCard />
          </div>
        ))}
          
    </div>
  ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-5 mt-12 ">
          {Products?.length > 0 ? (
            Products?.map((ele) => (
              <Link
                to={`/product/${ele?.id}`}
                className=" flex flex-col  items-center gap-5 hover:border border-gray-200 rounded-[10px] py-2 hover:shadow-md"
                key={ele.id}
              >
                <div className="w-[200px]  h-[210px] object-cover">
                  <img
                    src={ele?.image}
                    alt={ele?.title}
                    className="w-full h-full"
                  />
                </div>
                <div className="w-[200px]">
                  <h3 className="text-black text-lg leading-5 font-medium">
                    {ele?.category}
                  </h3>
                  <p className="line-clamp-2 text-gray-500">{ele?.title}</p>
                </div>
              </Link>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      )}
    </>
  );

};

export default Card;
