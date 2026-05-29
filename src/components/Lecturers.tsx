import React from 'react';
import { Users } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeIn } from '../utils/animations';

export function Lecturers() {
  return (
    <section id="lecturers" className="py-20 lg:py-28 bg-[#001B3D] text-white px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="mb-12 lg:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">Ведущие эксперты</h2>
          <p className="text-base lg:text-lg text-[#7AA2F7] max-w-2xl">Спикеры конференции — признанные специалисты в области конной ветеринарии.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div {...fadeIn} className="bg-[#002B5C] border border-white/5 hover:border-white/20 transition-colors p-8 lg:p-10 rounded-[2rem] flex flex-col xl:flex-row gap-6 lg:gap-8 items-start">
            <div className="w-24 h-24 lg:w-32 lg:h-32 shrink-0 bg-white/5 rounded-full border border-white/10 flex items-center justify-center overflow-hidden">
              <Users className="w-8 h-8 lg:w-12 lg:h-12 text-white/20" />
            </div>
            <div>
              <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-[10px] lg:text-xs font-bold tracking-widest uppercase mb-4 text-[#7AA2F7]">
                Кабардино-Балкария
              </div>
              <h3 className="font-display text-xl lg:text-2xl font-bold mb-2">Шашев Сосруко Николаевич</h3>
              <p className="text-white/70 text-sm lg:text-base leading-relaxed mb-4">
                Ветеринарный врач, специализирующийся на лошадях и сельскохозяйственных животных. Настоящий мастер полевой хирургии, терапии, лабораторной диагностики и стоматологии.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="bg-gradient-to-br from-[#002B5C] to-[#001B3D] border border-[#7AA2F7]/30 hover:border-[#7AA2F7]/60 transition-colors p-8 lg:p-10 rounded-[2rem] flex flex-col xl:flex-row gap-6 lg:gap-8 items-start relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7AA2F7]/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="w-24 h-24 lg:w-32 lg:h-32 shrink-0 bg-white/5 rounded-full border border-white/10 flex items-center justify-center overflow-hidden relative z-10">
              <Users className="w-8 h-8 lg:w-12 lg:h-12 text-white/20" />
            </div>
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 bg-[#7AA2F7]/20 rounded-full text-[10px] lg:text-xs font-bold tracking-widest uppercase mb-4 text-[#7AA2F7]">
                Краснодарский край
              </div>
              <h3 className="font-display text-xl lg:text-2xl font-bold mb-2">Кочмарёва Алёна Владимировна</h3>
              <p className="text-white/70 text-sm lg:text-base leading-relaxed mb-4">
                Главный врач Конного подразделения проекта «Ветеринарный патруль». Создатель и со-организатор конференции. Специализируется на интенсивной терапии и полевой хирургии лошадей.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
