// TrendingMode.jsx
import React from 'react';
import Layout from '../../layout/Layout';

const TrendingMode = () => {
  return (
    <Layout>
      <div className="p-6 text-center">
        <h1 className="text-4xl font-bold mb-4 text-purple-600">🔥 Trending Mode</h1>
        <p className="text-lg text-gray-700 mb-6">
          See what’s going viral right now. Browse AI-generated content based on current trends,
          hashtags, popular requests, and viral formats.
        </p>

        <div className="mt-10 p-6 rounded-xl border border-dashed border-purple-300">
          <p className="text-purple-500 text-xl">Coming Soon: Real-time trending content powered by Jarvis AI.</p>
        </div>
      </div>
    </Layout>
  );
};

export default TrendingMode;
