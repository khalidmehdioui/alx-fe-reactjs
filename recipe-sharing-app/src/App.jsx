import { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const EditRecipeForm = () => {
  const { id } = useParams();
  const history = useHistory();
  const recipe = useRecipeStore((state) => state.getRecipeById(parseInt(id)));
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ id: recipe.id, title, description });
    history.push(`/recipe/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
