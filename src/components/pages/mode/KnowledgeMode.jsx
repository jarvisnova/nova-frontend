// pages/mode/KnowledgeMode.jsx
import React from 'react';
import Head from 'next/head';

export default function KnowledgeMode() {
  return (
    <>
      <Head>
        <title>Knowledge Mode | JarvisHAI</title>
      </Head>
      <div className="min-h-screen p-8 bg-slate-50">
        <h1 className="text-3xl font-bold mb-4">📘 Knowledge Mode</h1>
        <p className="text-lg">This mode provides factual and educational answers using AI — like a smart encyclopedia.</p>

        <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
          <p className="text-gray-700">⚠️ Coming Soon: In future, you’ll be able to search topics, get factual explanations, historical timelines, science definitions, and more.</p>
        </div>
      </div>
    </>
  );
}
