import './globals.css'

export const metadata = {
  title: 'CourtFusion - Youth Basketball Team Management App',
  description:
    'The ultimate team management app for youth basketball. Track stats, manage rosters, share media, and stay connected with coaches, players, and parents.',
  keywords: [
    'youth basketball',
    'team management',
    'sports app',
    'basketball stats',
    'team communication',
    'basketball coaching',
  ],
  authors: [{ name: 'CourtFusion' }],
  openGraph: {
    title: 'CourtFusion - Youth Basketball Team Management',
    description: 'Manage your youth basketball team like a pro. Available now on the App Store.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CourtFusion - Youth Basketball Team Management',
    description: 'The ultimate app for youth basketball teams',
  },
};

// ✅ FIX: move viewport + themeColor OUTSIDE metadata
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B1F4C',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏀</text></svg>"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
