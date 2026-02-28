import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://abhinandan.one';
  const lastModified = new Date();

  // Define all your routes with their priorities
  const routes = [
    { path: '', priority: 1.0 },
    { path: '#experience', priority: 0.9 },
    { path: '#skills', priority: 0.9 },
    { path: '#projects', priority: 0.9 },
    { path: '#about', priority: 0.8 },
    { path: '#contact', priority: 0.8 },
    { path: 'nextui', priority: 0.9 }, // Your NextUI contributions page
    { path: 'resume', priority: 0.7 },
  ];

  // Generate sitemap entries with consistent formatting
  return routes.map(route => ({
    url: `${baseUrl}/${route.path}`,
    lastModified,
    changeFrequency:
      route.priority >= 0.9
        ? 'weekly'
        : ('monthly' as MetadataRoute.Sitemap[number]['changeFrequency']),
    priority: route.priority,
  }));
}
