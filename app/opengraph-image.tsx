import { ImageResponse } from 'next/og';

export const runtime = 'edge';

// Image metadata
export const alt = 'Abhinandan - Niche Expert Engineer & Technical Enterpreneur';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

// Font
const interRegular = fetch(
  new URL('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap')
).then(res => res.arrayBuffer());

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to right, #000428, #004e92)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px',
        }}
      >
        {/* Profile Image Container */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '32px',
            borderRadius: '24px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          }}
        >
          {/* Title */}
          <div
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: '#ffffff',
              textAlign: 'center',
              lineHeight: 1.2,
            }}
          >
            Abhinandan
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: '32px',
              color: '#94a3b8',
              textAlign: 'center',
              marginBottom: '16px',
            }}
          >
            Niche Expert Engineer & Technical Enterpreneur
          </div>

          {/* Skills */}
          <div
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              justifyContent: 'center',
              maxWidth: '800px',
            }}
          >
            {['Next.js', 'FastAPI', 'PostgreSQL', 'AWS', 'Enterprise Solutions'].map(skill => (
              <div
                key={skill}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '8px 16px',
                  borderRadius: '16px',
                  color: '#e2e8f0',
                  fontSize: '24px',
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: await interRegular,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  );
}
