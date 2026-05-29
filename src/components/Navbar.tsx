import React, { useState } from 'react';
import { ChevronRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { scrollTo } from '../utils/scroll';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#001B3D]/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-4 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center group-hover:border-white/20 transition-colors shadow-lg">
             <span className="text-[10px] md:text-xs font-bold text-white/50 uppercase tracking-widest text-center leading-none">ваше<br/>лого</span>
          </div>
          <div className="font-display font-bold text-xl md:text-2xl tracking-tight text-white">
            ЭКВИСВЕТ
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium opacity-90">
          <button onClick={() => scrollTo('about')} className="hover:text-[#7AA2F7] transition-colors">О конференции</button>
          <button onClick={() => scrollTo('lecturers')} className="hover:text-[#7AA2F7] transition-colors">Лекторы</button>
          <button onClick={() => scrollTo('program')} className="hover:text-[#7AA2F7] transition-colors">Программа</button>
          <button onClick={() => scrollTo('pricing')} className="hover:text-[#7AA2F7] transition-colors">Цены</button>
          <button onClick={() => scrollTo('partners')} className="hover:text-[#7AA2F7] transition-colors">Партнёры</button>
          <button onClick={() => scrollTo('location')} className="hover:text-[#7AA2F7] transition-colors">Контакты</button>
        </div>
        
        <div className="hidden lg:flex items-center gap-4">
          <a href="https://vk.com/equisvet" target="_blank" rel="noreferrer" className="text-white hover:text-[#7AA2F7] transition-colors font-bold text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-1 border border-white/20 rounded-full px-3 py-1.5">
            VK
          </a>
          <button onClick={() => scrollTo('register')} className="bg-[#7AA2F7] hover:bg-white text-[#001B3D] px-5 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-bold transition-colors">
            Регистрация
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-3 md:gap-4">
          <button onClick={() => scrollTo('register')} className="bg-[#7AA2F7] hover:bg-white text-[#001B3D] px-4 py-1.5 rounded-full text-xs font-bold transition-colors">
            Регистрация
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-1">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#001B3D] border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-5 space-y-5 text-sm font-medium text-white/90">
              <button onClick={() => { setIsMenuOpen(false); scrollTo('about'); }} className="text-left hover:text-[#7AA2F7] transition-colors">О конференции</button>
              <button onClick={() => { setIsMenuOpen(false); scrollTo('lecturers'); }} className="text-left hover:text-[#7AA2F7] transition-colors">Лекторы</button>
              <button onClick={() => { setIsMenuOpen(false); scrollTo('program'); }} className="text-left hover:text-[#7AA2F7] transition-colors">Программа</button>
              <button onClick={() => { setIsMenuOpen(false); scrollTo('pricing'); }} className="text-left hover:text-[#7AA2F7] transition-colors">Цены</button>
              <button onClick={() => { setIsMenuOpen(false); scrollTo('partners'); }} className="text-left hover:text-[#7AA2F7] transition-colors">Партнёры</button>
              <button onClick={() => { setIsMenuOpen(false); scrollTo('location'); }} className="text-left hover:text-[#7AA2F7] transition-colors">Контакты</button>
              <div className="pt-2 border-t border-white/10">
                <a href="https://vk.com/equisvet" target="_blank" rel="noreferrer" className="inline-flex items-center hover:text-[#7AA2F7] transition-colors font-bold text-xs uppercase tracking-widest gap-2">
                  Группа VK <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
