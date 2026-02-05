import { getBlogs, getBlogBySlug, getRelatedBlogs, formatDate, type Blog, type Writer } from '../lib/supabase';
import { useLanguage } from '../context/LanguageContext';

// Transform Blog to Story format for compatibility
export interface Story {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
}

function transformBlogToStory(blog: Blog, language: 'en' | 'es'): Story {
  const writer = blog.writer as Writer | undefined;
  
  return {
    slug: blog.suburl,
    title: language === 'en' ? blog.titulo_en : blog.titulo_es,
    excerpt: language === 'en' ? blog.descripcion_en : blog.descripcion_es,
    content: language === 'en' ? blog.texto_en : blog.texto_es,
    category: language === 'en' ? blog.topico_en : blog.topico_es,
    date: formatDate(blog.fecha),
    author: {
      name: writer ? `${writer.nombre} ${writer.apellido}` : 'Unknown',
      role: writer ? (language === 'en' ? writer.rol_en : writer.rol_es) : '',
      avatar: writer?.foto || ''
    },
    image: blog.imagen
  };
}

// Hook to get all stories
export async function getAllStories(language: 'en' | 'es' = 'es'): Promise<Story[]> {
  const blogs = await getBlogs(language);
  return blogs.map(blog => transformBlogToStory(blog, language));
}

// Hook to get story by slug
export async function getStoryBySlug(slug: string, language: 'en' | 'es' = 'es'): Promise<Story | null> {
  const blog = await getBlogBySlug(slug, language);
  if (!blog) return null;
  return transformBlogToStory(blog, language);
}

// Hook to get related stories
export async function getRelatedStories(
  currentSlug: string,
  limit: number = 3,
  language: 'en' | 'es' = 'es'
): Promise<Story[]> {
  const blogs = await getRelatedBlogs(currentSlug, limit, language);
  return blogs.map(blog => transformBlogToStory(blog, language));
}

