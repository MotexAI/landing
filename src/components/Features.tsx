import { motion } from 'framer-motion';
import { FolderKanbanIcon, BookOpenIcon, LineChartIcon, SearchIcon, PieChartIcon, BellIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Features() {
  const { t } = useLanguage();

  const features = [
    { icon: FolderKanbanIcon, title: t.features.caseManagement,       description: t.features.caseManagementDesc },
    { icon: BookOpenIcon,     title: t.features.legalInformation,      description: t.features.legalInformationDesc },
    { icon: LineChartIcon,    title: t.features.predictiveInformation, description: t.features.predictiveInformationDesc },
    { icon: SearchIcon,       title: t.features.caseScreening,         description: t.features.caseScreeningDesc },
    { icon: PieChartIcon,     title: t.features.analysis,              description: t.features.analysisDesc },
    { icon: BellIcon,         title: t.features.notifications,         description: t.features.notificationsDesc },
  ];

  return (
    <section id="features" className="py-32 bg-[#0d1424] relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1D49A7] opacity-[0.04] blur-[150px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1a2840] rounded-2xl overflow-hidden">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="bg-[#0d1424] p-8 group hover:bg-[#0f1a2d] transition-colors duration-300 cursor-default"
              >
                <div className="mb-5">
                  <Icon className="w-5 h-5 text-[#5A8BE0] transition-transform duration-300 group-hover:translate-y-[-1px]" />
                </div>
                <h3 className="text-sm font-medium text-white mb-2 group-hover:text-[#5A8BE0] transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-sm text-content-primary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
