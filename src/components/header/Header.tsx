import { useEffect, useState } from "react";
import CategorySelector from "./CategorySelector";

const Header = () => {
  
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
     <CategorySelector/>
    </div>
  );
};

export default Header;
