import React from 'react';

export const JsonLd = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abhinandan',
    jobTitle: 'Niche Expert Engineer',
    url: 'https://abhinandan.one',
    sameAs: [
      'https://github.com/awesome-pro', // Replace with your actual profiles
      'https://linkedin.com/in/abhinandan-verma',
      'https://twitter.com/awesome_v0',
    ],
    knowsAbout: [
      'Next.js',
      'FastAPI',
      'Kubernetes',
      'Cloud Infrastructure',
      'React',
      'TypeScript',
      'Python',
      'Microservices',
      'DevOps',
      'AWS',
      'Docker',
      'System Design',
      'Web Development',
      'Solana',
      'Solana Protocol',
      'Solana Blockchain',
      'Solana Network',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Caresept', // Replace with your current company
    },
    alumniOf: {
      '@type': 'Organization',
      name: 'Dr. APJ Abdul Kalam Technological University', // Replace with your university
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default JsonLd;
