import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronsLeftRight } from 'lucide-react';

interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
}

export const ImageComparison: React.FC<ImageComparisonProps> = ({ beforeImage, afterImage, alt }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    }
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleInteractionStart = () => setIsDragging(true);
  const handleInteractionEnd = () => setIsDragging(false);

  useEffect(() => {
    document.addEventListener('mouseup', handleInteractionEnd);
    document.addEventListener('touchend', handleInteractionEnd);
    return () => {
      document.removeEventListener('mouseup', handleInteractionEnd);
      document.removeEventListener('touchend', handleInteractionEnd);
    };
  }, []);

  return (
    <div 
      className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-lg select-none group cursor-ew-resize bg-slate-100"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleInteractionStart}
      onTouchMove={handleTouchMove}
      onTouchStart={handleInteractionStart}
    >
      {/* Background Image (After - Staged) */}
      <img
        src={afterImage}
        alt={`${alt} After`}
        className="absolute top-0 left-0 w-full h-full object-cover"
        draggable={false}
      />
      
      {/* Label After */}
      <div className="absolute top-4 right-4 bg-black/50 text-white text-xs font-medium px-2 py-1 rounded backdrop-blur-sm z-10 pointer-events-none">
        Staged
      </div>

      {/* Foreground Image (Before - Empty) - Clipped */}
      <div 
        className="absolute top-0 left-0 h-full w-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt={`${alt} Before`}
          className="absolute top-0 left-0 h-full max-w-none object-cover"
          style={{ width: containerRef.current ? containerRef.current.offsetWidth : '100%' }}
          draggable={false}
        />
         {/* Label Before */}
         <div className="absolute top-4 left-4 bg-black/50 text-white text-xs font-medium px-2 py-1 rounded backdrop-blur-sm z-10 pointer-events-none">
            Original
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-8 h-8 rounded-full shadow-md flex items-center justify-center text-slate-600 hover:scale-110 transition-transform">
          <ChevronsLeftRight size={16} />
        </div>
      </div>
    </div>
  );
};