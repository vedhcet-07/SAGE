import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Target, Award, Users } from 'lucide-react';

const Mission = () => {
  const pillars = [
    {
      icon: Target,
      title: 'Innovation',
      description:
        'Pushing the boundaries of RF and wireless technologies through continuous innovation and research.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description:
        'Maintaining the highest standards in education and consulting services.',
    },
    {
      icon: Users,
      title: 'Community',
      description:
        'Building a strong community of RF professionals and fostering knowledge sharing.',
    },
  ];

  return (
    <div>
      <PageHeader
        title="Our Mission"
        subtitle="Empowering the future of wireless communication through education and innovation"
      />

      <section
        className="py-20"
        style={{
          backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-600 leading-relaxed">
              At SAGE, our mission is to advance the field of RF and wireless
              technologies through comprehensive education, cutting-edge
              research, and expert consulting services. We strive to empower
              professionals and organizations with the knowledge and tools they
              need to succeed in an increasingly connected world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-[#006AAD] rounded-lg flex items-center justify-center mb-6 mx-auto">
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

export default Mission;
