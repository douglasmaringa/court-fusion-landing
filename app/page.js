'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <main className={styles.main}>

      {/* ===================== */}
      {/* NAVIGATION SECTION    */}
      {/* ===================== */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          
          {/* LOGO */}
          <div className={styles.logo}>
            <span className={styles.logoIcon}>🏀</span>
            <span className={styles.logoText}>CourtFusion</span>
          </div>

          {/* DESKTOP NAV LINKS */}
          <div className={styles.navLinks}>
            <a href="#features">Features</a>
            <a href="#screenshots">Screenshots</a>
            <a href="/privacy">Privacy</a>
            <a href="#download" className={styles.downloadBtn}>Download</a>
          </div>

          {/* MOBILE BURGER MENU */}
          <button
            className={styles.burger}
            onClick={() => setOpenMenu(prev => !prev)}
            aria-label="Toggle Navigation"
          >
            <div className={styles.burgerLine}></div>
            <div className={styles.burgerLine}></div>
            <div className={styles.burgerLine}></div>
          </button>
        </div>
      </nav>

      {/* ===================== */}
      {/* MOBILE MENU (Outside nav — FIXED) */}
      {/* ===================== */}
      {openMenu && (
        <div className={styles.mobileMenu}>
          <a href="#features" onClick={() => setOpenMenu(false)}>Features</a>
          <a href="#screenshots" onClick={() => setOpenMenu(false)}>Screenshots</a>
          <a href="/privacy" onClick={() => setOpenMenu(false)}>Privacy</a>
          <a
            href="#download"
            className={styles.downloadBtnMobile}
            onClick={() => setOpenMenu(false)}
          >
            Download
          </a>
        </div>
      )}

      {/* ===================== */}
      {/* HERO SECTION          */}
      {/* ===================== */}
      <section className={styles.hero}>
        
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Youth Basketball<br />
            Team Management<br />
            <span className={styles.gradient}>Made Simple</span>
          </h1>

          <p className={styles.heroSubtitle}>
            The ultimate app for coaches, players, and parents. Manage teams, track stats,
            share media, and stay connected—all in one beautifully designed app.
          </p>

          <div className={styles.heroCta}>
            <a href="#download" className={styles.appStoreBadge}>
              <Image
                src="/images/app-store-badge.svg"
                alt="Download on App Store"
                width={150}
                height={50}
                priority
              />
            </a>
          </div>

          {/* HERO STATS */}
          <div className={styles.heroStats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>10K+</div>
              <div className={styles.statLabel}>Active Teams</div>
            </div>

            <div className={styles.stat}>
              <div className={styles.statNumber}>4.9</div>
              <div className={styles.statLabel}>App Rating</div>
            </div>

            <div className={styles.stat}>
              <div className={styles.statNumber}>50K+</div>
              <div className={styles.statLabel}>Games Scored</div>
            </div>
          </div>
        </div>

        <div className={styles.heroImage}>
          <div className={styles.phoneContainer}>
            <Image
              src="/screenshots/CourtFusion_Screenshot_1_Welcome.png"
              alt="App Screenshot"
              width={1290}
              height={2796}
              priority
              className={styles.heroPhone}
            />
          </div>
        </div>

      </section>

      {/* ===================== */}
      {/* FEATURES SECTION      */}
      {/* ===================== */}
      <section id="features" className={styles.features}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Everything Your Team Needs</h2>
          <p className={styles.sectionSubtitle}>Professional tools for youth basketball</p>
        </div>

        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📱</div>
            <h3>Team Feed</h3>
            <p>Share updates, photos, and announcements.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📊</div>
            <h3>Live Scoring</h3>
            <p>Track gameplay stats instantly.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📅</div>
            <h3>Game Schedule</h3>
            <p>Organize games, practices, tournaments.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📸</div>
            <h3>Media Gallery</h3>
            <p>Save and share team photos & videos.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📈</div>
            <h3>Player Stats</h3>
            <p>Track season averages and progress.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🎨</div>
            <h3>Team Branding</h3>
            <p>Customize team colors and theme.</p>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* SCREENSHOTS SECTION   */}
      {/* ===================== */}
      <section id="screenshots" className={styles.screenshots}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Experience the App</h2>
          <p className={styles.sectionSubtitle}>Beautifully designed. Incredibly powerful.</p>
        </div>

        <div className={styles.screenshotsCarousel}>
          <div className={styles.screenshotCard}>
            <Image
              src="/screenshots/CourtFusion_Screenshot_2_TeamFeed.png"
              width={1290} height={2796}
              alt="Team Feed"
              className={styles.screenshot}
            />
            <p className={styles.screenshotLabel}>Team Feed</p>
          </div>

          <div className={styles.screenshotCard}>
            <Image
              src="/screenshots/CourtFusion_Screenshot_4_LiveScoring.png"
              width={1290} height={2796}
              alt="Live Scoring"
              className={styles.screenshot}
            />
            <p className={styles.screenshotLabel}>Live Scoring</p>
          </div>

          <div className={styles.screenshotCard}>
            <Image
              src="/screenshots/CourtFusion_Screenshot_5_MediaGallery.png"
              width={1290} height={2796}
              alt="Media Gallery"
              className={styles.screenshot}
            />
            <p className={styles.screenshotLabel}>Media Gallery</p>
          </div>

          <div className={styles.screenshotCard}>
            <Image
              src="/screenshots/CourtFusion_Screenshot_7_GameSummary.png"
              width={1290} height={2796}
              alt="Game Summary"
              className={styles.screenshot}
            />
            <p className={styles.screenshotLabel}>Game Summary</p>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* TESTIMONIALS          */}
      {/* ===================== */}
      <section className={styles.testimonials}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Loved by Coaches & Parents</h2>
        </div>

        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialCard}>
            ⭐⭐⭐⭐⭐
            <p className={styles.testimonialText}>
              "The live scoring alone makes this app worth it!"
            </p>
            <p className={styles.testimonialAuthor}>— Coach Sarah</p>
          </div>

          <div className={styles.testimonialCard}>
            ⭐⭐⭐⭐⭐
            <p className={styles.testimonialText}>
              "Best team communication tool we’ve used."
            </p>
            <p className={styles.testimonialAuthor}>— David K.</p>
          </div>

          <div className={styles.testimonialCard}>
            ⭐⭐⭐⭐⭐
            <p className={styles.testimonialText}>
              "My son loves checking his stats after each game."
            </p>
            <p className={styles.testimonialAuthor}>— Jennifer L.</p>
          </div>
        </div>
      </section>

      {/* ===================== */}
      {/* DOWNLOAD SECTION      */}
      {/* ===================== */}
      <section id="download" className={styles.download}>
        <div className={styles.downloadContent}>
          <h2 className={styles.downloadTitle}>Ready to Transform Your Team?</h2>
          <p className={styles.downloadSubtitle}>Join thousands of teams using CourtFusion</p>

          <a href="https://apps.apple.com" className={styles.appStoreBtnLarge}>
            <Image
              src="/images/app-store-badge.svg"
              alt="App Store"
              width={180}
              height={60}
            />
          </a>

          <p className={styles.downloadNote}>Available for iPhone and iPad</p>
        </div>
      </section>

      {/* ===================== */}
      {/* FOOTER                */}
      {/* ===================== */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>

          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}>🏀 CourtFusion</span>
            <p>Youth basketball management made simple</p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.footerColumn}>
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#screenshots">Screenshots</a>
              <a href="#download">Download</a>
            </div>

            <div className={styles.footerColumn}>
              <h4>Support</h4>
              <a href="mailto:support@courtfusion.app">Contact Support</a>
              <a href="mailto:hello@courtfusion.app">General Inquiry</a>
            </div>

            <div className={styles.footerColumn}>
              <h4>Legal</h4>
              <a href="/privacy">Privacy Policy</a>
              <a href="mailto:privacy@courtfusion.app">Privacy Concerns</a>
            </div>
          </div>

        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2024 CourtFusion. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
