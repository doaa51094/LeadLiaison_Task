export const fetchInCategory = async (category: string) => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Products:', error);
        return null;
    }
};
export const fetchProducts = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      return data
    } catch (error) {
      console.error('Error fetching Products:', error);
    }
  };
export const fetchCategories = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/categories`);
      const data = await response.json();
      return data
    } catch (error) {
      console.error('Error fetching Products:', error);
    }
  };
export const getSingleProduct = async (id:string|undefined) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      return data
    } catch (error) {
      console.error('Error fetching Products:', error);
    }
  };

