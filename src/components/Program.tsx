import React, { useState } from 'react';
import { Clock, Users, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { scheduleDay1, scheduleDay2 } from '../data';
import { fadeIn, stagger, item } from '../utils/animations';

export function Program() {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <section id="program" className="py-20 lg:py-28 bg-[#002B5C] text-white px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-10 lg:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Двухдневная программа</h2>
          <p className="text-base lg:text-lg text-[#7AA2F7]">24–25 сентября 2026 г. • с. Абрау-Дюрсо</p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white/5 p-1 rounded-full border border-white/10 flex-col sm:flex-row w-full sm:w-auto">
            <button 
              onClick={() => setActiveDay(1)}
              className={`px-6 py-3 sm:py-2.5 rounded-full text-sm font-bold transition-all w-full sm:w-auto text-center ${activeDay === 1 ? 'bg-[#7AA2F7] text-[#001B3D] shadow-lg' : 'text-white hover:text-[#7AA2F7]'}`}
            >
              День 1 (24 сентября)
            </button>
            <button 
              onClick={() => setActiveDay(2)}
              className={`px-6 py-3 sm:py-2.5 rounded-full text-sm font-bold transition-all w-full sm:w-auto text-center ${activeDay === 2 ? 'bg-[#7AA2F7] text-[#001B3D] shadow-lg' : 'text-white hover:text-[#7AA2F7]'}`}
            >
              День 2 (25 сентября)
            </button>
          </div>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-5 md:p-8 lg:p-10">
          <div className="mb-8 flex flex-col md:flex-row items-start md:items-center justify-between border-b border-white/10 pb-6 gap-4">
            <div>
              <h3 className="font-display text-xl md:text-2xl font-bold mb-2 flex flex-col sm:flex-row sm:items-center gap-3">
                 {activeDay === 1 ? 'Теоретическая часть' : 'Практическая часть'}
                 <span className="text-[10px] w-fit font-sans font-bold uppercase tracking-widest px-3 py-1 bg-[#7AA2F7]/20 text-[#7AA2F7] rounded-full">
                   {activeDay === 1 ? 'Лекторий' : 'Работа с животными'}
                 </span>
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-white/70 font-medium bg-white/5 px-4 py-2.5 rounded-xl w-full md:w-auto">
               <MapPin className="w-4 h-4 text-[#7AA2F7] shrink-0" /> 
               {activeDay === 1 ? 'Конгресс-холл (ул. Промышленная, 13)' : 'КК «Абрау-Дюрсо» (ул. Д. Каминского, 7)'}
            </div>
          </div>

          <div className="space-y-2">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeDay}
                variants={stagger}
                initial="initial"
                whileInView="animate"
                exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-2"
              >
                {(activeDay === 1 ? scheduleDay1 : scheduleDay2).map((scheduleItem, idx) => (
                  <motion.div variants={item} key={idx} className="group flex flex-col md:flex-row gap-2 md:gap-8 p-4 rounded-xl hover:bg-white/5 transition-colors items-start">
                    <div className="w-full md:w-32 shrink-0 pt-0.5 md:pt-1">
                       <div className="text-[#7AA2F7] font-mono font-bold text-sm lg:text-base flex items-center gap-2">
                          <Clock className="w-4 h-4 opacity-50 block md:hidden" /> {scheduleItem.time}
                       </div>
                    </div>
                    <div className="flex-1 pb-2 md:pb-0">
                       <h4 className="font-bold text-sm sm:text-base lg:text-lg mb-1 group-hover:text-white transition-colors text-white/90 leading-snug">{scheduleItem.title}</h4>
                       {scheduleItem.speaker && (
                         <p className="text-xs sm:text-sm text-[#7AA2F7] font-medium flex items-center gap-2 mt-2">
                           <Users className="w-3.5 h-3.5 opacity-60 shrink-0" /> Лектор: {scheduleItem.speaker}
                         </p>
                       )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
