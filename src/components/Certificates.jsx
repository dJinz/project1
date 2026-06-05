import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, ChevronLeft, ChevronRight, FileText, X } from 'lucide-react';
import cert1Img from '../assets/cert1.png';
import cert2Img from '../assets/cert2.png';
import cert3Img from '../assets/cert3.png';
import cert4Img from '../assets/cert4.png';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Java EE, Web Development: HTTP, Server,Servlet,HTML/CSS,JSP',
      issuer: 'Udemy',
      date: 'May 2026',
      link: 'https://www.udemy.com/certificate/UC-838411e4-a148-49a5-b861-8a4ce0428907/',
      image: cert1Img
    },
    {
      id: 2,
      title: 'Build Complete CMS Blog in PHP MySQL Bootstrap & PDO',
      issuer: 'Udemy',
      date: 'April 2026',
      link: 'https://www.udemy.com/certificate/UC-1adb045c-9ab5-476c-8d1e-88bfac2fc8f8/',
      image: cert2Img
    },
    {
      id: 3,
      title: 'Complete Python Automation Bootcamp - Automation MasterClass',
      issuer: 'Udemy',
      date: 'March 2026',
      link: 'https://www.udemy.com/certificate/UC-8fd1a3fb-1dd8-4294-87e0-94c7f060ffdd/',
      image: cert3Img
    },
    {
      id: 4,
      title: 'Introduction to SQL',
      issuer: 'Simplilearn',
      date: 'September 2024',
      link: 'https://certificates.simplicdn.net/share/7396713_1727080731.pdf',
      image: cert4Img
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const currentCert = certificates[currentIndex];

  const nextCert = () => setCurrentIndex((prev) => (prev + 1) % certificates.length);
  const prevCert = () => setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);

  const buttonStyle = {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border-color)',
    color: 'var(--text-primary)',
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    flexShrink: 0,
    zIndex: 10
  };

  return (
    <section id="certificates" style={{ backgroundColor: 'var(--bg-secondary)', padding: '100px 0' }}>
      <style>{`
        .cert-presentation {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          width: 100%;
        }
        @keyframes certFade {
          0% { opacity: 0; transform: scale(0.98); }
          100% { opacity: 1; transform: scale(1); }
        }
        .cert-card-animated {
          animation: certFade 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        @media (max-width: 768px) {
          .cert-presentation {
            flex-wrap: wrap;
            gap: 1rem;
          }
          .cert-nav-prev, .cert-nav-next {
            order: 2;
          }
          .cert-card-wrapper {
            order: 1;
            width: 100% !important;
          }
        }
      `}</style>
      <div className="container">
        <h2 className="section-title fade-in" style={{ marginBottom: '3rem' }}>Certificates</h2>

        <div className="fade-in" style={{ animationDelay: '0.2s', maxWidth: '850px', margin: '0 auto' }}>

              <div className="cert-presentation">

                {/* Prev Button */}
                <button
                  className="cert-nav-prev"
                  onClick={prevCert}
                  style={buttonStyle}
                  onMouseOver={e => { e.currentTarget.style.backgroundColor = 'var(--text-primary)'; e.currentTarget.style.color = 'var(--bg-primary)'; }}
                  onMouseOut={e => { e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                  aria-label="Previous Certificate"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Certificate Card */}
                <div key={currentCert.id} className="cert-card-wrapper cert-card-animated" style={{
                  width: '100%',
                  backgroundColor: 'var(--bg-primary)',
                  borderRadius: '16px',
                  border: '1px solid var(--border-color)',
                  overflow: 'hidden',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.08)'
                }}>

                  {/* Image Area */}
                  <div style={{
                    width: '100%',
                    aspectRatio: '4 / 3',
                    backgroundColor: '#ffffff',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2rem',
                    borderBottom: '1px solid var(--border-color)',
                    position: 'relative'
                  }}>
                    {currentCert.image ? (
                      <img
                        src={currentCert.image}
                        alt={currentCert.title}
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                      />
                    ) : (
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text-secondary)' }}>
                        <FileText size={64} style={{ marginBottom: '1rem', color: '#5A67D8' }} />
                        <span style={{ fontWeight: 500 }}>Certificate Document</span>
                      </div>
                    )}

                    {/* Floating Badge */}
                    <div style={{
                      position: 'absolute',
                      right: '2rem',
                      bottom: '-32px',
                      backgroundColor: '#5A67D8',
                      color: 'white',
                      width: '56px',
                      height: '64px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 8px 16px rgba(90, 103, 216, 0.3)',
                      zIndex: 5
                    }}>
                      <Award size={28} />
                    </div>
                  </div>

                  {/* Text Area */}
                  <div style={{ padding: '2.5rem 2rem 2rem 2rem' }}>
                    <h3 style={{
                      fontSize: '1.4rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      marginBottom: '0.5rem',
                      paddingRight: '4rem',
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word'
                    }}>
                      {currentCert.title}
                    </h3>
                    <p style={{ color: '#5A67D8', fontSize: '1.05rem', fontWeight: 500, marginBottom: '2.5rem' }}>
                      {currentCert.issuer}
                    </p>

                    {/* Divider & Footer */}
                    <div style={{
                      borderTop: '1px solid var(--border-color)',
                      paddingTop: '1.5rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                        <Calendar size={18} />
                        <span>{currentCert.date}</span>
                      </div>

                      <a
                        href={currentCert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          color: 'var(--text-secondary)',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          letterSpacing: '1px',
                          textTransform: 'uppercase',
                          transition: 'color 0.2s ease'
                        }}
                        onMouseOver={e => e.currentTarget.style.color = '#5A67D8'}
                        onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                      >
                        Verified <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                </div>

                {/* Next Button */}
                <button
                  className="cert-nav-next"
                  onClick={nextCert}
                  style={buttonStyle}
                  onMouseOver={e => { e.currentTarget.style.backgroundColor = 'var(--text-primary)'; e.currentTarget.style.color = 'var(--bg-primary)'; }}
                  onMouseOut={e => { e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
                  aria-label="Next Certificate"
                >
                  <ChevronRight size={24} />
                </button>

              </div>

              {/* Pagination Indicators */}
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem', gap: '0.6rem' }}>
                {certificates.map((_, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: idx === currentIndex ? '28px' : '8px',
                      height: '8px',
                      borderRadius: '99px',
                      backgroundColor: idx === currentIndex ? '#5A67D8' : 'var(--border-color)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onClick={() => setCurrentIndex(idx)}
                  />
                ))}
              </div>
          {showAll && (
            <div style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.85)',
              zIndex: 9999,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 'clamp(1rem, 3vw, 2rem)',
              backdropFilter: 'blur(4px)'
            }}>
              <div className="cert-card-animated" style={{
                backgroundColor: 'var(--bg-secondary)',
                width: '100%',
                maxWidth: '1200px',
                maxHeight: '90vh',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                boxShadow: '0 24px 48px rgba(0,0,0,0.4)',
                border: '1px solid var(--border-color)',
                overflow: 'hidden'
              }}>
                {/* Header Area */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 'clamp(1rem, 3vw, 1.5rem) clamp(1rem, 4vw, 2rem)',
                  borderBottom: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-secondary)',
                  zIndex: 10
                }}>
                  <h3 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', color: 'var(--text-primary)', margin: 0 }}>All Certificates</h3>
                  <button
                    onClick={() => setShowAll(false)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-primary)',
                      cursor: 'pointer',
                      padding: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--bg-primary)'}
                    onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <X size={28} />
                  </button>
                </div>

                {/* Content Area */}
                <div style={{ padding: 'clamp(1rem, 4vw, 2rem)', overflowY: 'auto' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              {certificates.map((cert) => (
                <div key={cert.id} style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                }}>
                  <div style={{ height: '160px', backgroundColor: '#fff', borderRadius: '8px', padding: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {cert.image ? (
                      <img src={cert.image} alt={cert.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                    ) : (
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'var(--text-secondary)' }}>
                        <FileText size={48} style={{ marginBottom: '0.5rem', color: '#5A67D8' }} />
                        <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>Certificate Document</span>
                      </div>
                    )}
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.4 }}>{cert.title}</h4>
                  <p style={{ color: '#5A67D8', fontSize: '0.9rem', fontWeight: 500 }}>{cert.issuer}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{cert.date}</span>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.3rem', textDecoration: 'none' }} onMouseOver={e => e.currentTarget.style.color = '#5A67D8'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                      Verified <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
                </div>
                </div>
              </div>
            </div>
          )}

          {/* View All Button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <button
              onClick={() => setShowAll(!showAll)}
              style={{
                padding: '0.8rem 1.5rem',
                backgroundColor: 'transparent',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                color: 'var(--text-primary)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseOver={e => { e.currentTarget.style.backgroundColor = 'var(--text-primary)'; e.currentTarget.style.color = 'var(--bg-primary)'; }}
              onMouseOut={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--text-primary)'; }}
            >
              View All Certificates
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certificates;


