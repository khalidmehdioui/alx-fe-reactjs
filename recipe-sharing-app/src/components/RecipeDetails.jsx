// src/components/RecipeList.jsx
import  { useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';
import SearchBar from './SearchBar';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  return (
    <div>
      <SearchBar />
      <div>
        {recipes.length > 0 ? (
          recipes.map(recipe => (
            <div key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          ))
        ) : (
          <p>No recipes found</p>
        )}
      </div>
    </div>
  );
};

export default RecipeList;
