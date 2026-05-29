import React from 'react';
import { motion } from 'motion/react';
import { fadeIn, stagger, item } from '../utils/animations';

export function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#f8fafc] text-[#001B3D] px-6 border-t border-[#001B3D]/5">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-12 lg:mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight">Фотогалерея прошлой конференции</h2>
          <p className="text-sm md:text-lg text-[#001B3D]/70 max-w-2xl mx-auto">Атмосфера, обмен опытом и практические занятия, которые объединяют лучших специалистов.</p>
        </motion.div>

        <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 auto-rows-[160px] md:auto-rows-[200px] lg:auto-rows-[250px]">
          <motion.div variants={item} className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden relative group">
            <img src="https://images.unsplash.com/photo-1544928147-79a2dbc1f389?auto=format&fit=crop&w=1200&q=80" alt="Аудитория конференции" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem] z-10 pointer-events-none"></div>
          </motion.div>
          
          <motion.div variants={item} className="col-span-1 row-span-1 rounded-[2rem] overflow-hidden relative group">
            <img src="https://images.unsplash.com/photo-1599386762319-f538e146ebfc?auto=format&fit=crop&w=800&q=80" alt="Участники и лошади" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem] z-10 pointer-events-none"></div>
          </motion.div>

          <motion.div variants={item} className="col-span-1 row-span-1 rounded-[2rem] overflow-hidden relative group">
            <img src="https://images.unsplash.com/photo-1614774640103-6cb2849ef6f4?auto=format&fit=crop&w=800&q=80" alt="Лекции" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem] z-10 pointer-events-none"></div>
          </motion.div>

          <motion.div variants={item} className="col-span-2 row-span-1 rounded-[2rem] overflow-hidden relative group bg-[#001B3D] text-white flex items-center justify-center">
             <img src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?auto=format&fit=crop&w=1200&q=80" alt="Практическая часть" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#001B3D]/90 via-[#001B3D]/20 to-transparent"></div>
             <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem] z-10 pointer-events-none"></div>
             <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8 z-20">
               <span className="font-display font-bold text-xl lg:text-2xl block mb-1">Практическая часть</span>
               <span className="text-sm lg:text-base opacity-80">Отработка навыков на реальных кейсах</span>
             </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
