import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Flag, Target, Award, Users, Zap, Globe } from 'lucide-react';

const Goals = () => {
  const goals = [
    {
      icon: Target,
      title: 'Educational Excellence',
      description:
        'Provide world-class training programs in RF and wireless technologies.',
    },
    {
      icon: Award,
      title: 'Industry Leadership',
      description:
        'Establish SAGE as the go-to resource for RF technology expertise.',
    },
    {
      icon: Users,
      title: 'Community Building',
      description:
        'Create a global network of RF professionals and enthusiasts.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description:
        'Drive technological advancement through research and development.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description:
        'Expand our educational programs to reach students worldwide.',
    },
  ];

  return (
    <div>
      <PageHeader
        title="Our Goals"
        subtitle="Strategic objectives driving our mission forward"
        backgroundImage="https://images.pexels.com/photos/163444/sport-treadmill-tor-route-163444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?auto=format&fit=crop&q=80"
      />

      <section
        className="py-20"
        style={{
          backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="w-20 h-20 bg-[#FB6B31] rounded-full flex items-center justify-center mb-8 mx-auto">
              <Flag className="w-10 h-10 text-white" />
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our strategic goals are designed to advance the field of RF and
              wireless technologies while creating lasting impact through
              education and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {goals.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 bg-[#006AAD] rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Goals;
