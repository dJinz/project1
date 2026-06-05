import React from 'react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      year: '2026 - Present',
      role: 'Technical Support',
      company: 'Holy Cross of Davao College',
      description: 'Providing comprehensive IT support for students, faculty, and administrative staff. Responsibilities include diagnosing hardware and software issues, maintaining network infrastructure, and ensuring the smooth operation of all technical equipment across the campus.',
      coreSkills: ['Technical Troubleshooting', 'Hardware Maintenance', 'Network Support', 'Customer Service', 'System Administration']
    }
  ];

  return (
    <section id="experience" className="fade-in">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {experiences.map(exp => (
            <div key={exp.id} className="experience-item" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 3fr',
              gap: '2rem',
              paddingBottom: '2rem',
              borderBottom: '1px solid var(--border-color)'
            }}>
              <div style={{ color: 'var(--text-secondary)', fontWeight: 500, fontSize: '1.1rem' }}>
                {exp.year}
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                <div style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: '1rem', opacity: 0.8 }}>{exp.company}</div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: exp.coreSkills ? '1.5rem' : '0' }}>{exp.description}</p>
                
                {exp.coreSkills && (
                  <div>
                    <strong style={{ display: 'block', marginBottom: '0.8rem', color: 'var(--text-primary)', fontSize: '0.9rem', letterSpacing: '0.5px' }}>Core Skills</strong>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                      {exp.coreSkills.map((skill, index) => (
                        <span key={index} style={{
                          backgroundColor: 'var(--bg-secondary)',
                          color: 'var(--text-primary)',
                          padding: '0.35rem 0.85rem',
                          borderRadius: '99px',
                          fontSize: '0.85rem',
                          border: '1px solid var(--border-color)',
                          fontWeight: 500,
                          transition: 'border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease',
                          cursor: 'default'
                        }}
                        className="skill-pill"
                        onMouseOver={e => { e.currentTarget.style.backgroundColor = 'var(--text-primary)'; e.currentTarget.style.color = 'var(--bg-primary)'; }}
                        onMouseOut={e => { e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
