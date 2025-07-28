// src/components/FeatureGrid.jsx

import React from 'react';

const features = [
  { title: "Story Mode", emoji: "🎬" },
  { title: "Bhabhi Mode 18+", emoji: "🔥" },
  { title: "Coin Recharge", emoji: "💰" },
  { title: "Auto-Coach Mode", emoji: "🧠" },
  { title: "ZIP Upload + Download", emoji: "📦" },
  { title: "RunPod Render", emoji: "🎥" },
  { title: "Founder Mode", emoji: "🔒" },
  { title: "Viral Templates", emoji: "💎" },
];

const FeatureGrid = () => {
  return (
    <section className="p-6 bg-zinc-100 min-h-[60vh]">
      <h2 className="text-2xl font-bold text-center mb-6">🚀 Super NOVA Modes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition-all duration-300 text-center text-lg font-semibold cursor-pointer"
          >
            <div className="text-4xl mb-2">{feature.emoji}</div>
            {feature.title}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
