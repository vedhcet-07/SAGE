import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { BookOpen, Video, Users, GraduationCap, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: 'Courses',
      path: '/services/courses',
      description: 'Comprehensive RF and wireless technology courses for all skill levels.'
    },
    {
      icon: Video,
      title: 'Tutorials',
      path: '/services/tutorials',
      description: 'In-depth video tutorials on specific RF and wireless topics.'
    },
    {
      icon: Users,
      title: 'Workshops',
      path: '/services/workshops',
      description: 'Hands-on workshops for practical experience in RF technologies.'
    },
    {
      icon: GraduationCap,
      title: 'Training',
      path: '/services/training',
      description: 'Customized corporate training programs for teams.'
    },
    {
      icon: Headphones,
      title: 'Consulting',
      path: '/services/consulting',
      description: 'Expert consulting services for RF and wireless projects.'
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Our Services"
        subtitle="Comprehensive RF and wireless technology solutions"
        backgroundImage="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ icon: Icon, title, path, description }) => (
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

export default Services;