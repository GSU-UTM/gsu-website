import React, { useState, useEffect } from 'react';

interface StatProps {
  end: number;
  label: string;
  suffix?: string;
  prefix?: string;
  color: string;
}

function AnimatedStat({ end, label, suffix = '', prefix = '', color }: StatProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center">
      <div className={`text-5xl font-black ${color} mb-2`}>
        {prefix}{count}{suffix}
      </div>
      <div className="text-lg font-medium text-gray-600">{label}</div>
    </div>
  );
}

export function AnimatedStats() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      <AnimatedStat 
        end={150} 
        suffix="+" 
        label="Active Members" 
        color="text-[#fc6520]" 
      />
      <AnimatedStat 
        end={47} 
        suffix="+" 
        label="Startups Launched" 
        color="text-orange-600" 
      />
      <AnimatedStat 
        end={23} 
        suffix="+" 
        label="Success Stories" 
        color="text-red-600" 
      />
      <AnimatedStat 
        end={89} 
        suffix="%" 
        label="Job Placement" 
        color="text-yellow-600" 
      />
    </div>
  );
}