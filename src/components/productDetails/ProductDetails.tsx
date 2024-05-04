import React, { useEffect, useState } from "react";
import { getSingleProduct } from "../../Data";
import { useParams } from "react-router-dom";
interface Product {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
  }
const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product>({
        id: 0,
        title: "",
        price: "",
        category: "",
        description: "",
        image: "",
      });
      
    useEffect(() => {
     
           console.log(id);
            
            getSingleProduct(id).then((data) => {
                setProduct(data);
              });
    
      }, []);
  return (
    <div className="w-full flex justify-center items-center h-screen shadow-md">
     <div className="flex justify-between items-center border border-gray-200 w-[88%] p-12 shadow rounded-[10px]">
     <div className="w-[25%] justify-center items-center">
        <img src={product.image} alt={product.title} className="w-full h-full"/>{" "}
      </div>
      <div className="w-[60%]">
         <p className="font-light text-[25px]  text-[#6c7885]"><span className="font-semibold">Title : </span>{product.title}</p>
        <p className="font-light text-[25px]  text-[#6c7885]"> <span  className="font-semibold">Category : </span>{product.category}</p>
         <p className="font-light text-[25px]  text-[#6c7885]"><span  className="font-semibold">Description : </span>{product.description}</p>
         <p className="font-light text-[25px]  text-[#6c7885]"><span  className="font-semibold">Price : </span>{product.price}</p>
      </div>
     </div>
    </div>
  );
};

export default ProductDetails;
