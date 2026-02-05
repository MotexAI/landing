import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CalendarIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getAllStories, type Story } from '../data/supabaseStories';

export function Stories() {
  const { t, language } = useLanguage();
  const location = useLocation();
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        setLoading(true);
        const lang = location.pathname.startsWith('/en') ? 'en' : 'es';
        const data = await getAllStories(lang);
        setStories(data.slice(0, 3)); // Only show first 3
      } catch (err) {
        console.error('Error fetching stories:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, [location.pathname]);

  const getLangPrefix = () => {
    const path = location.pathname;
    if (path.startsWith('/en')) return '/en';
    if (path.startsWith('/es')) return '/es';
    return '/es';
  };

  const langPrefix = getLangPrefix();
  return (
    <section className="py-32 bg-[#0A0A0A] border-t border-[#1a1a1a]/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>

            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              {t.stories.title}
            </h2>
            <p className="text-gray-500 max-w-xl">{t.stories.subtitle}</p>
          </motion.div>

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

            <Link
              to={`${langPrefix}/stories`}
              className="group inline-flex items-center gap-2 text-[#0D6B6E] hover:text-[#0a5a5c] font-medium transition-colors">

              {t.stories.viewAll}
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-full bg-[#111111] border border-[#1a1a1a] rounded-xl p-8 animate-pulse flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-5 w-20 rounded-full bg-[#1f2933]" />
                    <div className="h-4 w-20 rounded bg-[#1f2933]" />
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="h-5 w-3/4 rounded bg-[#1f2933]" />
                    <div className="h-4 w-full rounded bg-[#111827]" />
                    <div className="h-4 w-5/6 rounded bg-[#111827]" />
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-full bg-[#1f2933]" />
                    <div className="space-y-2 flex-1">
                      <div className="h-3 w-24 rounded bg-[#1f2933]" />
                      <div className="h-3 w-20 rounded bg-[#111827]" />
                    </div>
                  </div>
                </div>
                <div className="pt-6 border-t border-[#1a1a1a] mt-auto">
                  <div className="h-4 w-24 rounded bg-[#1f2933]" />
                </div>
              </div>
            ))
            : stories.map((story, index) =>
              <motion.article
                key={story.slug}
                initial={{
                  opacity: 0,
                  y: 20
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}>

                <Link
                  to={`${langPrefix}/stories/${story.slug}`}
                  className="group flex flex-col h-full bg-[#111111] border border-[#1a1a1a] rounded-xl overflow-hidden hover:border-[#0D6B6E]/30 transition-colors duration-300">

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-xs font-medium text-[#0D6B6E] bg-[#0D6B6E]/10 px-2 py-1 rounded">
                        {story.category}
                      </span>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <CalendarIcon className="w-3 h-3" />
                        {story.date}
                      </div>
                    </div>

                    <h3 className="text-xl font-medium text-white mb-3 group-hover:text-[#0D6B6E] transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                      {story.excerpt}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3 mb-6">
                      <img
                        src={story.author.avatar}
                        alt={story.author.name}
                        className="w-8 h-8 rounded-full object-cover" />

                      <div>
                        <p className="text-sm text-white font-medium">
                          {story.author.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {story.author.role}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#1a1a1a] mt-auto">
                      <span className="text-sm text-white font-medium group-hover:underline decoration-[#0D6B6E] underline-offset-4">
                        {t.stories.readStory}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            )}
        </div>
      </div>
    </section>);

}