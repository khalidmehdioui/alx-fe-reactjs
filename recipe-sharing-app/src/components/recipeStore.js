import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],

  addRecipe: (newRecipe) => set((state) => {
    console.log("Adding recipe:", newRecipe); // Debug log
    return { recipes: [...state.recipes, newRecipe] };
  }),

  deleteRecipe: (id) => set((state) => {
    console.log("Deleting recipe with ID:", id); // Debug log
    return { recipes: state.recipes.filter(recipe => recipe.id !== id) };
  }),

  updateRecipe: (updatedRecipe) => set((state) => {
    console.log("Updating recipe:", updatedRecipe); // Debug log
    return {
      recipes: state.recipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    };
  }),
}));

export { useRecipeStore };
