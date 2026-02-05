import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface Writer {
  id: string;
  nombre: string;
  apellido: string;
  foto: string;
  rol_en: string;
  rol_es: string;
  created_at: string;
  updated_at: string;
}

export interface Blog {
  id: string;
  fecha: string;
  imagen: string;
  texto_en: string;
  texto_es: string;
  suburl: string;
  descripcion_en: string;
  descripcion_es: string;
  topico_en: string;
  topico_es: string;
  titulo_en: string;
  titulo_es: string;
  writer_id: string;
  created_at: string;
  updated_at: string;
  writer?: Writer;
}

// Helper function to format date
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

// Get all blogs with writers
export async function getBlogs(language: 'en' | 'es' = 'es'): Promise<Blog[]> {
  const { data: blogs, error: blogsError } = await supabase
    .from('blogs')
    .select('*')
    .order('fecha', { ascending: false });

  if (blogsError) {
    console.error('Error fetching blogs:', blogsError);
    throw blogsError;
  }

  if (!blogs || blogs.length === 0) {
    return [];
  }

  // Get all unique writer IDs
  const writerIds = [...new Set(blogs.map(blog => blog.writer_id))];
  
  // Fetch writers
  const { data: writers, error: writersError } = await supabase
    .from('writer')
    .select('*')
    .in('id', writerIds);

  if (writersError) {
    console.error('Error fetching writers:', writersError);
    throw writersError;
  }

  // Map writers to blogs
  const writerMap = new Map(writers?.map(w => [w.id, w]) || []);
  
  return blogs.map(blog => ({
    ...blog,
    writer: writerMap.get(blog.writer_id)
  })) as Blog[];
}

// Get blog by slug
export async function getBlogBySlug(slug: string, language: 'en' | 'es' = 'es'): Promise<Blog | null> {
  const { data: blog, error: blogError } = await supabase
    .from('blogs')
    .select('*')
    .eq('suburl', slug)
    .single();

  if (blogError || !blog) {
    console.error('Error fetching blog:', blogError);
    return null;
  }

  // Fetch writer
  const { data: writer, error: writerError } = await supabase
    .from('writer')
    .select('*')
    .eq('id', blog.writer_id)
    .single();

  if (writerError) {
    console.error('Error fetching writer:', writerError);
  }

  return {
    ...blog,
    writer: writer || undefined
  } as Blog;
}

// Get related blogs (excluding current slug)
export async function getRelatedBlogs(
  currentSlug: string,
  limit: number = 3,
  language: 'en' | 'es' = 'es'
): Promise<Blog[]> {
  const { data: blogs, error: blogsError } = await supabase
    .from('blogs')
    .select('*')
    .neq('suburl', currentSlug)
    .order('fecha', { ascending: false })
    .limit(limit);

  if (blogsError || !blogs || blogs.length === 0) {
    console.error('Error fetching related blogs:', blogsError);
    return [];
  }

  // Get all unique writer IDs
  const writerIds = [...new Set(blogs.map(blog => blog.writer_id))];
  
  // Fetch writers
  const { data: writers, error: writersError } = await supabase
    .from('writer')
    .select('*')
    .in('id', writerIds);

  if (writersError) {
    console.error('Error fetching writers:', writersError);
  }

  // Map writers to blogs
  const writerMap = new Map(writers?.map(w => [w.id, w]) || []);
  
  return blogs.map(blog => ({
    ...blog,
    writer: writerMap.get(blog.writer_id)
  })) as Blog[];
}

