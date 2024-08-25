import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
         <Router>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <Switch>
          <Route exact path="/" component={RecipeList} />
          <Route path="/add" component={AddRecipeForm} />
          <Route path="/recipe/:id" component={RecipeDetails} />
          <Route path="/edit/:id" component={EditRecipeForm} />
        </Switch>
      </div>
    </Router>
  );

     <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <Switch>
          <Route exact path="/" component={RecipeList} />
          <Route path="/add" component={AddRecipeForm} />
          <Route path="/recipe/:id" component={RecipeDetails} />
          <Route path="/edit/:id" component={EditRecipeForm} />
        </Switch>
      </div>
    </Router>
  );

  <Router>
      <div style={{ padding: '20px' }}>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <FavoritesList />
        <RecommendationsList />
        <Switch>
          <Route exact path="/" component={RecipeList} />
          <Route path="/add" component={AddRecipeForm} />
          <Route path="/recipe/:id" component={RecipeDetails} />
          <Route path="/edit/:id" component={EditRecipeForm} />
        </Switch>
      </div>
    </Router>
  );


    <div>
      <h1>Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
