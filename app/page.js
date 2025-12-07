'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
            <Link href="#features">Features</Link>
            <Link href="#screenshots">Screenshots</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="#download" className={styles.downloadBtn}>
              Download
            </Link>
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
      {/* MOBILE MENU           */}
      {/* ===================== */}
      {openMenu && (
        <div className={styles.mobileMenu}>
          <Link href="#features" onClick={() => setOpenMenu(false)}>Features</Link>
          <Link href="#screenshots" onClick={() => setOpenMenu(false)}>Screenshots</Link>
          <Link href="/privacy" onClick={() => setOpenMenu(false)}>Privacy</Link>
          <Link
            href="#download"
            className={styles.downloadBtnMobile}
            onClick={() => setOpenMenu(false)}
          >
            Download
          </Link>
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
            share media, and stay connected — all in one beautifully designed app.
          </p>

          <div className={styles.heroCta}>
            <Link href="#download" className={styles.appStoreBadge}>
              <Image
                src="/images/app-store-badge.svg"
                alt="Download on App Store"
                width={150}
                height={50}
                priority
              />
            </Link>
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
          {[
            { src: "/screenshots/CourtFusion_Screenshot_2_TeamFeed.png", label: "Team Feed" },
            { src: "/screenshots/CourtFusion_Screenshot_4_LiveScoring.png", label: "Live Scoring" },
            { src: "/screenshots/CourtFusion_Screenshot_5_MediaGallery.png", label: "Media Gallery" },
            { src: "/screenshots/CourtFusion_Screenshot_7_GameSummary.png", label: "Game Summary" }
          ].map((shot, i) => (
            <div key={i} className={styles.screenshotCard}>
              <Image
                src={shot.src}
                width={1290}
                height={2796}
                alt={shot.label}
                className={styles.screenshot}
              />
              <p className={styles.screenshotLabel}>{shot.label}</p>
            </div>
          ))}
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
      {/* PREMIUM FOOTER        */}
      {/* ===================== */}
      <footer
        style={{
          background: "#1D1D1F",
          color: "white",
          padding: "5rem 2rem 2rem",
          marginTop: "6rem"
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "4rem"
          }}
        >
          {/* BRAND */}
          <div style={{ flex: 1, minWidth: "280px" }}>
            <span
              style={{
                fontSize: "1.7rem",
                fontWeight: 700,
                display: "block",
                marginBottom: "1rem"
              }}
            >
              🏀 CourtFusion
            </span>
            <p
              style={{
                color: "#bfbfbf",
                lineHeight: 1.7,
                fontSize: "1.05rem",
                maxWidth: "320px"
              }}
            >
              Youth basketball team management made simple.  
              Keep coaches, parents, and players connected.
            </p>
          </div>

          {/* COLUMNS */}
          <div
            style={{
              display: "flex",
              gap: "5rem",
              flexWrap: "wrap",
              minWidth: "280px"
            }}
          >
            {/* PRODUCT */}
            <div>
              <h4
                style={{
                  fontWeight: 700,
                  marginBottom: "1rem",
                  fontSize: "1.15rem"
                }}
              >
                Product
              </h4>
              <Link href="#features" style={{ color: "#bfbfbf", display: "block", marginBottom: ".7rem" }}>
                Features
              </Link>
              <Link href="#screenshots" style={{ color: "#bfbfbf", display: "block", marginBottom: ".7rem" }}>
                Screenshots
              </Link>
              <Link href="#download" style={{ color: "#bfbfbf", display: "block" }}>Download</Link>
            </div>

            {/* SUPPORT */}
            <div>
              <h4
                style={{
                  fontWeight: 700,
                  marginBottom: "1rem",
                  fontSize: "1.15rem"
                }}
              >
                Support
              </h4>
              <a href="mailto:support@courtfusion.app" style={{ color: "#bfbfbf", display: "block", marginBottom: ".7rem" }}>
                Contact Support
              </a>
              <a href="mailto:hello@courtfusion.app" style={{ color: "#bfbfbf", display: "block" }}>
                General Inquiry
              </a>
            </div>

            {/* LEGAL */}
            <div>
              <h4
                style={{
                  fontWeight: 700,
                  marginBottom: "1rem",
                  fontSize: "1.15rem"
                }}
              >
                Legal
              </h4>
              <Link href="/privacy" style={{ color: "#bfbfbf", display: "block", marginBottom: ".7rem" }}>
                Privacy Policy
              </Link>
              <a href="mailto:privacy@courtfusion.app" style={{ color: "#bfbfbf", display: "block" }}>
                Privacy Concerns
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "3rem auto 0",
            paddingTop: "2rem",
            borderTop: "1px solid #333",
            textAlign: "center",
            color: "#777",
            fontSize: ".9rem"
          }}
        >
          © 2024 CourtFusion. All rights reserved.
        </div>
      </footer>

    </main>
  );
}
