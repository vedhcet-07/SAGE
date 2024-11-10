import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Play, Clock } from 'lucide-react';

const Tutorials = () => {
  const tutorials = [
    {
      title: 'RF Circuit Analysis',
      duration: '45 min',
      thumbnail:
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
      description: 'Learn the fundamentals of RF circuit analysis.',
    },
    {
      title: 'Wireless Protocol Design',
      duration: '60 min',
      thumbnail:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
      description: 'Understanding wireless protocol design principles.',
    },
    {
      title: 'Signal Processing',
      duration: '30 min',
      thumbnail:
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
      description: 'Introduction to digital signal processing.',
    },
  ];

  return (
    <div>
      <PageHeader
        title="Video Tutorials"
        subtitle="Learn at your own pace with our expert-led tutorials"
        backgroundImage="https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?auto=format&fit=crop&q=80"
      />

      <section
        className="py-20"
        style={{
          backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <div
                key={tutorial.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={tutorial.thumbnail}
                    alt={tutorial.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{tutorial.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Clock className="w-4 h-4" />
                    <span>{tutorial.duration}</span>
                  </div>
                  <p className="text-gray-600">{tutorial.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tutorials;
