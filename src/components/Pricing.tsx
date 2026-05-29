import React from 'react';
import { HeartHandshake } from 'lucide-react';
import { motion } from 'motion/react';
import { pricingData } from '../data';
import { fadeIn } from '../utils/animations';

export function Pricing() {
  return (
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
        <p className="text-center text-xs lg:text-sm text-[#001B3D]/50 mt-6 font-medium bg-[#f0f4fd] py-3 px-6 rounded-xl mx-auto flex w-fit gap-2 items-center">
           <HeartHandshake className="w-4 h-4 text-[#7AA2F7]" /> Скидки для студентов предоставляются при предъявлении студенческого билета.
        </p>
      </div>
    </section>
  );
}
