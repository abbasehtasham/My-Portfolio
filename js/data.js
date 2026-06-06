// ============================================
// CENTRAL DATA: PROJECTS + BLOG_POSTS
// ============================================

const PROJECTS = {
  'pakwheels': {
    title: 'PakWheels Classified — Buy & Sell Car',
    type: 'Android App · Marketplace',
    cat: 'marketplace',
    image: 'images/pakwheels.png',
    desc: "Pakistan's largest automotive marketplace for car research, pricing, reviews, and listings. Led development of Classifieds and AutoStore with major UX enhancements.",
    playStore: 'https://play.google.com/store/apps/details?id=com.pakwheels',
    badge: 'Live',
    role: 'Senior Android Engineer',
    duration: '2022 — Present',
    stack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Hilt', 'Retrofit', 'Coroutines', 'Firebase'],
    highlights: [
      'Led Classifieds and AutoStore module re-architecture, cutting boilerplate by 35%',
      'Improved cold-start time by 28% via baseline profiles and lazy-init',
      'Shipped Compose migration for inventory screens with zero regressions',
      'Mentored 3 mid-level engineers on Clean Architecture patterns'
    ],
    about: "PakWheels is Pakistan's #1 destination for buying, selling and researching vehicles. The Android app serves millions of monthly users browsing classifieds, reading reviews and managing car services."
  },
  'smarty-suit': {
    title: 'Smarty Men Suit Photo Editor',
    type: 'Android App · AI Photo Editor',
    cat: 'lifestyle',
    image: 'images/smarty-men-suit.png',
    desc: 'AI background removal and styling tools for modern fashion photos. Lets users virtually try on 100+ professional suit designs with realistic photo compositing.',
    playStore: 'https://play.google.com/store/apps/details?id=com.ant.smarty.men.ai.photo.editor',
    badge: 'Live',
    stack: ['Kotlin', 'TensorFlow Lite', 'CameraX', 'Coil', 'MVVM'],
    highlights: [
      'On-device AI background removal pipeline',
      '100+ suit templates with real-time preview',
      'Realistic photo compositing using segmentation masks'
    ],
    about: 'AI-powered photo editor for trying on suits, formals and modern outfits.'
  },
  'fast-share': {
    title: 'Fast Share Transfer, Share All',
    type: 'Android App · Utility',
    cat: 'utility',
    image: 'images/fast-share.png',
    desc: 'Fast file sharing with cloud sync and optimized compression. Transfer photos, videos, music and documents between devices quickly and securely without internet.',
    playStore: 'https://play.google.com/store/apps/details?id=com.tas.share.now',
    badge: 'Live',
    stack: ['Kotlin', 'WiFi Direct', 'Hotspot API', 'WorkManager'],
    highlights: [
      'Offline transfer at speeds up to 40 MB/s',
      'Resumable transfers across interrupted connections',
      'Compressed bundles for large media folders'
    ],
    about: 'Cross-device file transfer without internet, using WiFi Direct and hotspot.'
  },
  'gps-camera': {
    title: 'GPS Camera & Time Stamp Photos',
    type: 'Android App · Utility',
    cat: 'utility',
    image: 'images/gps-camera.png',
    desc: 'Camera tools with GPS location and timestamp overlays. Automatically embed real-time coordinates, date and time data directly into photos with customizable templates.',
    playStore: 'https://play.google.com/store/apps/details?id=com.tas.gps.camera.timestamp',
    badge: 'Live',
    stack: ['Kotlin', 'CameraX', 'FusedLocationProvider', 'EXIF metadata'],
    highlights: [
      'Real-time GPS overlay with customizable templates',
      'Embeds coordinates and timestamps into EXIF',
      'Watermark presets for field-work and inspections'
    ],
    about: 'Professional GPS camera used by surveyors, field engineers and inspectors.'
  },
  'recover-messages': {
    title: 'Recover Deleted Text Messages',
    type: 'Android App · Recovery Tool',
    cat: 'utility',
    image: 'images/recover-messages.png',
    desc: 'Message and media recovery through notification scanning. Helps users retrieve lost SMS, photos, videos and documents using an innovative background scanning approach.',
    playStore: 'https://play.google.com/store/apps/details?id=com.fl.recover.deleted.massages',
    badge: 'Live',
    stack: ['Kotlin', 'NotificationListenerService', 'Room', 'MVVM'],
    highlights: [
      'Background notification listener stores deleted messages',
      'Media recovery via cache scanning',
      'Privacy-first: all data stays on-device'
    ],
    about: 'Recovers deleted SMS and chat messages by capturing notifications in the background.'
  },
  'gomobile-school': {
    title: 'Gomobile School App',
    type: 'Android App · EdTech',
    cat: 'utility',
    image: 'images/gomobile-school.png',
    desc: 'Complete school management with real-time chat, attendance tracking, fee management, bus location monitoring, and exam management for students, parents and staff.',
    playStore: 'https://play.google.com/store/apps/details?id=com.gomobile.app',
    badge: 'Live',
    stack: ['Kotlin', 'Firebase RTDB', 'Google Maps SDK', 'FCM', 'Retrofit'],
    highlights: [
      'Real-time chat for parents, teachers, and admin',
      'Live bus tracking on Google Maps',
      'Attendance, exams and fee payments in one app'
    ],
    about: 'School management super-app for parents, students, teachers and staff.'
  },
  'caller-locator': {
    title: 'Caller Number Locator',
    type: 'Android App · Utility',
    cat: 'utility',
    image: 'images/caller-locator.png',
    desc: 'Caller identification and live location tracking by phone number. Real-time location alerts, caller ID lookup, and number tracking to identify unknown callers.',
    playStore: 'https://play.google.com/store/apps/details?id=com.tas.phone.number.locator',
    badge: 'Live',
    stack: ['Kotlin', 'Truecaller-style ID', 'Google Maps', 'Telephony API'],
    highlights: [
      'Caller ID overlay using accessibility service',
      'Number-to-region lookup',
      'Live location share via SMS link'
    ],
    about: 'Caller ID and location lookup for unknown numbers.'
  },
  'financial-app': {
    title: 'Financial App (Confidential)',
    type: 'Android App · FinTech',
    cat: 'finance',
    image: 'images/financial-app.svg',
    desc: 'Secure finance dashboard built with Kotlin and Clean Architecture. Handles sensitive financial data with robust encryption, secure auth, and a polished user interface.',
    playStore: '#',
    badge: 'Live',
    stack: ['Kotlin', 'Clean Architecture', 'EncryptedSharedPrefs', 'Biometric API', 'Retrofit'],
    highlights: [
      'Biometric and PIN-secured auth flow',
      'AES-256 encrypted local storage',
      'Pixel-perfect transactions dashboard'
    ],
    about: 'Confidential financial dashboard for a banking client.'
  },
  'stag-vpn': {
    title: 'Stag VPN: Secure & Fast Proxy',
    type: 'Android App · Security & VPN',
    cat: 'utility',
    image: 'images/stag-vpn.png',
    desc: 'Browse securely with lightning-fast connections. 256-bit encryption, 50+ global server locations, ultra-fast speeds, and incognito browsing. 50K+ downloads on Play Store.',
    playStore: 'https://play.google.com/store/apps/details?id=com.doracone.stagvpn',
    badge: '50K+ DLs',
    stack: ['Kotlin', 'OpenVPN', 'WireGuard', 'VpnService API'],
    highlights: [
      '50K+ downloads on Play Store',
      'OpenVPN + WireGuard dual protocol',
      '50+ global server locations'
    ],
    about: 'Production VPN client supporting OpenVPN and WireGuard.'
  },
  'lurvio-vpn': {
    title: 'Lurvio VPN: Secure & Fast VPN',
    type: 'Android App · Security & VPN',
    cat: 'utility',
    image: 'images/lurvio-vpn.png',
    desc: 'Military-grade encrypted VPN with incognito browsing, ad removal, and traffic encryption. Protects your privacy across 500+ global server locations.',
    playStore: 'https://play.google.com/store/apps/details?id=com.lurvio.vpn',
    badge: 'Live',
    stack: ['Kotlin', 'WireGuard', 'VpnService API', 'AdMob'],
    highlights: [
      '500+ global server locations',
      'Traffic-level encryption and DNS-over-HTTPS',
      'Built-in ad-blocker'
    ],
    about: 'Premium VPN with global server locations.'
  }
};

const BLOG_POSTS = {
  'ai-right': {
    tag: 'AI & Productivity',
    title: "You're Using AI — Are You Using It Right?",
    date: 'Recently published',
    excerpt: "Most people treat AI like a magic answer machine. Here's what 6+ years of integrating AI into engineering workflows taught me about using it intentionally — and the trap to avoid.",
    cover: 'images/blogs/agentai_1.svg',
    body: `
      <p>AI tools are everywhere. ChatGPT, Claude, Copilot, Gemini — every developer, designer, writer, and student now has a powerful assistant a click away. But here's the question almost no one is honestly asking themselves:</p>
      <p><strong>Are you actually using AI right, or just using it?</strong></p>
      <img src="images/blogs/agentai_1.svg" alt="AI Tools Overview" class="post-img" />
      <h3>The Lazy Way vs The Smart Way</h3>
      <p>Most people treat AI like a magic answer machine. They type a vague question, accept whatever comes out, and ship it. The result? Mediocre output, recycled ideas, and a slow erosion of their own thinking muscles.</p>
      <p>The smart way is different. The smart way uses AI as a thinking partner — a tireless collaborator that helps you sharpen ideas, explore alternatives, and accelerate execution. The output is still <em>yours</em>, but better.</p>
      <h3>What I've Learned After Using AI Daily</h3>
      <p>As an Android engineer who has been integrating AI into my daily workflow for over a year, here are the patterns that actually work:</p>
      <p><strong>1. Be specific about context.</strong> "Write me a function" gets garbage. "Write me a Kotlin function using coroutines and Retrofit2 that fetches user profiles, with retry logic and proper error handling for our MVVM ViewModel" gets gold.</p>
      <p><strong>2. Iterate, don't accept the first answer.</strong> The first response is rarely the best. Push back. Ask "what's a cleaner way?" or "what edge cases am I missing?" The second and third iterations are where the real value lives.</p>
      <p><strong>3. Use AI to challenge your thinking, not replace it.</strong> Before I write a complex feature, I describe my plan to AI and ask it to poke holes in it. Half the time, it catches something I missed. The other half, defending my approach makes my thinking sharper.</p>
      <p><strong>4. Keep your own voice.</strong> If you blog, write code comments, or send proposals — the moment your work sounds like AI, it loses trust. Use AI for structure and ideas, but rewrite in your voice.</p>
      <img src="images/blogs/agentai_2.svg" alt="AI Workflow" class="post-img" />
      <h3>The Trap to Avoid</h3>
      <p>The biggest danger isn't AI making mistakes — it's AI making you complacent. If you stop reading docs because AI summarizes them, stop debugging because AI suggests fixes, stop thinking because AI thinks for you — you're not getting more productive. You're getting dependent.</p>
      <p>The developers who will dominate the next decade aren't the ones who use AI the most. They're the ones who use it <em>most intentionally</em>.</p>
      <h3>Final Thought</h3>
      <p>AI is a power tool. Power tools don't make you a craftsman — knowing when, where, and how to use them does. Get good at the question, the iteration, the judgment. The tool is just the tool.</p>
      <p>So — are you using AI, or are you using it right?</p>
    `
  }
};

// Helper: featured items shown on landing
const FEATURED_PROJECT_SLUGS = ['pakwheels', 'smarty-suit', 'stag-vpn'];
const FEATURED_POST_SLUGS = ['ai-right'];
