"use client";

import React from 'react';

export default function TestNew() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Test Page Works!</h1>
      <p className="text-xl mb-6">This is a brand new test page created to verify routing.</p>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-3">Current Time</h2>
        <p className="text-gray-700">{new Date().toLocaleString()}</p>
      </div>
    </div>
  );
}