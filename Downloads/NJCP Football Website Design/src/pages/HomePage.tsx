import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { StatsCounter } from '../components/StatsCounter';
import heroImage from "figma:asset/2de93076e8a456dc5079b987c35c83c730c39ebb.png";
import teamImage from "figma:asset/201b7db957b0fc1e1b9b308200dc7425af1323de.png";
import njcpLogo from "figma:asset/3f7cd96ea4fb2c9a658f5d297144dcc8ca9f7a65.png";
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function HomePage() {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 1.1]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with parallax */}
        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
          <img
            src={heroImage}
            alt="Football action"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-['Bebas_Neue'] text-6xl md:text-8xl lg:text-9xl mb-6"
          >
            <span className="text-white">BUILD</span>{' '}
            <span className="text-[#b30000]">CHAMPIONS</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
          >
            Elite football training, mentorship, and pathways to college success
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(179, 0, 0, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#b30000] text-white px-8 py-4 rounded-lg font-['Bebas_Neue'] text-2xl tracking-wide"
            >
              Join NJCP
            </motion.button>
            <Link to="/athletes">
              <motion.button
                whileHover={{ scale: 1.05, borderColor: '#b30000' }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-['Bebas_Neue'] text-2xl tracking-wide hover:bg-white/10 transition-colors"
              >
                Meet Our Athletes
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#2d2d2d] py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <StatsCounter end={250} label="Active Athletes" suffix="+" />
            <StatsCounter end={89} label="College Commits" />
            <StatsCounter end={12} label="Championship Titles" />
            <StatsCounter end={15} label="Expert Coaches" />
          </div>
        </div>
      </section>

      {/* Featured Athletes Preview */}
      <section className="bg-black py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Bebas_Neue'] text-5xl lg:text-6xl text-center mb-16"
          >
            <span className="text-white">OUR </span>
            <span className="text-[#b30000]">ATHLETES</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'ATHLETE 1', position: 'Position • Height • Weight', stat1: 'Stat 1', stat2: 'Stat 2' },
              { name: 'ATHLETE 2', position: 'Position • Height • Weight', stat1: 'Stat 1', stat2: 'Stat 2' },
              { name: 'ATHLETE 3', position: 'Position • Height • Weight', stat1: 'Stat 1', stat2: 'Stat 2' },
            ].map((athlete, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(179, 0, 0, 0.3)' }}
                className="bg-[#2d2d2d] rounded-lg overflow-hidden cursor-pointer transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                    <p className="font-['Bebas_Neue'] text-xl">Upload Athlete Photo</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-['Bebas_Neue'] text-2xl text-white mb-1">{athlete.name}</h3>
                    <p className="text-[#b30000]">{athlete.position}</p>
                  </div>
                </div>
                <div className="p-6 flex justify-between">
                  <span className="text-white text-sm">{athlete.stat1}</span>
                  <span className="text-white text-sm">{athlete.stat2}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/athletes">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(179, 0, 0, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#b30000] text-white px-12 py-4 rounded-lg font-['Bebas_Neue'] text-2xl tracking-wide"
              >
                View All Athletes
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={teamImage}
            alt="Team huddle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Bebas_Neue'] text-5xl lg:text-7xl mb-6"
          >
            <span className="text-white">READY TO </span>
            <span className="text-[#b30000]">DOMINATE?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-xl mb-12 max-w-2xl mx-auto"
          >
            Join the elite ranks of NJCP Football and take your game to the next level
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(179, 0, 0, 0.8)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#b30000] text-white px-12 py-4 rounded-lg font-['Bebas_Neue'] text-2xl tracking-wide"
          >
            Get Started Today
          </motion.button>
        </div>
      </section>
    </div>
  );
}
