import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verify all fields are filled
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ submitting: false, success: false, error: 'Please fill in all fields before sending.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('https://formsubmit.co/ajax/jamespvper123@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`
        })
      });

      if (response.ok) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const result = await response.json();
        setStatus({ submitting: false, success: false, error: result.message || 'Failed to send message.' });
      }
    } catch (err) {
      setStatus({ submitting: false, success: false, error: 'Network error. Please check your connection and try again.' });
    }
  };

  return (
    <section id="contact" className="container" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="fade-in" style={{ width: '100%', maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--text-primary)' }}>Contact Form</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
          Please contact me directly at <span style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>jamespvper123@gmail.com</span> or drop your info here.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 calc(50% - 0.75rem)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="name" style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>Full name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name" 
                style={{
                  padding: '1rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  width: '100%',
                  fontSize: '1rem'
                }} 
              />
            </div>
            <div style={{ flex: '1 1 calc(50% - 0.75rem)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="email" style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com" 
                style={{
                  padding: '1rem',
                  borderRadius: '8px',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  width: '100%',
                  fontSize: '1rem'
                }} 
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="message" style={{ fontWeight: 'bold', color: 'var(--text-primary)' }}>Your Message</label>
            <textarea 
              id="message" 
              name="message" 
              required 
              rows="6" 
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..." 
              style={{
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                outline: 'none',
                width: '100%',
                resize: 'vertical',
                fontSize: '1rem'
              }}
            ></textarea>
          </div>

          {/* Success / Error Messages */}
          {status.success && (
            <div style={{
              padding: '1rem',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid #10b981',
              color: '#10b981',
              borderRadius: '8px',
              fontWeight: 500,
              fontSize: '0.95rem'
            }}>
              ✓ Thank you! Your message has been sent directly to James.
            </div>
          )}

          {status.error && (
            <div style={{
              padding: '1rem',
              backgroundColor: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid #ef4444',
              color: '#ef4444',
              borderRadius: '8px',
              fontWeight: 500,
              fontSize: '0.95rem'
            }}>
              ✗ Error: {status.error}
            </div>
          )}

          <button 
            type="submit" 
            className="submit-btn"
            disabled={status.submitting}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '1rem',
              backgroundColor: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              cursor: status.submitting ? 'not-allowed' : 'pointer',
              opacity: status.submitting ? 0.7 : 1,
              transition: 'all 0.2s ease',
              marginTop: '0.5rem'
            }} 
            onMouseOver={e => { 
              if (!status.submitting) {
                e.currentTarget.style.backgroundColor = 'var(--text-primary)'; 
                e.currentTarget.style.color = 'var(--bg-primary)'; 
              }
            }} 
            onMouseOut={e => { 
              if (!status.submitting) {
                e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'; 
                e.currentTarget.style.color = 'var(--text-primary)'; 
              }
            }}
          >
            {status.submitting ? 'Sending...' : 'Send'} <Send size={20} />
          </button>
        </form>

        <div style={{ marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem', textAlign: 'center' }}>
            Click the details below to contact me through other platforms:
          </p>
          <ul style={{
            listStyleType: 'disc',
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '1.2rem',
            paddingLeft: '1.5rem',
            margin: '0 auto',
            textAlign: 'left'
          }}>
            <li style={{ color: 'var(--text-secondary)' }}>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=jamespvper123@gmail.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <Mail size={20} style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '1.05rem', fontWeight: 500 }}>James Roble</span>
              </a>
            </li>
            <li style={{ color: 'var(--text-secondary)' }}>
              <a href="https://www.linkedin.com/in/james-harold-roble-51783b40a/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <FaLinkedin size={20} style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '1.05rem', fontWeight: 500 }}>James Harold Roble</span>
              </a>
            </li>
            <li style={{ color: 'var(--text-secondary)' }}>
              <a href="https://github.com/dJinz" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'} onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}>
                <FaGithub size={20} style={{ flexShrink: 0 }} />
                <span style={{ fontSize: '1.05rem', fontWeight: 500 }}>dJinz</span>
              </a>
            </li>
          </ul>
        </div>

        <p style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          © 2026 - Roble JH. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
