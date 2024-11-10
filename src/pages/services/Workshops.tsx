import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Calendar, MapPin, Users } from 'lucide-react';

const Workshops = () => {
  const workshops = [
    {
      title: 'RF Design Workshop',
      date: 'March 15-16, 2024',
      location: 'San Francisco, CA',
      capacity: '20 participants',
      description: 'Hands-on workshop covering RF circuit design and testing.',
    },
    {
      title: '5G Implementation',
      date: 'April 5-6, 2024',
      location: 'Boston, MA',
      capacity: '15 participants',
      description: 'Practical implementation of 5G technologies.',
    },
    {
      title: 'Antenna Design',
      date: 'May 10-11, 2024',
      location: 'Austin, TX',
      capacity: '18 participants',
      description: 'Workshop on antenna design and optimization.',
    },
  ];

  return (
    <div>
      <PageHeader
        title="Workshops"
        subtitle="Join our hands-on workshops led by industry experts"
        backgroundImage="https://images.pexels.com/photos/9301156/pexels-photo-9301156.jpeg?auto=compress&cs=tinysrgb&w=600?auto=format&fit=crop&q=80"
      />

      <section
        className="py-20"
        style={{
          backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.map((workshop) => (
              <div
                key={workshop.title}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold mb-4">{workshop.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4 text-[#006AAD]" />
                    <span>{workshop.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 text-[#006AAD]" />
                    <span>{workshop.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4 text-[#006AAD]" />
                    <span>{workshop.capacity}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{workshop.description}</p>
                <button className="bg-[#006AAD] text-white px-6 py-2 rounded-lg hover:bg-[#35A9EF] transition-colors w-full">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshops;
