import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  if (!recipe) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded-lg mb-4" />
      <p className="text-gray-700 mb-6">{recipe.summary}</p>
      
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside">
          {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
        <ol className="list-decimal list-inside">
          {recipe.instructions && recipe.instructions.map((step, index) => (
            <li key={index} className="mb-2">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;