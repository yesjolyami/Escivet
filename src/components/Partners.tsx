import React from 'react';
import { HeartHandshake, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeIn, stagger, item } from '../utils/animations';

export function Partners() {
  return (
    <section id="partners" className="py-20 lg:py-28 bg-[#f8fafc] text-[#001B3D] px-6 border-t border-[#001B3D]/5">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-12 lg:mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight">Партнёры</h2>
          <p className="text-sm md:text-lg text-[#001B3D]/70 max-w-2xl mx-auto">Организаторы и партнёры, благодаря которым состоялась конференция.</p>
        </motion.div>
        
        <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <motion.a href="#" variants={item} className="bg-white border border-[#001B3D]/10 hover:border-[#7AA2F7]/50 hover:shadow-[0_10px_40px_-10px_rgba(122,162,247,0.3)] transition-all rounded-[2rem] p-6 lg:p-8 aspect-square flex flex-col items-center justify-center text-center group">
            <div className="w-16 h-16 mb-4 rounded-full bg-[#f0f4fd] flex items-center justify-center group-hover:scale-110 transition-transform">
              <HeartHandshake className="w-8 h-8 text-[#7AA2F7]" />
            </div>
            <span className="font-display font-medium text-base lg:text-lg leading-tight text-[#001B3D]">Ветеринарный<br/>патруль</span>
          </motion.a>
          <motion.a href="#" variants={item} className="bg-white border border-[#001B3D]/10 hover:border-[#7AA2F7]/50 hover:shadow-[0_10px_40px_-10px_rgba(122,162,247,0.3)] transition-all rounded-[2rem] p-6 lg:p-8 aspect-square flex flex-col items-center justify-center text-center group">
            <div className="w-16 h-16 mb-4 rounded-full bg-[#f0f4fd] flex items-center justify-center group-hover:scale-110 transition-transform">
              <MapPin className="w-8 h-8 text-[#7AA2F7]" />
            </div>
            <span className="font-display font-medium text-base lg:text-lg leading-tight text-[#001B3D]">Абрау-Дюрсо</span>
          </motion.a>
          <motion.a href="#" variants={item} className="bg-white border border-[#001B3D]/10 hover:border-[#7AA2F7]/50 hover:shadow-[0_10px_40px_-10px_rgba(122,162,247,0.3)] transition-all rounded-[2rem] p-6 lg:p-8 aspect-square flex flex-col items-center justify-center text-center group">
            <div className="w-16 h-16 mb-4 rounded-full bg-[#f0f4fd] flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="text-[#7AA2F7]/50 font-bold text-xl">L</div>
            </div>
            <span className="font-display font-medium text-xs lg:text-sm leading-tight text-[#001B3D]/40 uppercase tracking-widest">Логотип<br/>партнёра</span>
          </motion.a>
          <motion.a href="#" variants={item} className="bg-white border border-[#001B3D]/10 hover:border-[#7AA2F7]/50 hover:shadow-[0_10px_40px_-10px_rgba(122,162,247,0.3)] transition-all rounded-[2rem] p-6 lg:p-8 aspect-square flex flex-col items-center justify-center text-center group">
            <div className="w-16 h-16 mb-4 rounded-full bg-[#f0f4fd] flex items-center justify-center group-hover:scale-110 transition-transform">
              <div className="text-[#7AA2F7]/50 font-bold text-xl">L</div>
            </div>
            <span className="font-display font-medium text-xs lg:text-sm leading-tight text-[#001B3D]/40 uppercase tracking-widest">Логотип<br/>партнёра</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
