import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [repos, setRepos] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setUsers([]);

    try {
      const response = await fetchUserData(username, location, repos);
      setUsers(response.data.items);
    } catch (err) {
      setError("Looks like we can't find any users matching your criteria.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">GitHub Advanced User Search</h1>
      <form className="max-w-xl mx-auto space-y-4" onSubmit={handleSearch}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Minimum Repositories"
            value={repos}
            onChange={(e) => setRepos(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      <div className="mt-8">
        {users.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <div key={user.id} className="bg-white p-4 rounded-md shadow-md">
                <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mx-auto" />
                <h3 className="text-lg text-center font-semibold">{user.login}</h3>
                {user.location && <p className="text-center text-gray-600">{user.location}</p>}
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-blue-500 mt-2"
                >
                  View Profile
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
