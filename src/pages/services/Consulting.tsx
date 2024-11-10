import React from 'react';
import PageHeader from '../../components/PageHeader';
import { HeadphonesIcon, Zap, Search, FileText } from 'lucide-react';

const Consulting = () => {
  const services = [
    {
      icon: Search,
      title: 'RF System Analysis',
      description: 'Expert analysis and optimization of RF systems.',
    },
    {
      icon: Zap,
      title: 'Design Review',
      description: 'Comprehensive review of RF and wireless designs.',
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Technical documentation and compliance reports.',
    },
  ];

  return (
    <div>
      <PageHeader
        title="Consulting Services"
        subtitle="Expert guidance for your RF and wireless projects"
        backgroundImage="https://images.pexels.com/photos/27086162/pexels-photo-27086162/free-photo-of-smiling-colleagues-sitting-at-table.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?auto=format&fit=crop&q=80"
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
              <HeadphonesIcon className="w-10 h-10 text-white" />
            </div>
            <p className="text-xl text-gray-600 leading-relaxed">
              Our team of expert consultants provides comprehensive solutions
              for all your RF and wireless technology needs. From system design
              to optimization, we're here to help your projects succeed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map(({ icon: Icon, title, description }) => (
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

export default Consulting;
