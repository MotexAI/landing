import { motion } from 'framer-motion';
import { FolderKanbanIcon, BookOpenIcon, LineChartIcon, SearchIcon, PieChartIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Features() {
  const { t } = useLanguage();

  const informationFeatures = [
    { icon: <FolderKanbanIcon className="w-4 h-4" />, title: t.features.caseManagement,       description: t.features.caseManagementDesc },
    { icon: <BookOpenIcon    className="w-4 h-4" />, title: t.features.legalInformation,      description: t.features.legalInformationDesc },
    { icon: <LineChartIcon   className="w-4 h-4" />, title: t.features.predictiveInformation, description: t.features.predictiveInformationDesc },
  ];

  const financingFeatures = [
    { icon: <SearchIcon   className="w-4 h-4" />, title: t.features.caseScreening, description: t.features.caseScreeningDesc },
    { icon: <PieChartIcon className="w-4 h-4" />, title: t.features.analysis,     description: t.features.analysisDesc },
  ];

  return (
    <section id="features" className="py-32 bg-[#0d1424] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1D49A7] opacity-[0.04] blur-[150px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* 01 — Access to Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}>

            <div className="flex items-baseline gap-4 mb-10 pb-6 border-b border-[#1a2840]">
              <span className="font-mono text-xs tracking-[0.2em] text-[#1D49A7]">01</span>
              <h2 className="text-xl font-medium text-white tracking-tight">
                {t.features.accessToInformation}
              </h2>
            </div>

            <div className="divide-y divide-[#1a2840]">
              {informationFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="py-6 group">
                  <div className="flex items-start gap-5">
                    <div className="mt-0.5 text-[#5A8BE0] flex-shrink-0 transition-transform duration-300 group-hover:translate-y-[-1px]">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-white mb-1.5 group-hover:text-[#5A8BE0] transition-colors duration-200">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-content-primary leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 02 — Access to Financing */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}>

            <div className="flex items-baseline gap-4 mb-10 pb-6 border-b border-[#1a2840]">
              <span className="font-mono text-xs tracking-[0.2em] text-[#1D49A7]">02</span>
              <h2 className="text-xl font-medium text-white tracking-tight">
                {t.features.accessToFinancing}
              </h2>
            </div>

            <div className="divide-y divide-[#1a2840]">
              {financingFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.1 }}
                  className="py-8 group">
                  <div className="flex items-start gap-5">
                    <div className="mt-0.5 text-[#5A8BE0] flex-shrink-0 transition-transform duration-300 group-hover:translate-y-[-1px]">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-white mb-2 group-hover:text-[#5A8BE0] transition-colors duration-200">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-content-primary leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
