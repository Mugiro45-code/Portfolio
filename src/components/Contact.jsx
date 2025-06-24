import React, { useState } from 'react';
import './styles/Contact.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState(""); // NEW

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmittedName(form.name); // Save the name before clearing
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="container my-5 animate__animated animate__fadeIn">
      <h2 className="section-title mb-2">
        <MailOutlineIcon style={{ color: '#38f9d7', fontSize: 32, marginRight: 12, verticalAlign: 'middle' }} />
        Contact
      </h2>
      <p className="text-muted mb-4 text-center" style={{ maxWidth: 500, margin: "0 auto" }}>
        Feel free to reach out for collaborations or just a friendly hello{' '}
        <WavingHandIcon style={{ color: '#ffc107', fontSize: 22, verticalAlign: 'middle' }} />
      </p>
      <div className="row justify-content-center">
        <div className="col-md-7">
          <form className="contact-form p-4 shadow rounded-4 bg-white" onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
              <label htmlFor="name">Your Name</label>
            </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
              <label htmlFor="email">Your Email</label>
            </div>
            <div className="form-floating mb-3">
              <textarea className="form-control" id="message" name="message" placeholder="Your Message" style={{ height: '120px' }} value={form.message} onChange={handleChange} required />
              <label htmlFor="message">Your Message</label>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-100 py-2 fw-bold"
              aria-label="Send Message"
              disabled={submitted}
            >
              Send Message
            </button>
            {submitted && (
              <div
                className="alert alert-success mt-3 animate__animated animate__fadeInDown"
                aria-live="polite"
                style={{
                  fontWeight: 600,
                  fontSize: "1.15rem",
                  textAlign: "center",
                  background: "linear-gradient(90deg, #38f9d7 0%, #43e97b 100%)",
                  color: "#222",
                  border: "none",
                  boxShadow: "0 4px 24px rgba(67, 233, 123, 0.15)"
                }}
              >
                Thank you{submittedName ? `, ${submittedName}` : ""}! Your message has been sent 🎉
              </div>
            )}
          </form>
          <div className="social-icons text-center mt-4">
            <a href="https://www.linkedin.com/in/mugilan-developer" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="contact-social-icon" />
            </a>
            <a href="https://www.instagram.com/mugiro_45/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <InstagramIcon className="contact-social-icon" />
            </a>
            <a href="mailto:mugi.developer@gmail.com" aria-label="Email">
              <EmailIcon className="contact-social-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;