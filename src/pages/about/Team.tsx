import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Dr. Prasad Shastry',
      role: 'Chief Technology Officer',
      image:
        'https://shastryassociates.com/wp-content/uploads/2022/12/Picture12.png?auto=format&fit=crop&q=80',
      bio: 'Ph.D. in Electrical Engineering with 15+ years of experience in RF design.',
      linkedin: '#',
      email: 'sarah@sage-tech.com',
    },
    {
      name: 'Dr. Raghavan',
      role: 'Lead RF Engineer',
      image:
        'https://shastryassociates.com/wp-content/uploads/2022/12/Picture2.jpg?auto=format&fit=crop&q=80',
      bio: 'Specialist in 5G technologies and wireless communication systems.',
      linkedin: '#',
      email: 'michael@sage-tech.com',
    },
    {
      name: 'Ms. Scarlet Daoud',
      role: 'Research Director',
      image:
        'https://shastryassociates.com/wp-content/uploads/2022/12/Picture11.jpg?auto=format&fit=crop&q=80',
      bio: 'Leading research initiatives in next-generation wireless technologies.',
      linkedin: '#',
      email: 'james@sage-tech.com',
    },
  ];

  return (
    <div>
      <PageHeader
        title="Our Team"
        subtitle="Meet the experts behind SAGE's innovative solutions"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
      />

      <section
        className="py-20"
        style={{
          backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
        }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-[#006AAD] font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 mb-6">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a
                      href={member.linkedin}
                      className="text-[#006AAD] hover:text-[#35A9EF] transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-[#006AAD] hover:text-[#35A9EF] transition-colors"
                    >
                      <Mail className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
