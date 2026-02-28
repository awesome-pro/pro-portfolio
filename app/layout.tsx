import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';
import Header from '@/components/header';
import { ThemeProvider } from '@/components/theme-provider';
import StructuredData from './structured-data';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { Toaster } from '@/components/ui/sonner';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://abhinandan.one'),
  title: {
    default: 'Abhinandan | Machine Learning Engineer',
    template: '%s | Abhinandan - Machine Learning Engineer',
  },
  description:
    'Machine Learning Engineer & Enterpreneur specializing in FastAPI, Kubernetes, Next.js, Node.js, and Cloud Infrastructure. Expert in building scalable enterprise applications, CRM systems, and high-performance web solutions. Available for technical consulting and enterprise projects.',
  keywords: [
    'Enterpreneur',
    'Machine Learning Engineer',
    'Software Engineer',
    'Senior Software Engineer',
    'Full Stack Developer',
    'Next.js Expert',
    'FastAPI Developer',
    'PostgreSQL Expert',
    'Technical Architect',
    'CRM Development',
    'Enterprise Solutions',
    'React Developer',
    'TypeScript Expert',
    'System Design Expert',
    'Cloud Architecture',
    'DevOps Engineer',
    'Freelance Developer',
    'Software Consultant',
    'Technical Lead',
    'Solution Architect',
    'Enterprise Applications',
    'Web Development Expert',
    'Performance Optimization',
    'Scalable Systems',
    'API Development',
    'Database Design',
    'Microservices Architecture',
    'Cloud Infrastructure',
    'AWS Expert',
    'Technical Leadership',
    'Software Architecture',
    'Full Stack Engineering',
    'Remote Developer',
    'Independent Consultant',
  ],
  alternates: {
    canonical: 'https://abhinandan.one',
  },
  authors: [{ name: 'Abhinandan', url: 'https://abhinandan.one' }],
  creator: 'Abhinandan',
  publisher: 'Abhinandan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abhinandan.one',
    title: 'Abhinandan - Machine Learning Engineer & Enterpreneur',
    description:
      'Expert Full Stack Engineer specializing in Next.js, FastAPI, and enterprise solutions. Building scalable, high-performance web applications and providing technical leadership.',
    siteName: 'Abhinandan Portfolio',
    images: [
      {
        url: 'https://abhinandan.one/1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Abhinandan - Enterpreneur & ML Engineer',
        type: 'image/png',
      },
      {
        url: 'https://abhinandan.one/1080.png',
        width: 1080,
        height: 1080,
        alt: 'Abhinandan - Enterpreneur & ML Engineer',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abhinandan - Enterpreneur & ML Engineer',
    description:
      'Expert Full Stack Engineer specializing in Next.js, FastAPI, and enterprise solutions. Available for technical consulting and enterprise projects.',
    creator: '@awesome_v0',
    images: [
      {
        url: 'https://abhinandan.one/1200x630.png',
        width: 1200,
        height: 630,
        alt: 'Abhinandan - Enterpreneur & ML Engineer',
        type: 'image/png',
      },
    ],
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
  category: 'technology',
};

export const generateStaticParams = async () => {
  return [{ locale: 'en' }];
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
        <StructuredData />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GoogleAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster position="top-right"  />
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
