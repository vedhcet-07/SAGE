import React from 'react';
import PageHeader from '../../components/PageHeader';
import { GraduationCap, Building, Clock, Users } from 'lucide-react';

const Training = () => {
  const programs = [
    {
      title: 'Corporate RF Training',
      duration: '4 weeks',
      teamSize: '5-15 people',
      description: 'Customized RF training programs for corporate teams.',
    },
    {
      title: 'Advanced Wireless Systems',
      duration: '6 weeks',
      teamSize: '5-10 people',
      description: 'Comprehensive training in wireless system design.',
    },
    {
      title: 'RF Testing & Measurement',
      duration: '3 weeks',
      teamSize: '5-12 people',
      description: 'Hands-on training in RF testing procedures.',
    },
  ];

  return (
    <div>
      <PageHeader
        title="Corporate Training"
        subtitle="Customized training programs for your team"
        backgroundImage="https://images.pexels.com/photos/9301156/pexels-photo-9301156.jpeg?auto=compress&cs=tinysrgb&w=600?auto=format&fit=crop&q=80"
      />

      <section
        className="py-20"
        style={{
          backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div
                key={program.title}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="w-16 h-16 bg-[#006AAD] rounded-lg flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{program.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{program.teamSize}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <button className="bg-[#006AAD] text-white px-6 py-2 rounded-lg hover:bg-[#35A9EF] transition-colors w-full">
                  Request Info
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Training;
