import { useEffect, useState } from "react";

const Header = () => {
    const [categories, setCategories] = useState<string[]>([]);
    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const response = await fetch('https://fakestoreapi.com/products/categories');
            const data = await response.json();
            setCategories(data);
          } catch (error) {
            console.error('Error fetching categories:', error);
          }
        };
    
        fetchCategories();
      }, []);
  return (
    <div className="flex lg:flex-row flex-col lg:gap-0 gap-3 justify-between">
      <div>
        <h2 className="text-black text-xl leading-6 font-medium">
          Shop by Category
        </h2>
        <p className="text-gray-500 pt-2">
          Discover the perfect products for your needs.
        </p>
      </div>
      <div className="flex lg:flex-row flex-col gap-4">
      {categories.map((category) => (
         <button key={category} className="px-3 capitalize whitespace-nowrap h-[40px] w-full border border-gray-300 rounded-[5px] shadow-sm focus:bg-black focus:text-gray-100 text-black text-base">
         {category} 
       </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
