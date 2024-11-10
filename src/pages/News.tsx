import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Calendar, Newspaper, Image } from 'lucide-react';

const News = () => {
  const sections = [
    {
      icon: Calendar,
      title: 'Upcoming Events',
      path: '/news/events',
      description: 'Stay updated with our latest workshops, seminars, and conferences.'
    },
    {
      icon: Newspaper,
      title: 'Newsletter',
      path: '/news/newsletter',
      description: 'Subscribe to our monthly newsletter for industry insights and updates.'
    },
    {
      icon: Image,
      title: 'Gallery',
      path: '/news/gallery',
      description: 'Browse through photos from our past events and activities.'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="News & Events"
        subtitle="Stay updated with the latest from SAGE"
        backgroundImage="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sections.map(({ icon: Icon, title, path, description }) => (
              <Link 
                key={path}
                to={path}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-[#006AAD] rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;