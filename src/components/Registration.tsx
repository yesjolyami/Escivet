import React, { useState } from 'react';
import { CheckCircle2, ChevronRight, ArrowRight, Navigation, Phone, HeartHandshake, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeIn } from '../utils/animations';
import type { FormData } from '../data';

export function Registration() {
  const [formData, setFormData] = useState<FormData>({ name: '', education: 'Ветеринарный врач', phone: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="register" className="py-20 lg:py-28 bg-[#001B3D] text-white px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#7AA2F7]/15 via-transparent to-transparent -z-10"></div>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Form */}
          <motion.div {...fadeIn} className="lg:col-span-3">
            <div className="bg-[#7AA2F7] text-[#001B3D] rounded-[2.5rem] p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-2 tracking-tight block relative z-10">Заявка на участие</h2>
              <p className="text-[#001B3D]/80 mb-8 font-medium relative z-10 text-sm sm:text-base">Регистрация предварительная, без внесения оплаты.</p>

              {isSubmitted ? (
                <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center justify-center min-h-[350px] shadow-inner">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#001B3D] text-white rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#001B3D]/20">
                    <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-[#7AA2F7]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 font-display">Заявка успешно отправлена!</h3>
                  <p className="opacity-80 text-xs sm:text-sm md:text-base max-w-sm">Наш администратор скоро свяжется с вами для подтверждения регистрации.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5 relative z-10">
                  <div>
                    <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1.5 block">ФИО</label>
                    <input required type="text" placeholder="Иванов Иван Иванович" 
                      className="w-full bg-white/60 border-2 border-transparent focus:border-white focus:bg-white rounded-2xl p-3.5 sm:p-4 text-sm outline-none transition-all placeholder-[#001B3D]/40 font-semibold" 
                      value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div>
                    <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1.5 block">Образование</label>
                    <div className="relative">
                      <select className="w-full bg-white/60 border-2 border-transparent focus:border-white focus:bg-white rounded-2xl p-3.5 sm:p-4 text-sm outline-none transition-all font-semibold appearance-none"
                        value={formData.education} onChange={e => setFormData({...formData, education: e.target.value})}>
                        <option>Ветеринарный врач</option>
                        <option>Ветеринарный фельдшер</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <ChevronRight className="w-4 h-4 rotate-90 opacity-50" />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    <div>
                      <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1.5 block">Телефон</label>
                      <input required type="tel" placeholder="+7 (999) 000-00-00" 
                        className="w-full bg-white/60 border-2 border-transparent focus:border-white focus:bg-white rounded-2xl p-3.5 sm:p-4 text-sm outline-none transition-all placeholder-[#001B3D]/40 font-semibold"
                        value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                    </div>
                    <div>
                      <label className="text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1.5 block">E-mail</label>
                      <input required type="email" placeholder="example@mail.ru" 
                        className="w-full bg-white/60 border-2 border-transparent focus:border-white focus:bg-white rounded-2xl p-3.5 sm:p-4 text-sm outline-none transition-all placeholder-[#001B3D]/40 font-semibold"
                        value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                    </div>
                  </div>
                  
                  <button type="submit" className="w-full bg-[#001B3D] hover:bg-[#002B5C] text-white font-bold py-4 sm:py-5 rounded-2xl uppercase text-xs sm:text-sm tracking-widest shadow-xl shadow-[#001B3D]/10 hover:shadow-[#001B3D]/20 transition-all mt-6 flex items-center justify-center gap-2 group">
                    Отправить заявку <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-[10px] sm:text-xs font-medium opacity-60 text-center mt-4">Нажимая кнопку, вы соглашаетесь на обработку данных</p>
                </form>
              )}
            </div>
          </motion.div>

          {/* Location Info */}
          <motion.div id="location" {...fadeIn} className="lg:col-span-2 space-y-10 flex flex-col justify-center">
            <div>
              <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-2">
                <Navigation className="w-6 h-6 text-[#7AA2F7]" /> Как добраться
              </h3>
              <div className="space-y-4 relative">
                <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-white/10"></div>
                
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1 w-6 h-6 bg-[#001B3D] border-2 border-[#7AA2F7] rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-[#7AA2F7] rounded-full"></div>
                  </div>
                  <div className="font-bold text-[#7AA2F7] text-xs sm:text-sm uppercase tracking-widest mb-1">День 1: Теория</div>
                  <div className="font-display font-bold text-base sm:text-lg mb-0.5">Конгресс-холл</div>
                  <div className="text-white/60 text-xs sm:text-sm">Краснодарский край, с. Абрау-Дюрсо,<br/>ул. Промышленная, 13</div>
                </div>

                <div className="relative pl-8 pt-6">
                  <div className="absolute left-0 top-7 w-6 h-6 bg-[#001B3D] border-2 border-white rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  </div>
                  <div className="font-bold text-white text-xs sm:text-sm uppercase tracking-widest mb-1">День 2: Практика</div>
                  <div className="font-display font-bold text-base sm:text-lg mb-0.5">КК «Абрау-Дюрсо»</div>
                  <div className="text-white/60 text-xs sm:text-sm">Краснодарский край, с. Абрау-Дюрсо,<br/>ул. Д. Каминского, 7</div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h3 className="font-display text-2xl font-bold mb-6">Контакты</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#7AA2F7]" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs uppercase tracking-widest opacity-60 font-medium mb-1">Мария (Регистрация)</div>
                    <a href="tel:+79282734785" className="font-display font-bold text-base sm:text-lg hover:text-[#7AA2F7] transition-colors whitespace-nowrap">+7 928 273 47 85</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <HeartHandshake className="w-5 h-5 text-[#7AA2F7]" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs uppercase tracking-widest opacity-60 font-medium mb-1">Организация</div>
                    <a href="tel:+79832806808" className="font-display font-bold text-base sm:text-lg hover:text-[#7AA2F7] transition-colors whitespace-nowrap">+7 983 280 68 08</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-[#7AA2F7]" />
                  </div>
                  <a href="mailto:Vetpatrul23@yandex.ru" className="font-medium text-sm sm:text-base hover:text-[#7AA2F7] transition-colors underline decoration-white/20 underline-offset-4 break-all">Vetpatrul23@yandex.ru</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
