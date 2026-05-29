import React from 'react';
import { ChevronRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#000d1f] text-white py-12 px-6 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center shrink-0">
             <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest text-center leading-none">ваше<br/>лого</span>
          </div>
          <div>
            <div className="font-display font-bold text-2xl tracking-tight mb-2">ЭКВИСВЕТ</div>
            <div className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest mb-6 font-bold">II Южная конно-ветеринарная конференция</div>
            <p className="text-[10px] sm:text-xs text-white/50 font-medium">
              © 2026 Конное подразделение проекта «Ветеринарный патруль»
            </p>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right">
          <div>
            <div className="text-[10px] text-white/30 uppercase tracking-widest font-bold mb-3">Организаторы</div>
            <div className="flex flex-wrap justify-center md:justify-end gap-3 sm:gap-4 text-xs sm:text-sm font-semibold opacity-70">
               <span>Ветеринарный патруль</span>
               <span className="text-[#7AA2F7]">•</span>
               <span>Абрау-Дюрсо</span>
            </div>
          </div>
          
          <a href="https://vk.com/equisvet" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-[#0077FF] hover:bg-[#0055FF] text-white text-[10px] sm:text-xs font-bold py-3 sm:py-3.5 px-6 rounded-full uppercase tracking-widest transition-colors shadow-lg shadow-[#0077FF]/20 mt-2">
            Группа VK : @equisvet <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
