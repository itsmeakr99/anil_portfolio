import React from "react";

export default function Portfolio() {
  return (
    <div style={{ fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif', background: '#f9f9f9', color: '#333', padding: '1rem' }}>
      <header style={{ background: '#003366', color: 'white', padding: '2rem', textAlign: 'center' }}>
        <h1>Anil Kumar Reddy Eddala Narayana</h1>
        <p>Full Stack Java Developer | anilkumarreddyeddala@gmail.com</p>
      </header>

      <nav style={{ background: '#004080', padding: '0.5rem', textAlign: 'center' }}>
        <a href="#about" style={{ color: 'white', margin: '0 15px', textDecoration: 'none', fontWeight: 'bold' }}>About</a>
        <a href="#experience" style={{ color: 'white', margin: '0 15px', textDecoration: 'none', fontWeight: 'bold' }}>Experience</a>
        <a href="#skills" style={{ color: 'white', margin: '0 15px', textDecoration: 'none', fontWeight: 'bold' }}>Skills</a>
        <a href="#education" style={{ color: 'white', margin: '0 15px', textDecoration: 'none', fontWeight: 'bold' }}>Education</a>
        <a href="#contact" style={{ color: 'white', margin: '0 15px', textDecoration: 'none', fontWeight: 'bold' }}>Contact</a>
      </nav>

      <section id="about" style={{ maxWidth: '1000px', margin: 'auto', padding: '2rem' }}>
        <h2 style={{ color: '#004080' }}>About</h2>
        <p>
          Full Stack Java Developer with 8+ years of experience designing, developing, and deploying scalable and secure enterprise applications. Skilled in React, Angular, Spring Boot, Microservices, Kafka, and AWS, with a passion for clean code and solving business challenges through technology.
        </p>
      </section>

      <section id="experience" style={{ maxWidth: '1000px', margin: 'auto', padding: '2rem' }}>
        <h2 style={{ color: '#004080' }}>Experience</h2>
        <p>Experience content here...</p>
      </section>

      <section id="skills" style={{ maxWidth: '1000px', margin: 'auto', padding: '2rem' }}>
        <h2 style={{ color: '#004080' }}>Skills</h2>
        <p>Skills content here...</p>
      </section>

      <section id="education" style={{ maxWidth: '1000px', margin: 'auto', padding: '2rem' }}>
        <h2 style={{ color: '#004080' }}>Education</h2>
        <p>Education content here...</p>
      </section>

      <section id="contact" style={{ maxWidth: '1000px', margin: 'auto', padding: '2rem' }}>
        <h2 style={{ color: '#004080' }}>Contact</h2>
        <p>Email: anilkumarreddyeddala@gmail.com</p>
      </section>

      <footer style={{ background: '#003366', color: 'white', textAlign: 'center', padding: '1rem' }}>
        &copy; 2025 Anil Kumar Reddy | Full Stack Developer Portfolio
      </footer>
    </div>
  );
}
