import { useParams } from "react-router-dom";
import "./CategoryPage.css";

export const CategoryPage = () => {
  const { categoryName } = useParams();
  
  return (
    <div className="category-container">
      <h1>Categoría: {categoryName}</h1>
    </div>
  );
};
