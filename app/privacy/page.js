import Link from 'next/link'
import styles from './privacy.module.css'

export const metadata = {
  title: 'Privacy Policy - CourtFusion',
  description: 'CourtFusion Privacy Policy - Learn how we protect your data',
}

export default function Privacy() {
  return (
    <main className={styles.privacyPage}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.backLink}>← Back to Home</Link>
      </nav>

      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last Updated: December 7, 2024</p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>Introduction</h2>
            <p>
              CourtFusion ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Information We Collect</h2>
            
            <h3>Personal Information</h3>
            <ul>
              <li>Name and email address</li>
              <li>Team and player information</li>
              <li>Profile photos</li>
              <li>Game statistics</li>
              <li>Photos and videos</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <ul>
              <li>Device information</li>
              <li>Usage data</li>
              <li>Log data</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>How We Use Your Information</h2>
            <ul>
              <li>Provide and maintain the App</li>
              <li>Enable team management features</li>
              <li>Facilitate communication</li>
              <li>Store and share team content</li>
              <li>Send notifications</li>
              <li>Improve user experience</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Children's Privacy</h2>
            <p>
              CourtFusion is designed for youth basketball teams and may be used by minors under 13. We comply with COPPA. Parental consent is required for users under 13.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className={styles.section}>
            <h2>Your Rights</h2>
            <ul>
              <li><strong>Access:</strong> Request your personal data</li>
              <li><strong>Correction:</strong> Fix inaccurate information</li>
              <li><strong>Deletion:</strong> Delete your data</li>
              <li><strong>Portability:</strong> Transfer your data</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Contact Us</h2>
            <div className={styles.contactInfo}>
              <p><strong>Email:</strong> privacy@courtfusion.app</p>
              <p><strong>Support:</strong> support@courtfusion.app</p>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <Link href="/" className={styles.homeLink}>Return to Homepage</Link>
        </footer>
      </div>
    </main>
  )
}
