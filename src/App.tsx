import React, { useState } from 'react';
import { MapPin, Calendar, CheckCircle2, ChevronRight, Stethoscope, Users, BookOpen, Clock, HeartHandshake, Navigation, Phone, Mail, ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const scheduleDay1 = [
  { time: '10.00 – 10.10', title: 'Приветственное слово', speaker: '' },
  { time: '10.10 – 11.20', title: 'Шовный материал и дренажные системы при работе с лошадьми. Какой, когда, зачем, почему?', speaker: 'Балашова О.В.' },
  { time: '11.20 – 12.30', title: 'Почему раны лошадей заживают по-другому? Особенности и лайфхаки для успешного заживления.', speaker: 'Шашев С.Н.' },
  { time: '12.30 – 12.45', title: 'Кофебрейк', speaker: '' },
  { time: '12.45 – 13.30', title: 'Когда регионарная и местная анестезия показаны, а когда в них нет смысла. Примеры клинических случаев. Подход к седации жеребцов для плановой кастрации в поле.', speaker: 'Кочмарева А.В.' },
  { time: '13.30 – 14.45', title: 'Подход к хирургической обработке ран и санации во время восстановительного периода. Часть 1.', speaker: 'Балашова О.В.' },
  { time: '14.45 – 16.00', title: 'ОБЕД', speaker: '' },
  { time: '16.00 – 17.15', title: 'Подход к хирургической обработке ран и санации во время восстановительного периода. Часть 2.', speaker: 'Шашев С.Н.' },
  { time: '17.15 – 18.15', title: 'Методы кастрации. Плюсы и минусы.', speaker: 'Балашова О.В.' },
  { time: '18.15 – 19.00', title: 'Метод электрокоагуляции при кастрации и работе с ранами.', speaker: 'Кочмарева А.В.' },
  { time: '19.00', title: 'Заключительная часть', speaker: '' }
];

const scheduleDay2 = [
  { time: '10.00 – 11.30', title: 'Техника повала лошади.', speaker: 'Шашев С.Н.' },
  { time: '11.30 – 13.30', title: 'Кастрация жеребца разными методами.', speaker: 'Балашова О.В., Шашев С.Н., Кочмарева А.В.' },
  { time: '13.30 – 15.00', title: 'ОБЕД', speaker: '' },
  { time: '15.00 – 17.00', title: 'Кастрация жеребца разными методами.', speaker: '' },
  { time: '17.00', title: 'Заключительная часть', speaker: '' }
];

const pricingData = [
  { group: 'Участие только в лекционном дне', early: '5 000 ₽', late: '7 000 ₽' },
  { group: 'Участие только в практическом дне', early: '10 000 ₽', late: '12 000 ₽' },
  { group: 'Участие в двух днях', early: '11 000 ₽', late: '15 000 ₽' },
  { group: 'Студенты, участие оба дня', early: '5 000 ₽', late: '5 000 ₽' },
  { group: 'Студенты, участие в любом одном дне', early: '2 500 ₽', late: '2 500 ₽' }
];

export default function App() {
  const [formData, setFormData] = useState({ name: '', education: 'Ветеринарный врач', phone: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeDay, setActiveDay] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6 }
  };

  const stagger = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-[#001B3D] text-white font-sans selection:bg-[#7AA2F7] selection:text-[#001B3D]">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#001B3D]/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-14 md:h-16 flex items-center justify-between">
          <div className="font-display font-bold text-xl md:text-2xl tracking-tight text-white cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            ЭКВИСВЕТ
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

      {/* Hero Section */}
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

      {/* About Section */}
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

      {/* Lecturers Section */}
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

      {/* Program Section */}
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
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20 lg:py-28 bg-white text-[#001B3D] px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 tracking-tight">Стоимость участия</h2>
            <p className="text-sm md:text-lg text-[#001B3D]/70 max-w-2xl mx-auto">Успейте подать заявку заранее для самых выгодных условий.</p>
          </motion.div>
          
          <motion.div {...fadeIn} className="overflow-x-auto rounded-[2rem] border border-[#001B3D]/10 shadow-xl bg-white pb-2 lg:pb-0">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-[#f0f4fd]">
                  <th className="p-5 lg:p-6 font-display font-bold text-base lg:text-lg text-[#001B3D] border-b border-[#001B3D]/10 w-2/4">Группа участников</th>
                  <th className="p-5 lg:p-6 font-display font-bold text-xs lg:text-sm text-[#001B3D] border-b border-[#001B3D]/10 uppercase tracking-wide">
                    Оплата<br/><span className="text-[#7AA2F7]">до 31 июля</span>
                  </th>
                  <th className="p-5 lg:p-6 font-display font-bold text-xs lg:text-sm text-[#001B3D] border-b border-[#001B3D]/10 uppercase tracking-wide">
                    Оплата<br/><span className="opacity-50">с 1 августа</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#001B3D]/5 font-medium text-sm lg:text-base text-[#001B3D]/80">
                {pricingData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="p-5 lg:p-6 font-semibold text-[#001B3D]">{row.group}</td>
                    <td className="p-5 lg:p-6">
                      <div className="inline-block px-3 py-1 bg-[#d5f0e3] text-[#006b3a] rounded-full font-bold">
                        {row.early}
                      </div>
                    </td>
                    <td className="p-5 lg:p-6 text-[#001B3D]/50 font-bold line-through decoration-[#001B3D]/20">
                      {row.late}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          <p className="text-center text-xs lg:text-sm text-[#001B3D]/50 mt-6 font-medium bg-[#f0f4fd] py-3 px-6 rounded-xl inline-block mx-auto flex w-fit gap-2 items-center">
             <HeartHandshake className="w-4 h-4 text-[#7AA2F7]" /> Скидки для студентов предоставляются при предъявлении студенческого билета.
          </p>
        </div>
      </section>

      {/* Partners Section */}
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

      {/* Testimonials and Photos */}
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

      {/* Photo Gallery */}
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

      {/* Registration & Location */}
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

      {/* Footer */}
      <footer className="bg-[#000d1f] text-white py-12 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="font-display font-bold text-2xl tracking-tight mb-2">ЭКВИСВЕТ</div>
            <div className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest mb-6 font-bold">II Южная конно-ветеринарная конференция</div>
            <p className="text-[10px] sm:text-xs text-white/50 font-medium">
              © 2026 Конное подразделение проекта «Ветеринарный патруль»
            </p>
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

    </div>
  );
}
