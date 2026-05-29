import React from 'react';
import { Users, BookOpen, Stethoscope } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeIn, stagger, item } from '../utils/animations';

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white text-[#001B3D] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
          <motion.div {...fadeIn}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Бархатный сезон<br/>с пользой</h2>
            <p className="text-base lg:text-lg text-[#001B3D]/70 leading-relaxed mb-6">
              ЭКВИСВЕТ — это ежегодное мероприятие в живописном Абрау-Дюрсо. 
              Мы создали эту площадку, чтобы вы могли с пользой провести время в компании 
              единомышленников, обогатить свои знания и сразу применить их на практике.
            </p>
            <p className="text-base lg:text-lg text-[#001B3D]/70 leading-relaxed">
              Двухдневная программа направлена на погружение практикующих специалистов как в глубокую теорию, так и в разбор реальных клинических ситуаций на живых животных.
            </p>
          </motion.div>
          
          <motion.div {...fadeIn} className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1533221378385-e10ebbe8a1eb?auto=format&fit=crop&w=1000&q=80" 
              alt="Veterinarian with a horse" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[2rem]"></div>
          </motion.div>
        </div>

        <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-50px" }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <motion.div variants={item} className="bg-[#f0f4fd] p-8 rounded-3xl transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-[#7AA2F7] text-[#001B3D] rounded-xl flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold mb-3">Единомышленники</h3>
            <p className="text-[#001B3D]/70 leading-relaxed text-sm">
              Встречи с коллегами, обмен опытом и разбор сложных клинических случаев в дружеской обстановке.
            </p>
          </motion.div>
          <motion.div variants={item} className="bg-[#f0f4fd] p-8 rounded-3xl transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 bg-[#7AA2F7] text-[#001B3D] rounded-xl flex items-center justify-center mb-6">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold mb-3">Современная теория</h3>
            <p className="text-[#001B3D]/70 leading-relaxed text-sm">
              Лекции от ведущих специалистов страны по интенсивной терапии, лечению и профилактике.
            </p>
          </motion.div>
          <motion.div variants={item} className="bg-[#f0f4fd] p-8 rounded-3xl transition-transform hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
            <div className="w-12 h-12 bg-[#7AA2F7] text-[#001B3D] rounded-xl flex items-center justify-center mb-6">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h3 className="font-display text-xl font-bold mb-3">Мощная практика</h3>
            <p className="text-[#001B3D]/70 leading-relaxed text-sm">
              Отработка навыков в реальных условиях. Полевая хирургия, стоматология и лабораторная диагностика.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
