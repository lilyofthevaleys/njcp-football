import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

interface StatsCounterProps {
  end: number;
  label: string;
  duration?: number;
  suffix?: string;
}

export function StatsCounter({ end, label, duration = 2, suffix = '' }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuad = (t: number) => t * (2 - t);
      const currentCount = Math.floor(easeOutQuad(progress) * (end - startValue) + startValue);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <div className="font-['Bebas_Neue'] text-5xl lg:text-6xl text-[#b30000] mb-2">
        {count}{suffix}
      </div>
      <div className="text-gray-300 text-lg">
        {label}
      </div>
    </motion.div>
  );
}
