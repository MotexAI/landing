export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface Story {
  slug: string;
  titleKey: string;
  excerptKey: string;
  contentKey: string;
  categoryKey: string;
  date: string;
  author: Author;
  image: string;
}

export const authors: Record<string, Author> = {
  maria: {
    name: 'María González',
    role: 'Legal Tech Analyst',
    avatar:
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face'
  },
  carlos: {
    name: 'Carlos Mendoza',
    role: 'Senior Legal Consultant',
    avatar:
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
  },
  ana: {
    name: 'Ana Rodríguez',
    role: 'Litigation Finance Expert',
    avatar:
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
  },
  diego: {
    name: 'Diego Fernández',
    role: 'Regulatory Affairs Director',
    avatar:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
  },
  lucia: {
    name: 'Lucía Vargas',
    role: 'ODR Specialist',
    avatar:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face'
  },
  roberto: {
    name: 'Roberto Silva',
    role: 'Legal Operations Manager',
    avatar:
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
  }
};

export const stories: Story[] = [
{
  slug: 'future-commercial-arbitration-latam',
  titleKey: 'story1Title',
  excerptKey: 'story1Excerpt',
  contentKey: 'story1Content',
  categoryKey: 'analysis',
  date: 'Oct 12, 2023',
  author: authors.maria,
  image:
  'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=600&fit=crop'
},
{
  slug: 'reducing-case-backlog-predictive-analytics',
  titleKey: 'story2Title',
  excerptKey: 'story2Excerpt',
  contentKey: 'story2Content',
  categoryKey: 'technology',
  date: 'Sep 28, 2023',
  author: authors.carlos,
  image:
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop'
},
{
  slug: 'litigation-finance-strategic-asset',
  titleKey: 'story3Title',
  excerptKey: 'story3Excerpt',
  contentKey: 'story3Content',
  categoryKey: 'finance',
  date: 'Sep 15, 2023',
  author: authors.ana,
  image:
  'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=600&fit=crop'
},
{
  slug: 'regulatory-compliance-digital-age',
  titleKey: 'story4Title',
  excerptKey: 'story4Excerpt',
  contentKey: 'story4Content',
  categoryKey: 'regulation',
  date: 'Aug 30, 2023',
  author: authors.diego,
  image:
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop'
},
{
  slug: 'rise-of-odr-platforms',
  titleKey: 'story5Title',
  excerptKey: 'story5Excerpt',
  contentKey: 'story5Content',
  categoryKey: 'technology',
  date: 'Aug 12, 2023',
  author: authors.lucia,
  image:
  'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop'
},
{
  slug: 'building-resilient-legal-operations',
  titleKey: 'story6Title',
  excerptKey: 'story6Excerpt',
  contentKey: 'story6Content',
  categoryKey: 'operations',
  date: 'Jul 25, 2023',
  author: authors.roberto,
  image:
  'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600&fit=crop'
}];


export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((story) => story.slug === slug);
}

export function getRelatedStories(
currentSlug: string,
limit: number = 3)
: Story[] {
  return stories.filter((story) => story.slug !== currentSlug).slice(0, limit);
}