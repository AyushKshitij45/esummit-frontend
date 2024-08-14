import React from 'react';
import '@google/model-viewer';

const RubyTrophy = ({ src, alt = 'Ruby Trophy', style = {} }) => {
  return (
    <div >
    <h1 className="text-4xl font-bold text-center mb-8">The Ruby Trophy</h1>
    <model-viewer
      src={src}
      alt={alt}
      auto-rotate
      camera-controls
      style={{ width: '100%', height: '500px', ...style }}
      shadow-intensity="1"
      exposure="1"
      environment-image="neutral"
      disable-zoom
    ></model-viewer>
    </div>
  );
};

export default RubyTrophy;
