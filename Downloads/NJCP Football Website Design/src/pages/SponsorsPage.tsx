import { motion } from 'motion/react';
import svgPaths from "../imports/svg-h92xdwox63";

const sponsorTiers = [
  {
    name: 'PLATINUM',
    price: '$50,000+',
    color: '#EAB308',
    borderColor: '#EAB308',
    icon: svgPaths.pb1b1880,
    viewBox: '0 0 41 36',
    benefits: [
      'Logo on jerseys',
      'Stadium naming rights',
      'VIP game access',
      'Social media features',
      'Exclusive events',
    ],
  },
  {
    name: 'GOLD',
    price: '$25,000+',
    color: '#FACC15',
    borderColor: '#FACC15',
    icon: svgPaths.p33e12200,
    viewBox: '0 0 36 36',
    benefits: [
      'Logo on equipment',
      'Website placement',
      'Game day recognition',
      'Newsletter features',
    ],
  },
  {
    name: 'SILVER',
    price: '$10,000+',
    color: '#9CA3AF',
    borderColor: '#9CA3AF',
    icon: svgPaths.p2069e940,
    viewBox: '0 0 41 36',
    benefits: [
      'Program booklet ads',
      'Website listing',
      'Social media mentions',
      'Season tickets',
    ],
  },
  {
    name: 'BRONZE',
    price: '$5,000+',
    color: '#EA580C',
    borderColor: '#EA580C',
    icon: svgPaths.p15b5b400,
    viewBox: '0 0 27 36',
    benefits: [
      'Website listing',
      'Program recognition',
      'Community support',
      'Tax benefits',
    ],
  },
];

export function SponsorsPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-[#2d2d2d]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10 px-6"
        >
          <h1 className="font-['Bebas_Neue'] text-6xl lg:text-8xl mb-4">
            <span className="text-white">OUR </span>
            <span className="text-[#b30000]">SPONSORS</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto">
            Partner with us to build the next generation of champions
          </p>
        </motion.div>
      </section>

      {/* Sponsor Tiers */}
      <section className="bg-[#2d2d2d] py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsorTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -15,
                  scale: 1.05,
                  boxShadow: `0 25px 50px ${tier.color}40`
                }}
                className="bg-black rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer"
                style={{ borderColor: tier.borderColor }}
              >
                {/* Icon */}
                <div className="flex justify-center pt-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg 
                      width="40" 
                      height="36" 
                      viewBox={tier.viewBox}
                      fill="none"
                    >
                      <path d={tier.icon} fill={tier.color} />
                    </svg>
                  </motion.div>
                </div>

                {/* Tier Name */}
                <div className="p-6 text-center">
                  <h3 
                    className="font-['Bebas_Neue'] text-3xl mb-6"
                    style={{ color: tier.color }}
                  >
                    {tier.name}
                  </h3>

                  {/* Benefits */}
                  <ul className="space-y-3 mb-8">
                    {tier.benefits.map((benefit, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="text-gray-300 text-sm"
                      >
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div 
                    className="font-bold text-2xl"
                    style={{ color: tier.color }}
                  >
                    {tier.price}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 40px rgba(179, 0, 0, 0.8)'
              }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(179, 0, 0, 0.3)',
                  '0 0 40px rgba(179, 0, 0, 0.5)',
                  '0 0 20px rgba(179, 0, 0, 0.3)',
                ]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#b30000] text-white px-12 py-4 rounded-lg font-['Bebas_Neue'] text-2xl tracking-wide"
            >
              BECOME A SPONSOR
            </motion.button>
            <p className="text-gray-400 mt-4">
              Contact us to discuss custom sponsorship opportunities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Sponsor Section */}
      <section className="bg-black py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Bebas_Neue'] text-5xl lg:text-6xl text-center mb-16"
          >
            <span className="text-white">WHY </span>
            <span className="text-[#b30000]">SPONSOR US?</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Community Impact',
                description: 'Support youth development and give back to the community while gaining brand visibility.',
              },
              {
                title: 'Brand Exposure',
                description: 'Reach thousands of engaged families, athletes, and fans throughout the season.',
              },
              {
                title: 'Tax Benefits',
                description: 'Enjoy tax-deductible contributions while supporting a registered non-profit organization.',
              },
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  y: -10,
                  backgroundColor: 'rgba(179, 0, 0, 0.05)'
                }}
                className="bg-[#2d2d2d] rounded-lg p-8 transition-all"
              >
                <h3 className="font-['Bebas_Neue'] text-3xl text-[#b30000] mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Sponsors Section */}
      <section className="bg-[#2d2d2d] py-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Bebas_Neue'] text-5xl lg:text-6xl text-center mb-16"
          >
            <span className="text-white">THANK YOU TO OUR </span>
            <span className="text-[#b30000]">SPONSORS</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="bg-black rounded-lg p-8 flex items-center justify-center h-32 cursor-pointer"
              >
                <span className="text-gray-600 font-['Bebas_Neue'] text-2xl">
                  SPONSOR LOGO
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
