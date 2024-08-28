// src/components/DeleteRecipeButton.jsx
import { useRecipeStore } from '../store/recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();  // Initialize useNavigate

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/');  // Navigate back to the homepage or recipe list
  };

  return (
    <button onClick={handleDelete}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
