import React, { useState } from "react";
import axios from "axios";

function Search() {
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchSongs = async () => {
    setLoading(true);
    try {
      const options = {
        method: "GET",
        url: "https://api.example.com/search", // Replace with your API endpoint
        params: { query },
        headers: {
          "X-RapidAPI-Key": "YOUR_API_KEY", // Replace with your API key
          "X-RapidAPI-Host": "api.example.com",
        },
      };
      const response = await axios.request(options);
      setSongs(response.data.tracks); // Update based on API response structure
    } catch (error) {
      console.error("Error fetching songs:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Search for Songs</h1>
      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter song or artist name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={fetchSongs}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Search
        </button>
      </div>
      {loading && <p className="text-gray-500">Loading...</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {songs.map((song) => (
          <div
            key={song.id}
            className="p-4 border rounded-lg shadow-md bg-gray-50 hover:bg-gray-100"
          >
            <h3 className="text-lg font-semibold">{song.title}</h3>
            <p className="text-sm text-gray-600">{song.artist}</p>
            <a
              href={song.downloadUrl} // Adjust according to the API response
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 text-blue-500 hover:underline"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
