import React from 'react';
import { Users } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeIn } from '../utils/animations';

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white text-[#001B3D] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div {...fadeIn}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Как это было в прошлом году</h2>
            <p className="text-sm md:text-base lg:text-lg text-[#001B3D]/70 leading-relaxed mb-8">
              Первая конференция ЭКВИСВЕТ собрала специалистов со всего юга России, доказав высокую потребность в обмене качественным опытом в конной ветеринарии.
            </p>
            
            <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-black/5 relative">
              <svg className="absolute top-6 left-6 w-8 h-8 text-[#7AA2F7]/30" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path></svg>
              <p className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed italic text-[#001B3D]/80 mb-6 relative z-10 pt-4">
                Отличное мероприятие! Концентрация полезной информации и возможность сразу увидеть всё на практике делает формат уникальным для нашего региона. Обязательно приеду снова.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#001B3D]/5 rounded-full flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-[#001B3D]/50" />
                </div>
                <div>
                  <div className="font-bold text-sm">Участник конференции</div>
                  <div className="text-xs opacity-60">Ветеринарный врач</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div {...fadeIn} className="grid grid-cols-2 gap-4 h-full">
            <div className="aspect-[3/4] lg:aspect-auto h-full rounded-3xl overflow-hidden bg-[#001B3D]/5 relative shadow-md">
              <img src="https://images.unsplash.com/photo-1614774640103-6cb2849ef6f4?auto=format&fit=crop&w=800&q=80" alt="Veterinary practice" className="w-full h-full object-cover" />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl"></div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex-1 rounded-3xl overflow-hidden bg-[#001B3D]/5 relative shadow-md">
                 <img src="https://images.unsplash.com/photo-1599386762319-f538e146ebfc?auto=format&fit=crop&w=800&q=80" alt="Horse details" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-3xl"></div>
              </div>
              <div className="h-32 sm:h-40 bg-[#001B3D] text-white rounded-3xl overflow-hidden border border-[#001B3D]/10 flex flex-col justify-center items-center shadow-md">
                 <div className="text-center p-4">
                   <span className="font-display font-bold text-lg sm:text-xl lg:text-2xl leading-tight block mb-2">До встречи<br/>в сентябре!</span>
                   <div className="w-12 h-1 bg-[#7AA2F7] mx-auto rounded-full"></div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
