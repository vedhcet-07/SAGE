import React from 'react';
import PageHeader from '../../components/PageHeader';
import { Mail, Send } from 'lucide-react';

const Newsletter = () => {
  const newsletters = [
    {
      date: 'February 2024',
      title: 'RF Technology Trends',
      preview:
        'Latest developments in 5G technology and upcoming industry events.',
    },
    {
      date: 'January 2024',
      title: 'Industry Insights',
      preview: 'Expert analysis of wireless communication market trends.',
    },
    {
      date: 'December 2023',
      title: 'Year in Review',
      preview:
        'Highlighting major achievements and breakthroughs in RF technology.',
    },
  ];

  return (
    <div>
      <PageHeader
        title="Newsletter"
        subtitle="Stay informed with our monthly newsletter"
        backgroundImage="https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=600?auto=format&fit=crop&q=80"
      />

      <section
        className="py-20"
        style={{
          backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
        }}
      >
        <div className="container mx-auto px-4">
          {/* Subscribe Section */}
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-16">
            <div className="w-16 h-16 bg-[#006AAD] rounded-lg flex items-center justify-center mb-6 mx-auto">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Get monthly updates on RF technology trends, industry news, and
              upcoming events.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#006AAD]"
              />
              <button className="bg-[#006AAD] text-white px-6 py-2 rounded-lg hover:bg-[#35A9EF] transition-colors flex items-center gap-2">
                Subscribe
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Past Newsletters */}
          <h3 className="text-3xl font-bold text-center mb-8">Past Issues</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsletters.map((newsletter) => (
              <div
                key={newsletter.title}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <p className="text-[#006AAD] font-semibold mb-2">
                  {newsletter.date}
                </p>
                <h4 className="text-xl font-bold mb-3">{newsletter.title}</h4>
                <p className="text-gray-600 mb-4">{newsletter.preview}</p>
                <button className="text-[#006AAD] font-semibold hover:text-[#35A9EF] transition-colors">
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
