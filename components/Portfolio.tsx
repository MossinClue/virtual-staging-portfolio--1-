import React, { useState } from 'react';
import { ImageComparison } from './ImageComparison';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 101,
    category: 'Commercial',
    roomType: 'Retail Space',
    beforeImage: 'https://694b8b2ccc4b2872a4f5c04d.imgix.net/unnamed.jpg', 
    afterImage: 'https://694b8b2ccc4b2872a4f5c04d.imgix.net/staged_store.jpg',
    description: 'General clothing store'
  },
  {
    id: 1,
    category: 'Residential',
    roomType: 'Living Room',
    beforeImage: 'https://694b8b2ccc4b2872a4f5c04d.imgix.net/image_luxury_before.jpg',
    afterImage: 'https://694b8b2ccc4b2872a4f5c04d.imgix.net/image_luxury_after.jpg',
    description: 'Luxurious Living Room'
  },
  {
    id: 2,
    category: 'Residential',
    roomType: 'Bedroom',
    beforeImage: 'https://694b8b2ccc4b2872a4f5c04d.imgix.net/bedroom1_before%20(1).png',
    afterImage: 'https://694b8b2ccc4b2872a4f5c04d.imgix.net/bedroom1_after%20(2).png',
    description: 'Modern Bedroom'
  },

  {
    id: 4,
    category: 'Commercial',
    roomType: 'Clinic',
    beforeImage: 'https://694b8b2ccc4b2872a4f5c04d.imgix.net/medical_waiting_before.png',
    afterImage: 'https://694b8b2ccc4b2872a4f5c04d.imgix.net/medical_waiting_after.jpeg',
    description: 'Medical Waiting Room'
  },
];

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'Commercial' | 'Residential'>('Commercial');

  const filteredProjects = projects.filter(p => p.category === filter);

  // Define tabs with display names
  const tabs = [
    { id: 'Commercial', label: 'Commercial Staging' },
    { id: 'Residential', label: 'Residential Staging' }
  ] as const;

  return (
    <section id="portfolio" className="py-20 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Selected Works</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Drag the slider to see the transformation. I focus on neutral, MLS-friendly designs that appeal to the widest range of buyers.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === tab.id
                  ? 'bg-stone-900 text-white shadow-md'
                  : 'bg-stone-200 text-stone-600 hover:bg-stone-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {filteredProjects.map(project => (
            <div key={project.id} className="flex flex-col gap-3">
              <ImageComparison 
                beforeImage={project.beforeImage} 
                afterImage={project.afterImage} 
                alt={project.description} 
              />
              <div className="flex justify-between items-center text-sm">
                <span className="font-medium text-stone-900">{project.description}</span>
                <span className="text-stone-500">{project.roomType}</span>
              </div>
            </div>
          ))}
          {filteredProjects.length === 0 && (
             <div className="col-span-full text-center py-12 text-stone-500">
                No projects found in this category yet.
             </div>
          )}
        </div>
      </div>
    </section>
  );
};