/**
 * BTH OS 2.0 — High-Performance Cockpit Features Script
 * 60 FPS, zero scroll jank, mobile touch-friendly
 * Professional, concise, institutional English descriptions
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Data Store for Interactive Spotlight Stage (Short, Professional English)
  const spotlightData = [
    {
      id: '01',
      title: 'BTH OS Dashboard',
      desc: 'Centralized trading cockpit featuring direct MT5 synchronization, live trade history, automated performance analytics, and a built-in trading journal—100% free on BTH OS.',
      img: 'bth os dashboard.png',
      windowTitle: 'BTH_OS_v2.0 // dashboard_cockpit.sys',
      tag: '01 / 11 &bull; MT5 &amp; JOURNAL',
      points: [
        'Direct MT5 Connection: Real-time account sync and live position tracking',
        'Performance Analytics: Automated win-rate, risk-reward, and drawdown metrics',
        'Built-in Trading Journal: Automated trade logging—100% free on BTH OS'
      ]
    },
    {
      id: '02',
      title: 'BTH Terminal Dashboard',
      desc: 'Institutional-grade native charting engine with simultaneous connectivity for MT5, Dhan, Angel One, and Crypto feeds, complete with full drawing tools and 1-click execution.',
      img: 'bth terminal dashboard.png',
      windowTitle: 'BTH_TERMINAL // multi_feed_engine.exe',
      tag: '02 / 11 &bull; MULTI-FEED TERMINAL',
      points: [
        'Multi-Feed Charting: MT5, Dhan, Angel One & Crypto feeds in one view',
        'Full Technical Suite: Comprehensive drawing tools with 1-click indicator overlays',
        'Real-Time Alerts: Instant price triggers and option level projection'
      ]
    },
    {
      id: '03',
      title: 'Premium & Free Indicators',
      desc: 'Auto-updated algorithmic indicators synced directly to your system for both Free and VIP tiers, with zero restrictions on indicator stacking.',
      img: 'premium & free indicators.png',
      windowTitle: 'INDICATORS // auto_sync_suite.algo',
      tag: '03 / 11 &bull; AUTO-UPDATED SUITE',
      points: [
        'Auto-Sync Algorithms: Latest indicator updates automatically deploy to your terminal',
        'Free & VIP Access: Institutional-grade indicator suites tailored for all traders',
        'Unlimited Stacking: Apply as many indicators as needed without artificial limits'
      ]
    },
    {
      id: '04',
      title: 'BTH Indicator Script Studio',
      desc: 'Built-in quant development environment to write custom scripts or auto-generate complete trading indicators using integrated AI vision and your own API keys.',
      img: 'bth indicator script studio.png',
      windowTitle: 'SCRIPT_STUDIO // ai_indicator_generator.ide',
      tag: '04 / 11 &bull; IN-APP IDE &amp; AI GENERATOR',
      points: [
        'Custom Script Authoring: Code, compile, and apply custom algorithms live on charts',
        'AI Indicator Generator: Connect your API key to generate indicators via AI prompts',
        'Upcoming Algo Tools: Continuous feature rollouts and compiler upgrades'
      ]
    },
    {
      id: '05',
      title: 'Institutional Option Chain',
      desc: 'Advanced option chain matrix delivering real-time Open Interest (OI) buildup, Greeks, and instant market condition analytics unavailable in standard broker terminals.',
      img: 'institutional option chain.png',
      windowTitle: 'OPTION_CHAIN // institutional_matrix.dat',
      tag: '05 / 11 &bull; ADVANCED DERIVATIVES',
      points: [
        'Advanced Matrix: Real-time Open Interest, volume shifts, and strike dynamics',
        'Live Market Condition: Instant status display (Bullish, Bearish, or Trap Zone)',
        'Chart Level Projection: Direct 1-click option support & resistance on charts'
      ]
    },
    {
      id: '06',
      title: 'Bar Replay with Paper Trading',
      desc: 'Candle-by-candle historical bar replay and virtual paper trading to rigorously test any indicator or strategy with zero financial risk.',
      img: 'bar replay with paper trading.png',
      windowTitle: 'SIMULATOR // bar_replay_papertrade.sim',
      tag: '06 / 11 &bull; ZERO-RISK BACKTESTING',
      points: [
        'Tick-by-Tick Bar Replay: Speed-controlled testing on historical price action',
        'Virtual Paper Trading: Execute simulated orders with realistic market fills',
        'Risk-Free Validation: Refine your edge without risking real capital'
      ]
    },
    {
      id: '07',
      title: 'Send Indicator Signals to Telegram',
      desc: 'Ultra-fast webhook forwarding delivering indicator buy/sell triggers directly to Telegram in milliseconds with Free (BTH branding) and VIP (custom branding) options.',
      img: 'send indicator signals to telegram.png',
      windowTitle: 'ALERTS // telegram_forwarder.bot',
      tag: '07 / 11 &bull; INSTANT BOT ALERTS',
      points: [
        'Free Tier: Route indicator alerts to Telegram with bthalgo.com branding',
        'VIP Custom Branding: Forward alerts under your own custom channel name',
        'Sub-Second Latency: Millisecond dispatch the exact moment conditions trigger'
      ]
    },
    {
      id: '08',
      title: 'Free Multiple Charts Layout',
      desc: 'View up to 4 simultaneous charts inside a single terminal with synchronized timeframes—100% free and fully optimized without costly subscriptions.',
      img: 'free mulitple charts layout.png',
      windowTitle: 'MULTI_CHART // 4chart_terminal_grid.lyt',
      tag: '08 / 11 &bull; 4-CHARTS SIMULTANEOUS',
      points: [
        '1 to 4 Simultaneous Charts: View 1, 2, 3, or 4 charts side-by-side in one window',
        '100% Free Forever: Zero subscription fees or multi-chart paywalls',
        'High-Performance Optimization: Fluid multi-timeframe rendering with zero lag'
      ]
    },
    {
      id: '09',
      title: 'AI Chart Analyzer (Multi-AI Agents)',
      desc: 'Multi-agent neural vision supporting top cloud AI models (Claude 3.5, GPT-4o, Gemini 1.5, DeepSeek) using your personal API keys for deep chart analysis.',
      img: 'ai chart analyzer ( supported many ai agents ).png',
      windowTitle: 'QUANT_AI // cloud_ai_agents.ai',
      tag: '09 / 11 &bull; CLOUD AI AGENTS',
      points: [
        'Multi-Agent Architecture: Connect leading frontier AI vision models',
        'Bring Your Own API: Direct API key integration for complete privacy and control',
        'Deep Market Vision: Automated scanning of price action, structure, and setups'
      ]
    },
    {
      id: '10',
      title: 'AI Chart Analyzer Output Preview',
      desc: 'Dual-engine intelligence featuring Cloud Engine (70–80% accuracy with image upload) and BTH ULTRA Engine (80–100% accuracy with zero upload), plus 38 free daily scans.',
      img: 'ai chart analyzer output preview.png',
      windowTitle: 'AI_OUTPUT // dual_engine_accuracy.rep',
      tag: '10 / 11 &bull; 38 FREE SCANS / DAY',
      points: [
        'Cloud Engine (70%–80% Accuracy): Upload chart images for structured reports',
        'BTH ULTRA Engine (80%–100% Accuracy): Direct automated scan with zero upload',
        '38 Free Daily Scans: Generous daily quota for all free users (unlimited on VIP)'
      ]
    },
    {
      id: '11',
      title: 'Dhan & Angel One Broker Connected',
      desc: 'Official real-time API connection with Dhan and Angel One for verified broker charts, live option chains, and upcoming automated algo trading.',
      img: 'dhan and angle one broker connected supported.png',
      windowTitle: 'BROKER_SYNC // dhan_angel_algo_bridge.api',
      tag: '11 / 11 &bull; DHAN &amp; ANGEL ONE',
      points: [
        'Official Real-Time API Sync: Direct connection with Dhan and Angel One',
        'Live Broker Charts & Option Chains: Stream exchange data in real time',
        'Upcoming Algo Trading: Automated execution direct on broker without manual clicks'
      ]
    }
  ];

  // 2. Spotlight Interactive Switcher
  const spotTabButtons = document.querySelectorAll('.spot-tab-btn');
  const spotSeqTag = document.getElementById('spotSeqTag');
  const spotTitle = document.getElementById('spotTitle');
  const spotDesc = document.getElementById('spotDesc');
  const spotPointsList = document.getElementById('spotPointsList');
  const spotWindowBar = document.getElementById('spotWindowBar');
  const spotImg = document.getElementById('spotImg');
  const spotWindow = document.getElementById('spotWindow');

  window.selectSpotlight = (index) => {
    const data = spotlightData[index];
    if (!data) return;

    // Update active tab button
    spotTabButtons.forEach((btn, idx) => {
      btn.classList.toggle('active', idx === index);
    });

    // Update info panel
    if (spotSeqTag) spotSeqTag.innerHTML = data.tag;
    if (spotTitle) spotTitle.textContent = data.title;
    if (spotDesc) spotDesc.textContent = data.desc;
    if (spotWindowBar) spotWindowBar.textContent = data.windowTitle;
    
    if (spotPointsList) {
      spotPointsList.innerHTML = data.points
        .map(pt => `<li><i class="fa-solid fa-circle-check"></i> <span>${pt}</span></li>`)
        .join('');
    }

    if (spotImg) {
      spotImg.src = data.img;
      spotImg.alt = data.title;
    }

    if (spotWindow) {
      spotWindow.onclick = () => window.openZoom(data.img, data.title);
    }
  };

  // 3. Fast Lightbox Zoom Modal
  const zoomModal = document.getElementById('zoomModal');
  const zoomImg = document.getElementById('zoomImg');
  const zoomCaption = document.getElementById('zoomCaption');
  const zoomCloseBtn = document.getElementById('zoomCloseBtn');

  window.openZoom = (imgSrc, caption) => {
    if (!zoomModal || !zoomImg) return;
    zoomImg.src = imgSrc;
    zoomImg.alt = caption || 'BTH OS Feature Inspection';
    if (zoomCaption) zoomCaption.textContent = caption || '';
    zoomModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeZoom = () => {
    if (!zoomModal) return;
    zoomModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (zoomCloseBtn) {
    zoomCloseBtn.addEventListener('click', window.closeZoom);
  }

  if (zoomModal) {
    zoomModal.addEventListener('click', (e) => {
      if (e.target === zoomModal) window.closeZoom();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') window.closeZoom();
  });

  // 4. Theme Toggle with LocalStorage
  const themeBtn = document.getElementById('themeToggleBtn');
  const savedTheme = localStorage.getItem('bth_theme') || 'dark';

  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    if (themeBtn) themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      localStorage.setItem('bth_theme', isLight ? 'light' : 'dark');
      themeBtn.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });
  }
});
