import React from 'react';
import ModeCard from './ModeCard'; // Make sure this exists and is correctly imported

const HomeGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">

      {/* Knowledge Mode */}
      <ModeCard
        title="Knowledge Mode"
        description="AI answers factual, educational, and science topics."
        path="/mode/knowledge"
        color="bg-gradient-to-br from-blue-400 to-blue-600"
      />

      {/* Trending Mode */}
      <ModeCard
        title="Trending Mode"
        description="See what’s going viral right now"
        path="/mode/trending"
        color="bg-gradient-to-br from-yellow-400 to-orange-500"
      />

      {/* Add more ModeCards here as needed */}

    </div>
  );
};

export default HomeGrid;
