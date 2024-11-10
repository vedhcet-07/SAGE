import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Users, Target, Eye, Flag } from 'lucide-react';

const About = () => {
  const sections = [
    {
      title: 'Our Team',
      path: '/about/team',
      icon: Users,
      description:
        'Meet our expert team of RF and wireless technology professionals.',
    },
    {
      title: 'Mission',
      path: '/about/mission',
      icon: Target,
      description: 'Discover our purpose and what drives us forward.',
    },
    {
      title: 'Vision',
      path: '/about/vision',
      icon: Eye,
      description: 'Learn about our aspirations and future goals.',
    },
    {
      title: 'Goals',
      path: '/about/goals',
      icon: Flag,
      description: 'Explore our strategic objectives and milestones.',
    },
  ];

  return (
    <div>
      <PageHeader
        title="About Us"
        subtitle="Leading the future of RF and wireless technologies through innovation and education."
      />

      <section
        className="py-20"
        style={{
          backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.map(({ title, path, icon: Icon, description }) => (
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

export default About;
