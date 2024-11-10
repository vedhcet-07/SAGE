import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Eye, Globe, Zap, Network } from 'lucide-react';

const Vision = () => {
  const visionPoints = [
    {
      icon: Globe,
      title: 'Global Impact',
      description:
        "Becoming the world's leading resource for RF and wireless technology education.",
    },
    {
      icon: Zap,
      title: 'Technological Advancement',
      description: 'Driving innovation in wireless communication technologies.',
    },
    {
      icon: Network,
      title: 'Connected Future',
      description:
        'Shaping the future of wireless connectivity and communication.',
    },
  ];

  return (
    <div>
      <PageHeader
        title="Our Vision"
        subtitle="Shaping the future of wireless technology education and innovation"
        backgroundImage="https://images.pexels.com/photos/946727/pexels-photo-946727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?auto=format&fit=crop&q=80"
      />

      <section
        className="py-20"
        style={{
          backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="w-20 h-20 bg-[#006AAD] rounded-full flex items-center justify-center mb-8 mx-auto">
              <Eye className="w-10 h-10 text-white" />
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              SAGE envisions a world where access to high-quality RF and
              wireless technology education is universal, enabling innovations
              that connect people and technologies in ways previously
              unimaginable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visionPoints.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-xl shadow-lg p-8">
                <div className="w-16 h-16 bg-[#35A9EF] rounded-lg flex items-center justify-center mb-6">
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

export default Vision;
