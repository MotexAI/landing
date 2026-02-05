import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import {
  ArrowLeftIcon,
  CalendarIcon,
  TwitterIcon,
  LinkedinIcon,
  LinkIcon,
  SendIcon,
  ArrowRightIcon } from
'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getStoryBySlug, getRelatedStories, type Story } from '../data/supabaseStories';

export function StoryDetailPage() {
  const { slug } = useParams<{
    slug: string;
  }>();
  const location = useLocation();
  const { t, language } = useLanguage();
  const [story, setStory] = useState<Story | null>(null);
  const [relatedStories, setRelatedStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStory = async () => {
      if (!slug) return;
      
      try {
        setLoading(true);
        const lang = location.pathname.startsWith('/en') ? 'en' : 'es';
        const storyData = await getStoryBySlug(slug, lang);
        const relatedData = await getRelatedStories(slug, 3, lang);
        
        if (!storyData) {
          setError('Story not found');
          return;
        }
        
        setStory(storyData);
        setRelatedStories(relatedData);
      } catch (err) {
        console.error('Error fetching story:', err);
        setError('Failed to load story');
      } finally {
        setLoading(false);
      }
    };

    fetchStory();
  }, [slug, location.pathname]);

  const getLangPrefix = () => {
    const path = location.pathname;
    if (path.startsWith('/en')) return '/en';
    if (path.startsWith('/es')) return '/es';
    return '/es';
  };

  const langPrefix = getLangPrefix();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A]">
        <Header />
        <main className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center text-gray-400">Loading story...</div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !story) {
    return <Navigate to={`${langPrefix}/stories`} replace />;
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = encodeURIComponent(story.title);
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <main className="pt-32 pb-20">
        <article className="max-w-4xl mx-auto px-6">
          {/* Back link */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5
            }}>

            <Link
              to={`${langPrefix}/stories`}
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-12">

              <ArrowLeftIcon className="w-4 h-4" />
              {t.stories.backToStories}
            </Link>
          </motion.div>

          {/* Header */}
          <motion.header
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.1
            }}
            className="mb-12">

            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-medium text-[#0D6B6E] bg-[#0D6B6E]/10 px-3 py-1.5 rounded">
                {story.category}
              </span>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CalendarIcon className="w-4 h-4" />
                {story.date}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-8 leading-tight">
              {story.title}
            </h1>

            {/* Author */}
            <div className="flex items-center gap-4">
              <img
                src={story.author.avatar}
                alt={story.author.name}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-[#1a1a1a]" />

              <div>
                <p className="text-white font-medium">
                  {t.stories.by} {story.author.name}
                </p>
                <p className="text-sm text-gray-500">{story.author.role}</p>
              </div>
            </div>
          </motion.header>

          {/* Hero Image */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="mb-12">

            <div className="aspect-[2/1] rounded-2xl overflow-hidden bg-[#111111] border border-[#1a1a1a]">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover" />

            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.3
            }}
            className="prose prose-invert prose-lg max-w-none mb-16">

            {story.content.split('\n\n').map((paragraph, index) =>
            <p key={index} className="text-gray-300 leading-relaxed mb-6">
                {paragraph}
              </p>
            )}
          </motion.div>

          {/* Social Share */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.4
            }}
            className="border-t border-b border-[#1a1a1a] py-8 mb-16">

            <p className="text-sm text-gray-500 mb-4">{t.stories.shareStory}</p>
            <div className="flex items-center gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#111111] border border-[#1a1a1a] flex items-center justify-center text-gray-500 hover:text-white hover:border-[#0D6B6E]/50 transition-all"
                aria-label="Share on Twitter">

                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-[#111111] border border-[#1a1a1a] flex items-center justify-center text-gray-500 hover:text-white hover:border-[#0D6B6E]/50 transition-all"
                aria-label="Share on LinkedIn">

                <LinkedinIcon className="w-4 h-4" />
              </a>
              <button
                onClick={() => navigator.clipboard.writeText(shareUrl)}
                className="w-10 h-10 rounded-lg bg-[#111111] border border-[#1a1a1a] flex items-center justify-center text-gray-500 hover:text-white hover:border-[#0D6B6E]/50 transition-all"
                aria-label="Copy link">

                <LinkIcon className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Email Subscription */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.5
            }}
            className="p-8 md:p-10 rounded-2xl bg-gradient-to-b from-[#111111] to-[#0A0A0A] border border-[#1a1a1a] mb-16">

            <h3 className="text-2xl font-semibold text-white mb-3">
              {t.stories.subscribeTitle}
            </h3>
            <p className="text-gray-400 mb-6">{t.stories.subscribeSubtitle}</p>
            <form
              className="flex flex-col sm:flex-row gap-4"
              onSubmit={(e) => e.preventDefault()}>

              <input
                type="email"
                placeholder={t.stories.subscribePlaceholder}
                className="flex-1 bg-[#161616] border border-[#262626] rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#0D6B6E] transition-colors" />

              <button
                type="submit"
                className="bg-[#0D6B6E] hover:bg-[#0a5a5c] text-white font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2">

                {t.stories.subscribeButton} <SendIcon className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </article>

        {/* Related Stories */}
        <section className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6,
              delay: 0.6
            }}>

            <h2 className="text-2xl font-semibold text-white mb-8">
              {t.stories.relatedStories}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedStories.map((relatedStory, index) => {
                return (
                  <motion.article
                    key={relatedStory.slug}
                    initial={{
                      opacity: 0,
                      y: 20
                    }}
                    animate={{
                      opacity: 1,
                      y: 0
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.7 + index * 0.1
                    }}>

                    <Link
                      to={`${langPrefix}/stories/${relatedStory.slug}`}
                      className="group flex flex-col h-full bg-[#111111] border border-[#1a1a1a] rounded-xl overflow-hidden hover:border-[#0D6B6E]/30 transition-colors duration-300">

                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-medium text-[#0D6B6E] bg-[#0D6B6E]/10 px-2 py-1 rounded">
                            {relatedStory.category}
                          </span>
                          <span className="text-xs text-gray-500">
                            {relatedStory.date}
                          </span>
                        </div>

                        <h3 className="text-lg font-medium text-white mb-2 group-hover:text-[#0D6B6E] transition-colors line-clamp-2">
                          {relatedStory.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow line-clamp-2">
                          {relatedStory.excerpt}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-[#1a1a1a]">
                          <div className="flex items-center gap-2">
                            <img
                              src={relatedStory.author.avatar}
                              alt={relatedStory.author.name}
                              className="w-6 h-6 rounded-full object-cover" />

                            <span className="text-xs text-gray-400">
                              {relatedStory.author.name}
                            </span>
                          </div>
                          <ArrowRightIcon className="w-4 h-4 text-gray-500 group-hover:text-[#0D6B6E] transition-colors" />
                        </div>
                      </div>
                    </Link>
                  </motion.article>);

              })}
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>);

}