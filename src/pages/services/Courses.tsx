import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Clock, Signal, Users, Award } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      title: 'RF Design Fundamentals',
      duration: '12 weeks',
      level: 'Beginner',
      image:
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
      description: 'Master the basics of RF circuit design and analysis.',
    },
    {
      title: '5G Technologies',
      duration: '8 weeks',
      level: 'Advanced',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
      description: 'Deep dive into 5G wireless communication systems.',
    },
    {
      title: 'Antenna Design',
      duration: '10 weeks',
      level: 'Intermediate',
      image:
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
      description: 'Learn advanced antenna design principles.',
    },
  ];

  return (
    <div>
      <PageHeader
        title="Courses"
        subtitle="Comprehensive RF and wireless technology courses"
        backgroundImage="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600?auto=format&fit=crop&q=80"
      />

      <section
        className="py-20"
        style={{
          backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <div
                key={course.title}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">{course.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-[#006AAD]" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Signal className="w-4 h-4 text-[#006AAD]" />
                    <span>{course.level}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{course.description}</p>
                  <button className="bg-[#006AAD] text-white px-6 py-2 rounded-lg hover:bg-[#35A9EF] transition-colors">
                    Learn More
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

export default Courses;
