import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { scrollTo } from '../utils/scroll';

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-56 lg:pb-40 px-6 overflow-hidden flex flex-col items-center text-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#001B3D]/80 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#001B3D]/50 via-[#001B3D]/70 to-[#001B3D] z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&q=80&w=2000" 
          alt="Beautiful horses in nature" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto relative z-20"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-black/30 backdrop-blur-md mb-8">
          <Calendar className="w-4 h-4 text-[#7AA2F7]" />
          <span className="text-[10px] sm:text-xs md:text-sm font-medium tracking-wide uppercase">24-25 сентября 2026 • Абрау-Дюрсо</span>
        </div>
        
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 leading-none shadow-sm">
          ЭКВИСВЕТ
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-[#7AA2F7] font-display font-medium tracking-tight mb-8 drop-shadow-md">
          II Южная конно-ветеринарная конференция
        </p>
        
        <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed font-medium drop-shadow-md">
          Объединяем практикующих ветеринарных врачей и фельдшеров юга России для обмена опытом в лечении и профилактике болезней лошадей.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button onClick={() => scrollTo('register')} className="w-full sm:w-auto bg-[#7AA2F7] hover:bg-white text-[#001B3D] px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_40px_-5px_rgba(122,162,247,0.4)] hover:shadow-[0_0_60px_-5px_rgba(255,255,255,0.6)] flex items-center justify-center gap-2">
            Подать заявку <ChevronRight className="w-5 h-5" />
          </button>
          <button onClick={() => scrollTo('about')} className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-white border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/20 transition-all">
            Подробнее
          </button>
        </div>
      </motion.div>
    </section>
  );
}
