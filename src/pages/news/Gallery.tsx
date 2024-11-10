import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Image } from 'lucide-react';

const Gallery = () => {
  const images = [
    {
      title: '5G Innovation Summit 2023',
      category: 'Events',
      url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80',
    },
    {
      title: 'RF Design Workshop',
      category: 'Workshops',
      url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
    },
    {
      title: 'Team Building Event',
      category: 'Company',
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
    },
    {
      title: 'Tech Conference 2023',
      category: 'Events',
      url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    },
    {
      title: 'Lab Training Session',
      category: 'Training',
      url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
    },
    {
      title: 'Annual Meeting',
      category: 'Company',
      url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80',
    },
  ];

  return (
    <div>
      <PageHeader
        title="Gallery"
        subtitle="Moments captured at our events and activities"
        backgroundImage="https://images.pexels.com/photos/277054/pexels-photo-277054.jpeg?auto=compress&cs=tinysrgb&w=600?auto=format&fit=crop&q=80"
      />

      <section
        className="py-20"
        style={{
          backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[#FB6B31] text-sm font-semibold mb-1">
                    {image.category}
                  </span>
                  <h3 className="text-white text-xl font-bold">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
