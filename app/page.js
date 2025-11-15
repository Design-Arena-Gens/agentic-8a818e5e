export default function Home() {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <nav style={styles.nav}>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#projects" style={styles.navLink}>Projects</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      <main style={styles.main}>
        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <h1 style={styles.heroTitle}>Hi, I'm Alex Johnson</h1>
            <p style={styles.heroSubtitle}>Software Engineer & Creative Technologist</p>
            <p style={styles.heroDescription}>
              I build elegant solutions to complex problems, specializing in web development
              and user experience design.
            </p>
            <div style={styles.heroButtons}>
              <a href="#projects" style={styles.primaryButton}>View My Work</a>
              <a href="#contact" style={styles.secondaryButton}>Get In Touch</a>
            </div>
          </div>
        </section>

        <section id="about" style={styles.section}>
          <h2 style={styles.sectionTitle}>About Me</h2>
          <div style={styles.aboutContent}>
            <p style={styles.aboutText}>
              I'm a passionate software engineer with 5+ years of experience building web applications.
              I love creating intuitive, performant, and accessible digital experiences that make a difference.
            </p>
            <div style={styles.skills}>
              <div style={styles.skillTag}>React</div>
              <div style={styles.skillTag}>Next.js</div>
              <div style={styles.skillTag}>TypeScript</div>
              <div style={styles.skillTag}>Node.js</div>
              <div style={styles.skillTag}>Python</div>
              <div style={styles.skillTag}>UI/UX Design</div>
            </div>
          </div>
        </section>

        <section id="projects" style={styles.section}>
          <h2 style={styles.sectionTitle}>Featured Projects</h2>
          <div style={styles.projectsGrid}>
            <div style={styles.projectCard}>
              <h3 style={styles.projectTitle}>E-Commerce Platform</h3>
              <p style={styles.projectDescription}>
                A full-stack e-commerce solution with real-time inventory management and payment processing.
              </p>
              <div style={styles.projectTags}>
                <span style={styles.projectTag}>React</span>
                <span style={styles.projectTag}>Node.js</span>
                <span style={styles.projectTag}>PostgreSQL</span>
              </div>
            </div>
            <div style={styles.projectCard}>
              <h3 style={styles.projectTitle}>Task Management App</h3>
              <p style={styles.projectDescription}>
                Collaborative task management tool with real-time updates and team analytics.
              </p>
              <div style={styles.projectTags}>
                <span style={styles.projectTag}>Next.js</span>
                <span style={styles.projectTag}>WebSockets</span>
                <span style={styles.projectTag}>MongoDB</span>
              </div>
            </div>
            <div style={styles.projectCard}>
              <h3 style={styles.projectTitle}>Portfolio Generator</h3>
              <p style={styles.projectDescription}>
                Open-source tool for developers to quickly generate customizable portfolio websites.
              </p>
              <div style={styles.projectTags}>
                <span style={styles.projectTag}>TypeScript</span>
                <span style={styles.projectTag}>CLI</span>
                <span style={styles.projectTag}>Templates</span>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" style={styles.section}>
          <h2 style={styles.sectionTitle}>Get In Touch</h2>
          <p style={styles.contactText}>
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div style={styles.contactLinks}>
            <a href="mailto:alex@example.com" style={styles.contactLink}>Email</a>
            <a href="https://github.com" style={styles.contactLink}>GitHub</a>
            <a href="https://linkedin.com" style={styles.contactLink}>LinkedIn</a>
            <a href="https://twitter.com" style={styles.contactLink}>Twitter</a>
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2025 Alex Johnson. Built with Next.js</p>
      </footer>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    padding: '20px 40px',
    borderBottom: '1px solid #e5e7eb',
    position: 'sticky',
    top: 0,
    backgroundColor: '#ffffff',
    zIndex: 100,
  },
  nav: {
    display: 'flex',
    gap: '30px',
    justifyContent: 'center',
  },
  navLink: {
    color: '#374151',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'color 0.2s',
  },
  main: {
    flex: 1,
  },
  hero: {
    padding: '120px 40px',
    backgroundColor: '#f9fafb',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '56px',
    fontWeight: '700',
    color: '#111827',
    margin: '0 0 20px 0',
  },
  heroSubtitle: {
    fontSize: '24px',
    color: '#6366f1',
    fontWeight: '600',
    margin: '0 0 20px 0',
  },
  heroDescription: {
    fontSize: '18px',
    color: '#6b7280',
    lineHeight: '1.6',
    margin: '0 0 40px 0',
  },
  heroButtons: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
  },
  primaryButton: {
    padding: '14px 32px',
    backgroundColor: '#6366f1',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    transition: 'background-color 0.2s',
  },
  secondaryButton: {
    padding: '14px 32px',
    backgroundColor: '#ffffff',
    color: '#6366f1',
    textDecoration: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    border: '2px solid #6366f1',
    transition: 'background-color 0.2s',
  },
  section: {
    padding: '80px 40px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontSize: '40px',
    fontWeight: '700',
    color: '#111827',
    marginBottom: '40px',
    textAlign: 'center',
  },
  aboutContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  aboutText: {
    fontSize: '18px',
    color: '#4b5563',
    lineHeight: '1.8',
    marginBottom: '30px',
  },
  skills: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '12px',
    justifyContent: 'center',
  },
  skillTag: {
    padding: '8px 20px',
    backgroundColor: '#e0e7ff',
    color: '#4338ca',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
  },
  projectCard: {
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
    transition: 'box-shadow 0.2s',
  },
  projectTitle: {
    fontSize: '24px',
    fontWeight: '600',
    color: '#111827',
    marginBottom: '12px',
  },
  projectDescription: {
    fontSize: '16px',
    color: '#6b7280',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  projectTags: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  },
  projectTag: {
    padding: '4px 12px',
    backgroundColor: '#f3f4f6',
    color: '#374151',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: '500',
  },
  contactText: {
    fontSize: '18px',
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: '30px',
  },
  contactLinks: {
    display: 'flex',
    gap: '30px',
    justifyContent: 'center',
  },
  contactLink: {
    color: '#6366f1',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '600',
    transition: 'color 0.2s',
  },
  footer: {
    padding: '30px',
    backgroundColor: '#f9fafb',
    borderTop: '1px solid #e5e7eb',
  },
  footerText: {
    textAlign: 'center',
    color: '#9ca3af',
    fontSize: '14px',
  },
}
