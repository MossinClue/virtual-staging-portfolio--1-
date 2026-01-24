import React, { useState } from 'react';
import { ImageComparison } from './ImageComparison';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 101,
    category: 'Commercial',
    roomType: 'Retail Space',
    beforeImage: 'https://cdn.discordapp.com/attachments/1464662012067053703/1464665535047532880/unnamed.png?ex=69764b93&is=6974fa13&hm=35d484eb58f0624d7a445ceffb567db75c1b42a2492f0308d9ee577d1538e09c&', 
    afterImage: 'https://cdn.discordapp.com/attachments/1464662012067053703/1464665652857016504/staged_store.jpg?ex=69764baf&is=6974fa2f&hm=8b8cc8dd2baaaa748f09ae46b76843da881be1b78ff0a49c0d09637ed06fca86&',
    description: 'General clothing store'
  },
  {
    id: 1,
    category: 'Residential',
    roomType: 'Living Room',
    beforeImage: 'https://cdn.discordapp.com/attachments/1464662012067053703/1464665351689076767/image_luxury_before.jpg?ex=69764b68&is=6974f9e8&hm=376598ee97706f9277118f3b0156fff17c594274c7712870e582c7971595cdb2&',
    afterImage: 'https://cdn.discordapp.com/attachments/1464662012067053703/1464664874071359672/image_luxury_after.png?ex=69764af6&is=6974f976&hm=77ca81a937136b91c249665ba0982f86dc9357c3214141ed0875a6fce7717916&',
    description: 'Luxurious Living Room'
  },
  {
    id: 2,
    category: 'Residential',
    roomType: 'Bedroom',
    beforeImage: 'https://cdn.discordapp.com/attachments/1464662012067053703/1464664012393414820/bedroom1_before_1.png?ex=69764a28&is=6974f8a8&hm=226551b6b9433a8ab2d0e9f108d9c8978f48c9a8a69b178d82c1518573dce903&',
    afterImage: 'https://cdn.discordapp.com/attachments/1464662012067053703/1464664060082786587/bedroom1_after.png?ex=69764a34&is=6974f8b4&hm=dfa7b31318cc1194b4b4cf71b2578297f5b61c3308eb95c7f24f04b5f5dd6c41&',
    description: 'Modern Bedroom'
  },

  {
    id: 4,
    category: 'Commercial',
    roomType: 'Clinic',
    beforeImage: 'https://cdn.discordapp.com/attachments/1464662012067053703/1464662101506396253/medical_waiting_before.png?ex=69764861&is=6974f6e1&hm=8ec8166ff7bc9e879b4c5409c8941fe6f60b27c415f4eb48237fde465ff91777&',
    afterImage: 'https://cdn.discordapp.com/attachments/1464662012067053703/1464662337087733803/medical_waiting_after.jpeg?ex=69764899&is=6974f719&hm=8a785f54cf36df96a833ac842f9969af1994a5cccede2bf4fde4bfdf15569a41&',
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