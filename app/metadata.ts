import type { Metadata } from 'next';

const title = 'Abhinandan - Enterpreneur & Tech Expert';
const description =
  'Niche Expert Engineer specializing in Next.js, FastAPI, Kubernetes, and Cloud Infrastructure. Expert in building scalable web applications and microservices architecture.';

export const sharedMetadata: Metadata = {
  metadataBase: new URL('https://abhinandan.one'),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  keywords: [
    'Enterpreneur',
    'Tech Expert',
    'Senior Software Engineer',
    'Full Stack Developer',
    'Next.js Expert',
    'FastAPI Expert',
    'Kubernetes',
    'Cloud Infrastructure',
    'React Developer',
    'TypeScript Expert',
    'Python Developer',
    'DevOps Engineer',
    'Microservices Architecture',
    'DevOps Engineer',
    'AWS',
    'Docker',
    'System Design',
    'Web Development',
    'Performance Optimization',
    'Technical Leadership',
    'Enterprise Solutions',
    'Solana Blockchain',
    'Solana Protocol',
  ],
  authors: [{ name: 'Abhinandan', url: 'https://abhinandan.one' }],
  creator: 'Abhinandan',
  publisher: 'Abhinandan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://abhinandan.one',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abhinandan.one',
    title,
    description,
    siteName: title,
    images: [
      {
        url: 'https://abhinandan.one/1200x630.png',
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@awesome_v0',
    images: ['https://abhinandan.one/1200x630.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '1234567890', // Add your Google Search Console verification code
  },
  category: 'technology',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'dark light',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};
