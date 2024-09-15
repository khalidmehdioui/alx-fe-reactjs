import { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Recipe title is required.';
    if (!ingredients || ingredients.split('\n').length < 2) newErrors.ingredients = 'Please enter at least two ingredients.';
    if (!steps) newErrors.steps = 'Preparation steps are required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log({ title, ingredients, steps });
      alert('Recipe submitted successfully!');
      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors({});
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 shadow-md rounded-md bg-white">
      <h2 className="text-2xl font-bold mb-6">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Recipe Title</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Ingredients (each ingredient on a new line)</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            rows="4"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Preparation Steps</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            rows="4"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200 shadow-md"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;