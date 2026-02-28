export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abhinandan',
    url: 'https://abhinandan.one',
    image: 'https://abhinandan.one/p-6.jpg',
    sameAs: [
      'https://github.com/awesome-pro',
      'https://linkedin.com/in/abhinandan-verma',
      'https://twitter.com/awesome_v0',
      'mailto:abhinadnanverma551@gmail.com',
    ],
    jobTitle: ['Senior Software Engineer', 'Machine Learning Engineer', 'Technical Architect'],
    worksFor: {
      '@type': 'Organization',
      name: 'Independent Consultant',
      description: 'Providing expert software development, machine learning, and technical consulting services',
    },
    alumniOf: {
      '@type': 'Organization',
      name: 'Previous Organizations',
      description: 'Experienced in enterprise software development and technical leadership',
    },
    knowsAbout: [
      'Next.js Development',
      'Full Stack Engineering',
      'Enterprise Software Architecture',
      'Technical Leadership',
      'FastAPI Development',
      'PostgreSQL Database Design',
      'React Application Development',
      'TypeScript Programming',
      'System Design & Architecture',
      'Cloud Infrastructure (AWS)',
      'Enterprise Solutions',
      'CRM Development',
      'DevOps & CI/CD',
      'Microservices Architecture',
      'Performance Optimization',
      'Scalable Web Applications',
    ],
    description: `Machine Learning Engineer & Enterpreneur specializing in Next.js, FastAPI, and Cloud Infrastructure. 
    Proven track record in building scalable enterprise applications, CRM systems, and high-performance web solutions. 
    Expert in modern web technologies, system design, and technical architecture.`,
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Machine Learning Engineer',
      occupationLocation: { '@type': 'Country', name: 'Worldwide' },
      description: 'Expert in full-stack development, system design, and enterprise solutions',
      skills: 'Next.js, FastAPI, React, TypeScript, Cloud Architecture, System Design',
      responsibilities: [
        'Technical Architecture Design',
        'Enterprise Application Development',
        'Performance Optimization',
        'Team Leadership',
        'Solution Architecture',
      ],
    },
    makesOffer: {
      '@type': 'Offer',
      itemOffered: [
        {
          '@type': 'Service',
          name: 'Full Stack Development',
          description: 'Expert development services using Next.js, React, and TypeScript',
        },
        {
          '@type': 'Service',
          name: 'Technical Consulting',
          description: 'Professional consulting for system design and architecture',
        },
        {
          '@type': 'Service',
          name: 'Enterprise Solutions',
          description: 'Custom enterprise software and CRM development',
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
