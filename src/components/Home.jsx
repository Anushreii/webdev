import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500">
      <h1 className="text-4xl font-bold text-white mb-4">Spotify Song Downloader</h1>
      <Link
        to="/search"
        className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-200"
      >
        Search for Songs
      </Link>
    </div>
  );
}

export default Home;
