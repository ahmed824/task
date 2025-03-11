import React from 'react';

export default function Container({ children }) {
  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg">
      {children}
    </div>
  );
}