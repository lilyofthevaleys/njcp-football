import { motion } from 'motion/react';

const athletes = [
  { 
    name: 'ATHLETE 1', 
    position: 'Position', 
    height: '0\'0"', 
    weight: '0 lbs',
    stats: { 
      stat1: '0', 
      stat2: '0',
      stat3: '0%',
      stat4: '0'
    },
    bio: 'Athlete bio will appear here.'
  },
  { 
    name: 'ATHLETE 2', 
    position: 'Position', 
    height: '0\'0"', 
    weight: '0 lbs',
    stats: { 
      stat1: '0', 
      stat2: '0',
      stat3: '0%',
      stat4: '0'
    },
    bio: 'Athlete bio will appear here.'
  },
  { 
    name: 'ATHLETE 3', 
    position: 'Position', 
    height: '0\'0"', 
    weight: '0 lbs',
    stats: { 
      stat1: '0', 
      stat2: '0',
      stat3: '0%',
      stat4: '0'
    },
    bio: 'Athlete bio will appear here.'
  },
  { 
    name: 'ATHLETE 4', 
    position: 'Position', 
    height: '0\'0"', 
    weight: '0 lbs',
    stats: { 
      stat1: '0', 
      stat2: '0',
      stat3: '0%',
      stat4: '0'
    },
    bio: 'Athlete bio will appear here.'
  },
  { 
    name: 'ATHLETE 5', 
    position: 'Position', 
    height: '0\'0"', 
    weight: '0 lbs',
    stats: { 
      stat1: '0', 
      stat2: '0',
      stat3: '0%',
      stat4: '0'
    },
    bio: 'Athlete bio will appear here.'
  },
  { 
    name: 'ATHLETE 6', 
    position: 'Position', 
    height: '0\'0"', 
    weight: '0 lbs',
    stats: { 
      stat1: '0', 
      stat2: '0',
      stat3: '0%',
      stat4: '0'
    },
    bio: 'Athlete bio will appear here.'
  },
];

export function AthletesPage() {
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
            <span className="text-white">OUR </span>
            <span className="text-[#b30000]">ATHLETES</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto px-6">
            Meet the elite athletes defining excellence on and off the field
          </p>
        </motion.div>
      </section>

      {/* Athletes Grid */}
      <section className="bg-black py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {athletes.map((athlete, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-[#2d2d2d] rounded-lg overflow-hidden cursor-pointer"
                >
                  {/* Image Placeholder */}
                  <div className="relative h-80 overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
                    <div className="text-center text-gray-600 z-10">
                      <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                      <p className="font-['Bebas_Neue'] text-xl">Upload Photo</p>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                    
                    {/* Overlay Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-['Bebas_Neue'] text-3xl text-white mb-2">
                        {athlete.name}
                      </h3>
                      <p className="text-[#b30000] text-lg mb-4">
                        {athlete.position} • {athlete.height} • {athlete.weight}
                      </p>
                      <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {athlete.bio}
                      </p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="p-6 space-y-3">
                    {Object.entries(athlete.stats).slice(0, 2).map(([key, value], i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-white capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <span className="text-[#b30000] font-bold">{value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Submit Bio CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 30px rgba(179, 0, 0, 0.6)' 
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#b30000] text-white px-12 py-4 rounded-lg font-['Bebas_Neue'] text-2xl tracking-wide"
            >
              Submit Athlete Bio
            </motion.button>
            <p className="text-gray-400 mt-4">
              Are you an NJCP athlete? Submit your profile to be featured
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
