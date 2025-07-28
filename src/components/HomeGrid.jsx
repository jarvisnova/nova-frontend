import React from 'react';
import Link from 'next/link';

const ModeCard = ({ title, description, path, color }) => (
  <Link href={path}>
    <div className={`home-card ${color} text-white`}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </Link>
);

const HomeGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {/* ✅ Existing Modes */}
      <ModeCard
        title="Knowledge Mode"
        description="AI answers factual, educational, and science topics."
        path="/mode/knowledge"
        color="bg-gradient-to-br from-blue-400 to-blue-600"
      />
      <ModeCard
        title="Trending Mode"
        description="See what’s going viral right now"
        path="/mode/trending"
        color="bg-gradient-to-br from-yellow-400 to-orange-500"
      />

      {/* ✅ Auto-Coach Mode */}
      <ModeCard
        title="Auto-Coach Mode"
        description="Learn how to go viral and improve content with AI guidance."
        path="/mode/auto-coach"
        color="bg-gradient-to-br from-purple-500 to-indigo-700"
      />
    </div>
  );
};

export default HomeGrid;
