import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: '5G Innovation Summit',
      date: 'March 20, 2024',
      time: '9:00 AM - 5:00 PM',
      location: 'San Francisco, CA',
      capacity: '200 attendees',
      image:
        'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80',
      description:
        'Join industry leaders for a day of insights into 5G technology.',
    },
    {
      title: 'RF Design Workshop',
      date: 'April 15, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Boston, MA',
      capacity: '50 attendees',
      image:
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
      description:
        'Hands-on workshop focusing on RF circuit design principles.',
    },
    {
      title: 'Wireless Tech Conference',
      date: 'May 10, 2024',
      time: '9:00 AM - 6:00 PM',
      location: 'Austin, TX',
      capacity: '300 attendees',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
      description:
        'Annual conference showcasing the latest in wireless technology.',
    },
  ];

  return (
    <div>
      <PageHeader
        title="Upcoming Events"
        subtitle="Join us at our upcoming events and conferences"
        backgroundImage="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=600?auto=format&fit=crop&q=80"
      />

      <section
        className="py-20"
        style={{
          backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div
                key={event.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4 text-[#006AAD]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4 text-[#006AAD]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4 text-[#006AAD]" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4 text-[#006AAD]" />
                      <span>{event.capacity}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  <button className="bg-[#006AAD] text-white px-6 py-2 rounded-lg hover:bg-[#35A9EF] transition-colors w-full">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
