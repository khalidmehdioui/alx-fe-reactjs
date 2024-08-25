// src/components/RecipeList.jsx
import React, { useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
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
              <Link to={`/recipe/${recipe.id}`}>View Details</Link>
              {/* Add a link to view the recipe details */}
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