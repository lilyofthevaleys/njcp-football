import { motion } from "motion/react";

const coaches = [
  {
    name: "COACH 1",
    title: "Position",
    experience: "Experience details",
    stats: [
      { label: "Stat 1", value: "0" },
      { label: "Stat 2", value: "0%" },
    ],
  },
  {
    name: "COACH 2",
    title: "Position",
    experience: "Experience details",
    stats: [
      { label: "Stat 1", value: "0" },
      { label: "Stat 2", value: "0%" },
    ],
  },
  {
    name: "COACH 3",
    title: "Position",
    experience: "Experience details",
    stats: [
      { label: "Stat 1", value: "0" },
      { label: "Stat 2", value: "0%" },
    ],
  },
  {
    name: "COACH 4",
    title: "Position",
    experience: "Experience details",
    stats: [
      { label: "Stat 1", value: "0" },
      { label: "Stat 2", value: "0%" },
    ],
  },
  {
    name: "COACH 5",
    title: "Position",
    experience: "Experience details",
    stats: [
      { label: "Stat 1", value: "0" },
      { label: "Stat 2", value: "0%" },
    ],
  },
  {
    name: "COACH 6",
    title: "Position",
    experience: "Experience details",
    stats: [
      { label: "Stat 1", value: "0" },
      { label: "Stat 2", value: "0%" },
    ],
  },
];

export function CoachesPage() {
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
            <span className="text-[#b30000]">COACHES</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto px-6">
            Elite coaching staff dedicated to developing
            champions
          </p>
        </motion.div>
      </section>

      {/* Coaches Grid */}
      <section className="bg-black py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coaches.map((coach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{
                    y: -10,
                    background:
                      "linear-gradient(135deg, rgba(179, 0, 0, 0.1) 0%, rgba(0, 0, 0, 1) 100%)",
                  }}
                  className="bg-[#2d2d2d] rounded-lg overflow-hidden transition-all duration-500"
                >
                  {/* Profile Image Placeholder */}
                  <div className="flex justify-center pt-8">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="relative"
                    >
                      <div className="w-24 h-24 rounded-full bg-[#1a1a1a] flex items-center justify-center ring-4 ring-[#b30000] ring-opacity-50 group-hover:ring-opacity-100 transition-all">
                        <svg
                          className="w-12 h-12 text-gray-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                    </motion.div>
                  </div>

                  {/* Coach Info */}
                  <div className="p-6 text-center">
                    <h3 className="font-['Bebas_Neue'] text-3xl text-white mb-2">
                      {coach.name}
                    </h3>
                    <p className="text-[#b30000] text-lg mb-4">
                      {coach.title}
                    </p>
                    <p className="text-gray-300 text-sm mb-6">
                      {coach.experience}
                    </p>

                    {/* Stats */}
                    <div className="space-y-3 border-t border-gray-700 pt-6">
                      {coach.stats.map((stat, i) => (
                        <div
                          key={i}
                          className="flex justify-between items-center"
                        >
                          <span className="text-white">
                            {stat.label}
                          </span>
                          <motion.span
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.2 }}
                            className="text-[#b30000] font-bold"
                          >
                            {stat.value}
                          </motion.span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="bg-[#2d2d2d] py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="font-['Bebas_Neue'] text-5xl lg:text-6xl mb-8">
              <span className="text-white">COACHING </span>
              <span className="text-[#b30000]">PHILOSOPHY</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              At NJCP Football, our coaching staff is committed
              to developing not just great athletes, but
              exceptional individuals. We combine proven
              techniques with innovative strategies to maximize
              each player's potential both on and off the field.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Our holistic approach focuses on technical skill
              development, mental toughness, physical
              conditioning, and character building. We prepare
              our athletes for success at the next level and
              beyond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              { title: "Technical Excellence", icon: "🎯" },
              { title: "Mental Toughness", icon: "💪" },
              { title: "Character Building", icon: "⭐" },
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-black rounded-lg p-8 text-center"
              >
                <div className="text-6xl mb-4">
                  {pillar.icon}
                </div>
                <h3 className="font-['Bebas_Neue'] text-3xl text-[#b30000]">
                  {pillar.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}