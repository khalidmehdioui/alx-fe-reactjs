import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);

  const displayRecipes = filteredRecipes.length ? filteredRecipes : recipes;

  return (
    <div>
      {displayRecipes.map((recipe) => (
        <div key={recipe.id} style={styles.recipeCard}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description.substring(0, 100)}...</p>
          <Link to={`/recipe/${recipe.id}`} style={styles.viewLink}>
            View Details
          </Link>
        </div>
      ))}
      {displayRecipes.length === 0 && <p>No recipes found.</p>}
    </div>
  );
};

const styles = {
  recipeCard: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px 0',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
  viewLink: {
    textDecoration: 'none',
    color: '#007BFF',
    fontWeight: 'bold',
  },
};

export default RecipeList;
