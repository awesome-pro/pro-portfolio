import React from 'react';
import { Award, GitBranch, Trophy, Star, Crown, ChevronRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Badge } from './ui/badge';
import Link from 'next/link';

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Top 1% TypeScript Engineer",
      subtitle: "Global Recognition by Algora",
      description: "Recognised among the elite 1% of TypeScript engineers worldwide for technical skills in and contributions to the developer community.",
      badge: "Global Elite",
      image: '/top1.webp',
      link: 'https://abhinandan.pro/images/algora.png',
    },
    {
      icon: GitBranch,
      title: "CEO Personal Invitation",
      subtitle: "YC-Backed Startup",
      description: "Received a personal offer from the CEO of a Y Combinator-backed startup, for open-source contributions.",
      badge: "Executive Recognition",
      image: '/yc.webp',
      link: 'https://i.postimg.cc/x16VXRx3/offer-message.png',
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-200 to-blue-50/30 dark:from-gray-800 dark:via-slate-700 dark:to-blue-950/20">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <Badge variant={"secondary"} className="py-1 px-3 rounded-full border-blue-200/50 bg-blue-100 dark:bg-blue-950/50 dark:border-blue-800/30 backdrop-blur-sm mb-5">
        
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Achievements</span>
          </Badge>
          
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
            Recognition & Milestones
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Celebrating excellence in software engineering and open-source contributions
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => {
            return (
              <div
                key={index}
                className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-200/50 dark:border-gray-800/50 p-8 hover:border-blue-600 dark:hover:border-blue-600 hover:shadow-xl dark:hover:shadow-blue-600/50 transition-all duration-500"
              >
                {/* Premium gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/30 dark:from-blue-950/30 dark:via-transparent dark:to-purple-950/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Achievement Image */}
                  <div className="relative overflow-hidden rounded-xl mb-6 ring-1 ring-gray-200/50 dark:ring-gray-700/50">
                    <Image 
                      src={achievement.image} 
                      alt={achievement.title} 
                      width={500} 
                      height={200} 
                      className="w-full  object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    
                    {/* Image overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent dark:from-black/40" />
                    
                    {/* Premium badge overlay on image */}
                    
                  </div>
                  <div className="space-y-4 mb-5">
                    <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 text-center bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-center">
                      {achievement.subtitle}
                    </p>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm text-center">
                      {achievement.description}
                    </p>
                  </div>

                  <Link href={achievement.link} target="_blank" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 flex items-center justify-center gap-2">
                     Link to Achievement <ArrowRight className="w-4 h-4" />
                  </Link>

                  {/* Decorative premium elements */}
                  <div className="absolute -top-2 -right-2 w-32 h-32 bg-gradient-to-br from-blue-100/30 via-purple-100/20 to-transparent dark:from-blue-900/20 dark:via-purple-900/10 rounded-full blur-2xl opacity-60" />
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-blue-400/50 dark:via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8">
              Additional Recognition
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              { title: "Amazon ML Summer School 2025", image: "/images/amazon.webp" },
              { title: "2nd Winner in Outlier AI Hackathon", image: "/images/outlier.webp" },
              { title: "Reliance Foundation Scholar", image: "/images/reliance.webp" },
              { title: "IYMC – Gold Honour", image: "/images/iymc.webp" },
              { title: "HDFC Badhate Kadam Scholar", image: "/images/hdfc.webp" }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-200/40 dark:border-slate-600 hover:border-blue-200 dark:hover:border-blue-600 hover:shadow-md dark:hover:shadow-blue-950/10"
              >
                <div className="text-center flex flex-col items-center justify-center">
                  <Image src={item.image} alt={item.title} width={100} height={50} className='rounded-lg mb-5' />
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 leading-snug">
                    {item.title}
                  </p>
                </div>
                
                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-transparent dark:from-blue-950/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div> 
      </div>
    </section>
  );
};

export default Achievements;
