import React from 'react';
import { motion } from 'framer-motion';
import {
  FolderKanbanIcon,
  BookOpenIcon,
  LineChartIcon,
  SearchIcon,
  PieChartIcon } from
'lucide-react';
import { useLanguage } from '../context/LanguageContext';
export function Features() {
  const { t } = useLanguage();
  const informationFeatures = [
  {
    icon: <FolderKanbanIcon className="w-5 h-5" />,
    title: t.features.caseManagement,
    description: t.features.caseManagementDesc
  },
  {
    icon: <BookOpenIcon className="w-5 h-5" />,
    title: t.features.legalInformation,
    description: t.features.legalInformationDesc
  },
  {
    icon: <LineChartIcon className="w-5 h-5" />,
    title: t.features.predictiveInformation,
    description: t.features.predictiveInformationDesc
  }];

  const financingFeatures = [
  {
    icon: <SearchIcon className="w-5 h-5" />,
    title: t.features.caseScreening,
    description: t.features.caseScreeningDesc
  },
  {
    icon: <PieChartIcon className="w-5 h-5" />,
    title: t.features.analysis,
    description: t.features.analysisDesc
  }];

  return (
    <section
      id="features"
      className="py-32 bg-[#111111] relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0D6B6E] opacity-[0.03] blur-[150px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Access to Information Column */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>

            <h2 className="text-3xl font-semibold text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#0D6B6E] rounded-full" />
              {t.features.accessToInformation}
            </h2>
            <div className="space-y-6">
              {informationFeatures.map((feature, index) =>
              <div
                key={index}
                className="group p-6 rounded-xl bg-[#161616] border border-[#1a1a1a] hover:border-[#0D6B6E]/30 transition-all duration-300">

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-[#0D6B6E]/10 text-[#0D6B6E] group-hover:bg-[#0D6B6E]/20 transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Access to Financing Column */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}>

            <h2 className="text-3xl font-semibold text-white mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-[#0D6B6E] rounded-full" />
              {t.features.accessToFinancing}
            </h2>
            <div className="space-y-6">
              {financingFeatures.map((feature, index) =>
              <div
                key={index}
                className="group p-6 rounded-xl bg-[#161616] border border-[#1a1a1a] hover:border-[#0D6B6E]/30 transition-all duration-300">

                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-[#0D6B6E]/10 text-[#0D6B6E] group-hover:bg-[#0D6B6E]/20 transition-colors">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}