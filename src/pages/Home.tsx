import React from 'react';
import { ArrowRight, Radio, Zap, Users, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [coursesRef, coursesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const testimonials = [
    {
      name: 'Dr. Reema Thareja',
      role: 'RF Engineer at SpaceX',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      quote:
        "SAGE's RF design course transformed my understanding of wireless technologies. The practical approach and expert guidance were invaluable.",
    },
    {
      name: 'Abhishek Banerjee',
      role: 'Senior Systems Engineer',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      quote:
        'The workshops provided hands-on experience that directly applied to my work in 5G implementation. Highly recommended!',
    },
    {
      name: 'Srushti Bijjur',
      role: 'Technical Director',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      quote:
        'The consulting services from SAGE helped our team overcome complex RF challenges. Their expertise is unmatched.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <video
            src="https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 relative z-10 text-white"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            Advancing Wireless Innovation
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Leading the future of RF and wireless technologies through expert
            training, consulting, and innovative solutions.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#FB6B31] hover:bg-[#35A9EF] text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors flex items-center gap-2"
            onClick={() => (window.location.href = '/services/courses')}
          >
            Explore Our Courses
            <ArrowRight />
          </motion.button>
        </motion.div>
      </section>
      

      {/* Features Section */}
      <motion.section
        ref={featuresRef}
        className="py-20"
        style={{
          backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
        }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#006AAD]"
          >
            Why Choose SAGE?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {[
              {
                icon: Radio,
                title: 'Expert Knowledge',
                description:
                  'Industry-leading expertise in RF and wireless technologies, backed by years of practical experience.',
              },
              {
                icon: Zap,
                title: 'Cutting-Edge Training',
                description:
                  'Comprehensive courses and workshops designed to keep you ahead in the rapidly evolving tech landscape.',
              },
              {
                icon: Users,
                title: 'Industry Network',
                description:
                  'Connect with leading professionals and organizations in the RF and wireless technology sector.',
              },
            ].map((feature, index) => (
              <div className="hover:scale-110 transition-transform duration-500">
                {' '}
                <motion.div
                  key={feature.title}
                  variants={cardVariants}
                  initial="hidden"
                  animate={featuresInView ? 'visible' : 'hidden'}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow transform hover:scale-110 transition-transform duration-1000"
                >
                  <div className="w-16 h-16 bg-[#006AAD] rounded-lg flex items-center justify-center mb-6 hover:scale-110 transition-transform duration-500">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 ">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Latest Courses Section */}
      <motion.section
        ref={coursesRef}
        className="py-20"
        style={{
          backgroundImage: 'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)',
        }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={coursesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#006AAD]"
          >
            Featured Courses
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate={coursesInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    src="https://i.ibb.co/PcpkX0X/istockphoto-1274417553-612x612.jpg?auto=format&fit=crop&q=80&w=800"
                    alt="Course"
                    className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-2">
                    {index === 0
                      ? 'RF Design Fundamentals'
                      : index === 1
                      ? 'Wireless Communication'
                      : 'Microwave Engineering'}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {index === 0
                      ? 'Master the basics of RF circuit design and analysis.'
                      : index === 1
                      ? 'Understand wireless communication principles.'
                      : 'Learn microwave engineering essentials.'}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-[#006AAD] font-bold hover:text-[#35A9EF] transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section ref={testimonialsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#006AAD]"
          >
            What Our Students Say
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={cardVariants}
                initial="hidden"
                animate={testimonialsInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="bg-[#006AAD] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Advance Your RF Knowledge?
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto">
              Join our community of RF professionals and take your career to the
              next level with our expert-led courses and workshops.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FB6B31] hover:bg-[#35A9EF] text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors flex items-center gap-2 mx-auto"
              onClick={() => (window.location.href = '/services/courses')}
            >
              Get Started Today
              <ArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
