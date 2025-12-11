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
          <p className={styles.lastUpdated}>Last Updated: December 11, 2025</p>
        </header>

        <div className={styles.content}>

          {/* INTRODUCTION */}
          <section className={styles.section}>
            <h2>Introduction</h2>
            <p>
              CourtFusion ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard 
              your information when you use our mobile application or related services.
            </p>
          </section>

          {/* INFORMATION WE COLLECT */}
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
              <li>In-app purchase history (via RevenueCat)</li>
            </ul>
          </section>

          {/* THIRD PARTY SERVICES (NEW REQUIRED SECTION) */}
          <section className={styles.section}>
            <h2>Third-Party Service Providers</h2>
            <p>
              CourtFusion uses trusted third-party services to operate the app. These providers 
              only receive the information necessary to perform their functions:
            </p>
            <ul>
              <li><strong>Supabase:</strong> Authentication, user accounts, database storage</li>
              <li><strong>RevenueCat:</strong> Managing in-app subscriptions and purchases</li>
              <li><strong>Expo / React Native:</strong> App functionality and device tools</li>
            </ul>
            <p style={{ marginTop: '10px', fontWeight: 600 }}>
              We do NOT sell personal data to any third parties.
            </p>
          </section>

          {/* HOW WE USE */}
          <section className={styles.section}>
            <h2>How We Use Your Information</h2>
            <ul>
              <li>Provide and maintain the App</li>
              <li>Enable team management features</li>
              <li>Facilitate communication</li>
              <li>Store and share team content</li>
              <li>Send notifications</li>
              <li>Improve user experience</li>
              <li>Process subscriptions and verify premium access</li>
            </ul>
          </section>

          {/* DATA SHARING DISCLOSURE (NEW REQUIRED SECTION) */}
          <section className={styles.section}>
            <h2>How We Share Your Information</h2>
            <p>
              We do not share personal information with third parties except:
            </p>
            <ul>
              <li>When required to operate the app (Supabase, RevenueCat)</li>
              <li>When required by law or to protect user safety</li>
              <li>With explicit user consent</li>
            </ul>
          </section>

          {/* CHILDREN */}
          <section className={styles.section}>
            <h2>Children's Privacy</h2>
            <p>
              CourtFusion is used by youth sports teams and may involve users under 13. 
              We comply with COPPA and require verified parental consent for child accounts.
            </p>
          </section>

          {/* DATA RETENTION (NEW REQUIRED SECTION) */}
          <section className={styles.section}>
            <h2>Data Retention</h2>
            <p>
              We retain personal data only as long as needed to provide the service. 
              Users may request account deletion at any time.
            </p>
          </section>

          {/* DATA SECURITY */}
          <section className={styles.section}>
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect 
              your information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          {/* USER RIGHTS */}
          <section className={styles.section}>
            <h2>Your Rights</h2>
            <ul>
              <li><strong>Access:</strong> Request your personal data</li>
              <li><strong>Correction:</strong> Fix inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your data</li>
              <li><strong>Portability:</strong> Export or transfer your data</li>
            </ul>
          </section>

          {/* ACCOUNT DELETION (NEW REQUIRED SECTION FOR GOOGLE) */}
          <section className={styles.section}>
            <h2>Account & Data Deletion</h2>
            <p>
              Users can request account deletion by emailing 
              <strong> support@courtfusion.app</strong>. Upon confirmation:
            </p>
            <ul>
              <li>Your account will be permanently removed from Supabase</li>
              <li>All team data associated with you will be deleted or anonymized</li>
              <li>Your subscription status will be updated via RevenueCat</li>
            </ul>
          </section>

          {/* CONTACT */}
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
