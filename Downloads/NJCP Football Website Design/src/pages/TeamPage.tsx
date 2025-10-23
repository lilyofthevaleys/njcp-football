import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const seasonStats = [
  { label: 'Win Rate', value: 87, color: '#b30000' },
  { label: 'Points Per Game', value: 85, display: '34.2', color: '#b30000' },
  { label: 'Defense Rating', value: 92, color: '#b30000' },
];

const upcomingGames = [
  { opponent: 'vs Titans', date: 'October 28, 2024', time: '7:00 PM' },
  { opponent: '@ Warriors', date: 'November 4, 2024', time: '6:30 PM' },
  { opponent: 'vs Eagles', date: 'November 11, 2024', time: '7:30 PM' },
  { opponent: 'vs Panthers', date: 'November 18, 2024', time: '7:00 PM' },
  { opponent: '@ Lions', date: 'November 25, 2024', time: '6:00 PM' },
];

function ProgressBar({ label, value, display, color }: { label: string; value: number; display?: string; color: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="mb-8">
      <div className="flex justify-between mb-2">
        <span className="text-white">{label}</span>
        <span className="text-white">{display || `${value}%`}</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${value}%` } : {}}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          style={{ backgroundColor: color }}
          className="h-full rounded-full"
        />
      </div>
    </div>
  );
}

export function TeamPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-[#2d2d2d]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="font-['Bebas_Neue'] text-6xl lg:text-8xl mb-4">
            <span className="text-white">TEAM </span>
            <span className="text-[#b30000]">PERFORMANCE</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto px-6">
            Track our journey to excellence through data and dedication
          </p>
        </motion.div>
      </section>

      {/* Stats & Schedule Section */}
      <section className="bg-[#2d2d2d] py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Season Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black rounded-lg p-8"
            >
              <h3 className="font-['Bebas_Neue'] text-4xl text-[#b30000] mb-8">
                Season Stats
              </h3>
              {seasonStats.map((stat, index) => (
                <ProgressBar key={index} {...stat} />
              ))}
            </motion.div>

            {/* Upcoming Games */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-black rounded-lg p-8"
            >
              <h3 className="font-['Bebas_Neue'] text-4xl text-[#b30000] mb-8">
                Upcoming Games
              </h3>
              <div className="space-y-4">
                {upcomingGames.map((game, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02,
                      backgroundColor: 'rgba(179, 0, 0, 0.1)'
                    }}
                    className="bg-[#2d2d2d] rounded-lg p-4 flex justify-between items-center transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-white font-bold mb-1">{game.opponent}</div>
                      <div className="text-gray-400 text-sm">{game.date}</div>
                    </div>
                    <div className="text-[#b30000] font-bold">{game.time}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Highlights */}
      <section className="bg-black py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Bebas_Neue'] text-5xl lg:text-6xl text-center mb-16"
          >
            <span className="text-white">TEAM </span>
            <span className="text-[#b30000]">HIGHLIGHTS</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Offensive Power', 
                stat: '34.2', 
                label: 'Points Per Game',
                description: 'One of the highest scoring offenses in the league'
              },
              { 
                title: 'Defensive Dominance', 
                stat: '92%', 
                label: 'Defense Rating',
                description: 'Shutting down opponents with elite defense'
              },
              { 
                title: 'Championship Caliber', 
                stat: '87%', 
                label: 'Win Rate',
                description: 'Consistent excellence throughout the season'
              },
            ].map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 20px 40px rgba(179, 0, 0, 0.3)'
                }}
                className="bg-[#2d2d2d] rounded-lg p-8 text-center transition-all"
              >
                <h3 className="font-['Bebas_Neue'] text-3xl text-white mb-4">
                  {highlight.title}
                </h3>
                <div className="font-['Bebas_Neue'] text-6xl text-[#b30000] mb-2">
                  {highlight.stat}
                </div>
                <div className="text-gray-400 mb-4">{highlight.label}</div>
                <p className="text-gray-300 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Record Section */}
      <section className="bg-[#2d2d2d] py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="font-['Bebas_Neue'] text-5xl lg:text-7xl mb-4">
              <span className="text-white">CURRENT RECORD: </span>
              <span className="text-[#b30000]">13-2</span>
            </h2>
            <p className="text-gray-300 text-xl">
              Dominating the competition, one game at a time
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
