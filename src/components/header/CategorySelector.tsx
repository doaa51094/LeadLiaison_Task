import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../../redux/features/dataSlice";
import { fetchCategories } from "../../Data";
interface Category {
  category: string;
}
const CategorySelector = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const dispatch = useDispatch();
  const selectCategory = (data: Category) => {
    dispatch(
      setCategory(data.category)
    );
  };
    useEffect(() => {
      fetchCategories().then((data) => {
        setCategories(data);
      });
          }, []);
  return (
    <div className="flex lg:flex-row flex-col gap-4">
    {categories?.map((category) => (
       <button
       key={category}
       className="px-3 capitalize whitespace-nowrap h-[40px] w-full border border-gray-300 rounded-[5px] shadow-sm focus:bg-black focus:text-gray-100 text-black text-base"
       onClick={() => selectCategory({ category })}
     >
       {category}
     </button>
      ))}
    </div>  )
}

export default CategorySelector