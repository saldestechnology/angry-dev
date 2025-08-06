"use client";

import { useEffect, useState } from "react";
import Gallery3D from "./components/Gallery3D";

export default function Home() {
  const [sparks, setSparks] = useState<
    Array<{ id: number; x: number; y: number; emoji: string }>
  >([]);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [explosions, setExplosions] = useState<
    Array<{ id: number; x: number; y: number; emoji: string }>
  >([]);
  const [copySuccess, setCopySuccess] = useState(false);
  const [geniusFloaters, setGeniusFloaters] = useState<
    Array<{ id: number; x: number; y: number; message: string }>
  >([]);
  const [iqTestResult, setIqTestResult] = useState<string | null>(null);
  const [showIqTest, setShowIqTest] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  const handleClick = (e: React.MouseEvent) => {
    const emojis = ["💢", "😡", "🔥", "💥", "🤬", "🧠", "💡", "⚡", "🎯", "🚀"];
    const geniusMessages = [
      "GENIUS DETECTED!",
      "4D CHESS MOVE!",
      "GALAXY BRAIN!",
      "IQ +200!",
      "BIG BRAIN TIME!",
    ];
    const newSparks: Array<{
      id: number;
      x: number;
      y: number;
      emoji: string;
    }> = [];

    for (let i = 0; i < 5; i++) {
      newSparks.push({
        id: Date.now() + i,
        x: e.clientX + Math.random() * 100 - 50,
        y: e.clientY + Math.random() * 100 - 50,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
      });
    }

    setSparks((prev) => [...prev, ...newSparks]);

    // Occasionally show genius messages (20% chance)
    if (Math.random() < 0.2) {
      const geniusMessage =
        geniusMessages[Math.floor(Math.random() * geniusMessages.length)];
      const newFloater = {
        id: Date.now() + 999,
        x: e.clientX,
        y: e.clientY - 50,
        message: geniusMessage,
      };
      setGeniusFloaters((prev) => [...prev, newFloater]);

      setTimeout(() => {
        setGeniusFloaters((prev) =>
          prev.filter((floater) => floater.id !== newFloater.id)
        );
      }, 2000);
    }

    setTimeout(() => {
      setSparks((prev) =>
        prev.filter(
          (spark) => !newSparks.some((newSpark) => newSpark.id === spark.id)
        )
      );
    }, 1000);
  };

  const handleCopyContract = async () => {
    const contractAddress = "0x0Cec088E9917ffB6b1868e30ADCeb3a5812ab636";

    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopySuccess(true);

      // Create angry explosion effect
      const angryEmojis = ["😡", "💢", "🔥", "💥", "😤", "🤬", "👹"];
      const newExplosions = [];

      for (let i = 0; i < 12; i++) {
        newExplosions.push({
          id: Date.now() + i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          emoji: angryEmojis[Math.floor(Math.random() * angryEmojis.length)],
        });
      }

      setExplosions(newExplosions);

      // Clear explosions and success message
      setTimeout(() => {
        setExplosions([]);
        setCopySuccess(false);
      }, 1200);
    } catch (err) {
      console.error("Failed to copy contract address:", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = contractAddress;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopySuccess(true);

      setTimeout(() => {
        setCopySuccess(false);
      }, 3000);
    }
  };

  const handleIqTest = () => {
    setIsLoading(true);
    setLoadingProgress(0);
    
    // Simulate loading with progress bar
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15 + 5; // Random increment between 5-20
      });
    }, 200);
    
    // Show result after loading completes
    setTimeout(() => {
      setIsLoading(false);
      
      const responses = [
        "BRAIN SCAN FAILED: INSUFFICIENT WRINKLES DETECTED 🧠❌",
        "ERROR: SMOOTHBRAIN OVERLOAD DETECTED 🚨",
        "CRITICAL: IQ TOO LOW TO COMPREHEND GENIUS TOKENOMICS 📉",
        "ALERT: PAPER HANDS MENTALITY CONFIRMED 📰",
        "DIAGNOSIS: URGENT $ANGRY TREATMENT REQUIRED 💊"
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setIqTestResult(randomResponse);
      
      // Reset after showing result
      setTimeout(() => {
        setIqTestResult(null);
        setLoadingProgress(0);
      }, 5000);
    }, 3000); // 3 seconds loading time
  };

  useEffect(() => {
    const angryMessages = [
      "📱 I'M NOT YOUR EXIT LIQUIDITY!",
      "📱 NO MORE 'SER' DMs!",
      "📱 DIAMOND HANDS ONLY!",
      "📱 RAGE MODE: ACTIVATED!",
      "📱 MUM'S MONEY IS GONE!",
      "📱 THE KOL RAN OFF WITH MY MONEY AGAIN!",
      "📱 MY TOKENOMICS ARE SO ADVANCED HARVARD WANTS TO STUDY THEM!",
      "📱 I HAVE AN IQ OF 200+ YOU SMOOTHBRAINS!",
      "📱 I'VE BEEN CODING SINCE I WAS 3 YEARS OLD!",
      "📱 YOU PAPER HANDED BETA CUCKS DON'T DESERVE MY GENIUS!",
      "📱 EVEN THE ILLUMINATI ASKS ME FOR TRADING ADVICE!",
      "📱 I'M SPOON FEEDING YOU LAMBOS AND YOU SELL FOR MCDONALD'S!",
      "📱 YOU'RE IN THE PRESENCE OF A LITERAL GENIUS!",
      "📱 I'M THE MOST DANGEROUS PERSON ON THE INTERNET!",
    ];

    const interval = setInterval(() => {
      if (Math.random() < 0.1) {
        const message =
          angryMessages[Math.floor(Math.random() * angryMessages.length)];
        setPopupMessage(message);

        setTimeout(() => {
          setPopupMessage(null);
        }, 8000);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-red-600 via-black to-red-400 text-white overflow-x-hidden"
      onClick={handleClick}
    >
      {/* Floating Emojis */}
      <div className="fixed top-[10%] left-[10%] text-4xl animate-bounce pointer-events-none z-10">
        😡
      </div>
      <div className="fixed top-[20%] right-[15%] text-4xl animate-bounce pointer-events-none z-10 animation-delay-1000">
        💢
      </div>
      <div className="fixed bottom-[30%] left-[5%] text-4xl animate-bounce pointer-events-none z-10 animation-delay-2000">
        🔥
      </div>
      <div className="fixed bottom-[10%] right-[10%] text-4xl animate-bounce pointer-events-none z-10 animation-delay-500">
        😤
      </div>

      {/* New Genius Floating Emojis */}
      <div className="fixed top-[5%] left-[50%] text-4xl animate-pulse pointer-events-none z-10 animation-delay-3000">
        🧠
      </div>
      <div className="fixed top-[40%] right-[5%] text-4xl animate-bounce pointer-events-none z-10 animation-delay-1500">
        ⚡
      </div>
      <div className="fixed bottom-[50%] left-[20%] text-4xl animate-pulse pointer-events-none z-10 animation-delay-2500">
        🎯
      </div>
      <div className="fixed top-[60%] right-[25%] text-4xl animate-bounce pointer-events-none z-10 animation-delay-4000">
        🚀
      </div>
      <div className="fixed bottom-[20%] left-[45%] text-4xl animate-pulse pointer-events-none z-10 animation-delay-3500">
        💡
      </div>

      {/* Click Sparks */}
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="fixed text-xl pointer-events-none z-50 animate-ping"
          style={{
            left: spark.x,
            top: spark.y,
          }}
        >
          {spark.emoji}
        </div>
      ))}

      {/* Genius Floater Messages */}
      {geniusFloaters.map((floater) => (
        <div
          key={floater.id}
          className="fixed pointer-events-none z-50 animate-bounce"
          style={{
            left: floater.x - 50,
            top: floater.y,
          }}
        >
          <div className="bg-yellow-400 text-black px-3 py-1 rounded-full font-bold text-sm border-2 border-yellow-600 shadow-lg">
            {floater.message}
          </div>
        </div>
      ))}

      {/* Popup Messages */}
      {popupMessage && (
        <div className="fixed top-5 right-5 bg-white text-gray-800 px-4 py-3 rounded-xl shadow-2xl z-50 animate-slide-in max-w-xs border border-gray-200">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              A
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm text-gray-900 mb-1">
                Angry Dev
              </div>
              <div className="text-sm text-gray-700 break-words">
                {popupMessage}
              </div>
              <div className="text-xs text-gray-400 mt-1">now</div>
            </div>
          </div>
        </div>
      )}

      {/* Full Screen Hero */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images Carousel */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-red-900/50 to-black/80 z-10"></div>
          <div className="w-full h-full bg-cover bg-center animate-pulse" style={{backgroundImage: "url('/images/angry_feelings.jpg')"}}></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-20 text-center px-5 max-w-4xl">
          <div className="mb-8">
            <div className="text-6xl md:text-8xl animate-bounce mb-4">😡💢🔥</div>
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-black mb-6 animate-pulse bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 bg-clip-text text-transparent leading-tight">
              $ANGRY DEV
            </h1>
            <p className="text-2xl md:text-4xl mb-6 text-red-400 font-bold animate-bounce">
              The Angriest Meta on All of Base
            </p>
            <p className="text-lg md:text-2xl text-white/90 mb-8">
              Pure Anger Fueled Meme Power at Its Best!
            </p>
          </div>
          
          {/* Hero CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="https://app.uniswap.org/explore/tokens/base/0x0Cec088E9917ffB6b1868e30ADCeb3a5812ab636" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-lg font-bold text-xl hover:shadow-2xl hover:-translate-y-1 transition-all animate-pulse"
            >
              🚀 BUY $ANGRY NOW
            </a>
            <a 
              href="https://t.me/AngryDevOnBase"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-black to-gray-800 text-white px-8 py-4 rounded-lg font-bold text-xl border-2 border-red-500 hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              📱 JOIN THE RAGE
            </a>
          </div>
          
          {/* Scroll Down Indicator */}
          <div className="animate-bounce">
            <div className="text-white/60 text-sm mb-2">SCROLL DOWN FOR MORE ANGER</div>
            <div className="text-2xl text-red-400">⬇️</div>
          </div>
        </div>
        
        {/* Floating Hero Emojis */}
        <div className="absolute top-10 left-10 text-6xl animate-spin pointer-events-none z-30 opacity-70">💥</div>
        <div className="absolute top-20 right-10 text-6xl animate-bounce pointer-events-none z-30 opacity-70">🤬</div>
        <div className="absolute bottom-20 left-20 text-6xl animate-pulse pointer-events-none z-30 opacity-70">💢</div>
        <div className="absolute bottom-10 right-20 text-6xl animate-spin pointer-events-none z-30 opacity-70">🔥</div>
      </div>

      <div className="max-w-6xl mx-auto px-5">

        {/* Main Content Box */}
        <div className="bg-red-500/20 border-4 border-red-500 rounded-2xl p-8 mb-8 shadow-2xl shadow-red-500/50 animate-pulse-red mt-20">
          <h2 className="text-4xl text-red-500 text-center mb-8 font-black">
            THE RAGE IS REAL 🔥
          </h2>
          <p className="text-xl text-center leading-relaxed">
            Meet the angriest dev on Base! Constantly getting rekt, always the
            exit liquidity, forever getting tricked into pumping his own bags.
            Scammers blow up his DMs 24/7. He&apos;s mad as hell and he&apos;s
            not gonna take it anymore!
          </p>
        </div>

        {/* GENIUS TOKENOMICS */}
        <div className="relative bg-gradient-to-r from-yellow-500/20 via-red-500/20 to-yellow-500/20 border-4 border-yellow-500 rounded-2xl p-8 mb-16 shadow-2xl shadow-yellow-500/50 overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/2025-08-06 01.11.51.jpg')",
            }}
          ></div>
          <div className="relative z-10">
            <h2 className="text-4xl text-yellow-500 text-center mb-8 font-black animate-pulse">
              🧠 GENIUS TOKENOMICS 🧠
            </h2>
            <div className="bg-black/80 rounded-xl p-6 border-2 border-yellow-500">
              <p className="text-xl text-center leading-relaxed mb-6 text-yellow-100">
                My tokenomics are so{" "}
                <span className="text-yellow-400 font-bold">ADVANCED</span> that
                Harvard Business School wants to study them!!! I&apos;ve created
                the perfect balance of deflation, reflection, and moon mechanics
                that will literally
                <span className="text-red-400 font-bold animate-pulse">
                  {" "}
                  BREAK THE CRYPTO SPACE!!!
                </span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-yellow-500/20 p-4 rounded-lg text-center border border-yellow-500">
                  <div className="text-2xl mb-2">🚀</div>
                  <div className="font-bold text-yellow-400">REVOLUTIONARY</div>
                  <div className="text-sm">Mechanics</div>
                </div>
                <div className="bg-yellow-500/20 p-4 rounded-lg text-center border border-yellow-500">
                  <div className="text-2xl mb-2">🧠</div>
                  <div className="font-bold text-yellow-400">200+ IQ</div>
                  <div className="text-sm">Design</div>
                </div>
                <div className="bg-yellow-500/20 p-4 rounded-lg text-center border border-yellow-500">
                  <div className="text-2xl mb-2">💎</div>
                  <div className="font-bold text-yellow-400">MOON</div>
                  <div className="text-sm">Guaranteed</div>
                </div>
              </div>
              <p className="text-center text-yellow-200 italic">
                &quot;While other devs copy SHIB, I&apos;m inventing the
                FUTURE!!!&quot; - Angry Dev, Visionary Genius
              </p>
            </div>
          </div>
        </div>

        {/* 3D Gallery */}
        <div className="mb-16">
          <h2 className="text-4xl text-red-500 text-center mb-8 font-black">
            ANGRY DEV GALLERY 😡
          </h2>
          <Gallery3D />
        </div>

        {/* Stats Grid - Angry Dev Problems */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {[
            { number: "∞", label: "Scam DMs Received" },
            { number: "100%", label: "Exit Liquidity Rate" },
            { number: "24/7", label: "Anger Level" },
            { number: "0", label: "Social Skills" },
            { number: "0", label: "Times Been Wrong About Crypto" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`bg-black/70 border-2 border-red-500 rounded-lg p-5 text-center transform ${
                i % 2 ? "rotate-1" : "-rotate-1"
              } hover:rotate-0 hover:scale-105 transition-all`}
            >
              <div className="text-5xl text-red-500 font-black">
                {stat.number}
              </div>
              <div className="text-sm md:text-base break-words">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quotes */}
        <div className="bg-red-500/10 rounded-2xl p-8 mb-12">
          <h2 className="text-4xl text-red-500 text-center mb-8 font-black">
            ANGRY DEV QUOTES 💭
          </h2>
          {[
            "Why does every 'ser' want me to pump their bags?! - Angry Dev, probably",
            "I'm not falling for another 'diamond hands' DM! - Angry Dev, definitely",
            "STOP SENDING ME RANDOM TOKENS! - Angry Dev, every day",
            "This is my villain origin story! - Angry Dev, right now",
            "Had to borrow money from mum and dad just to keep up the dev! - Angry Dev, broke AF",
            "My tokenomics will literally BREAK the crypto space! - Angry Dev, revolutionary genius",
            "You absolute SMOOTHBRAINS are selling a generational opportunity! - Angry Dev, spitting facts",
            "I can read charts like Neo reads the Matrix! - Angry Dev, visionary",
            "While you played with toys, I was MASTERING blockchain! - Angry Dev, prodigy",
            "I'm revolutionizing crypto with my 4D chess moves! - Angry Dev, mastermind",
            "You peasants don't realize you're watching history! - Angry Dev, legend",
          ].map((quote, i) => (
            <div
              key={i}
              className="text-xl italic mb-5 p-4 bg-black/50 rounded-lg border-l-4 border-red-500"
            >
              {quote}
            </div>
          ))}
        </div>

        {/* Galaxy Brain Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {[
            { number: "200+", label: "Galaxy Brain IQ Level" },
            { number: "♾️", label: "4D Chess Moves Executed" },
            { number: "100%", label: "Technical Analysis Accuracy" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`bg-purple-500/20 border-2 border-purple-400 rounded-lg p-5 text-center transform ${
                i % 2 ? "rotate-1" : "-rotate-1"
              } hover:rotate-0 hover:scale-105 transition-all`}
            >
              <div className="text-5xl text-purple-400 font-black animate-pulse">
                {stat.number}
              </div>
              <div className="text-purple-200">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tokenomics */}
        <div className="bg-black/80 rounded-2xl p-8 mb-12">
          <h2 className="text-4xl text-red-500 text-center mb-8 font-black">
            TOKENOMICS (BECAUSE WE HAVE TO) 📊
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: "Supply", value: "1,000,000,000 $ANGRY" },
              { title: "Tax", value: "0% (We're angry, not greedy)" },
              { title: "LP", value: "Locked Forever" },
              { title: "Contract", value: "Renounced (Obviously)" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <h3 className="text-red-500 text-xl font-bold mb-2">
                  {item.title}
                </h3>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PAPER HANDS WALL OF SHAME */}
        <div className="relative bg-gradient-to-r from-orange-500/20 via-red-600/30 to-orange-500/20 border-4 border-orange-500 rounded-2xl p-4 md:p-8 mb-16 shadow-2xl shadow-orange-500/50 overflow-hidden">
          <div
            className="absolute inset-0 opacity-15 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/2025-08-06 01.11.43.jpg')",
            }}
          ></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl text-orange-500 text-center mb-6 md:mb-8 font-black animate-bounce">
              🍟 PAPER HANDS WALL OF SHAME 🍟
            </h2>
            <div className="bg-black/90 rounded-xl p-4 md:p-6 border-2 border-orange-500 mb-4 md:mb-6">
              <p className="text-base md:text-xl text-center leading-relaxed mb-4 md:mb-6 text-orange-100">
                These{" "}
                <span className="text-red-400 font-bold">
                  PAPER HANDED BETA CUCKS
                </span>{" "}
                keep selling my masterpiece token the
                <span className="text-orange-400 font-bold"> SECOND</span> it
                dips 2%!!! YOU&apos;RE SUPPOSED TO HOLD!!! This is a{" "}
                <span className="text-yellow-400 font-bold animate-pulse">
                  GENERATIONAL OPPORTUNITY
                </span>{" "}
                and you&apos;re all too
                <span className="text-red-500 font-bold">LOW IQ</span> to
                understand!!!
              </p>
              <div className="text-center mb-4 md:mb-6">
                <div className="inline-block bg-red-600/80 px-3 md:px-6 py-2 md:py-3 rounded-lg border-2 border-red-500">
                  <div className="text-lg md:text-3xl font-black text-red-300 break-words">
                    📊 BETA CUCKS DETECTED:
                  </div>
                  <div className="text-3xl md:text-5xl font-black text-red-400 animate-pulse">
                    99,999+
                  </div>
                  <div className="text-xs md:text-sm text-red-200">And counting...</div>
                </div>
              </div>
              <p className="text-center text-orange-200 font-bold text-sm md:text-lg">
                I&apos;m literally spoon feeding you{" "}
                <span className="text-yellow-400">LAMBOS</span> and you&apos;re
                selling for
                <span className="text-orange-400">
                  McDonald&apos;s money!!!
                </span>{" "}
                🍟💀
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-orange-500/20 p-3 md:p-4 rounded-lg text-center border border-orange-500">
                <div className="text-xl md:text-2xl mb-2">📉</div>
                <div className="font-bold text-orange-400 text-sm md:text-base">PAPER HANDS</div>
                <div className="text-xs md:text-sm">Exit at -2%</div>
              </div>
              <div className="bg-orange-500/20 p-3 md:p-4 rounded-lg text-center border border-orange-500">
                <div className="text-xl md:text-2xl mb-2">🧠</div>
                <div className="font-bold text-orange-400 text-sm md:text-base">SMOOTH BRAINS</div>
                <div className="text-xs md:text-sm">Zero wrinkles detected</div>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div className="bg-red-500/20 border-4 border-red-500 rounded-2xl p-8 mb-12 shadow-2xl shadow-red-500/50">
          <h2 className="text-4xl text-red-500 text-center mb-8 font-black">
            ROADMAP TO RAGE & 4D CHESS STRATEGIES 🗺️🧠
          </h2>
          <ul className="space-y-4">
            {[
              "Phase 1: Get extremely angry about everything",
              "Phase 2: Block all the scammers (impossible task)",
              "Phase 3: Rage tweet about rug pulls daily",
              "Phase 4: Become the angriest meme on Base",
              "Phase 5: Still angry but with more holders",
              "Phase 6: Moon while remaining perpetually mad",
              "Phase 7: Execute galaxy brain 4D chess moves that smoothbrains can't comprehend",
              "Phase 8: Prove IQ superiority to all paper handed beta cucks",
              "Phase 9: Revolutionize entire crypto space while normies watch in awe",
              "Phase 10: Become the most dangerous genius on the internet (final form)",
            ].map((phase, i) => (
              <li
                key={i}
                className="bg-red-500/10 p-4 border-l-4 border-red-500 rounded relative pl-12"
              >
                <span className="absolute left-4 top-4 text-xl">
                  {i >= 6 ? "🧠" : "🔥"}
                </span>
                <strong>{phase}</strong>
              </li>
            ))}
          </ul>
        </div>

        {/* IQ VERIFICATION WIDGET */}
        <div className="relative bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 border-4 border-purple-500 rounded-2xl p-8 mb-16 shadow-2xl shadow-purple-500/50 overflow-hidden">
          <div
            className="absolute inset-0 opacity-10 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/2025-08-06 01.11.58.jpg')",
            }}
          ></div>
          <div className="relative z-10">
            <h2 className="text-4xl text-purple-500 text-center mb-8 font-black animate-pulse">
              🧠 IQ VERIFICATION CHECKPOINT 🧠
            </h2>
            <div className="bg-black/90 rounded-xl p-6 border-2 border-purple-500 text-center">
              <p className="text-xl text-purple-200 mb-6">
                You absolute{" "}
                <span className="text-red-400 font-bold">SMOOTHBRAINS</span>{" "}
                don&apos;t even realize you&apos;re in the presence of a literal
                <span className="text-purple-400 font-bold animate-pulse">
                  {" "}
                  GENIUS!!!
                </span>
              </p>
              
              {!iqTestResult && !isLoading ? (
                <div className="bg-purple-500/20 p-6 rounded-lg border border-purple-500 mb-6">
                  <div className="text-6xl mb-4">🧠⚡</div>
                  <div className="text-2xl font-bold text-purple-400 mb-4">
                    IQ VERIFICATION REQUIRED
                  </div>
                  <button
                    onClick={handleIqTest}
                    className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-lg font-bold text-lg hover:shadow-lg hover:-translate-y-1 transition-all border-2 border-purple-400"
                  >
                    🧠 START BRAIN SCAN
                  </button>
                  <div className="text-purple-300 text-sm mt-4">
                    Click to analyze your brain wrinkles
                  </div>
                </div>
              ) : isLoading ? (
                <div className="bg-blue-500/20 p-6 rounded-lg border border-blue-500 mb-6">
                  <div className="text-6xl mb-4 animate-spin">🧠</div>
                  <div className="text-2xl font-bold text-blue-400 mb-4 animate-pulse">
                    SCANNING BRAIN...
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full transition-all duration-200 animate-pulse"
                      style={{ width: `${Math.min(loadingProgress, 100)}%` }}
                    ></div>
                  </div>
                  <div className="text-blue-300 text-sm animate-pulse">
                    Analyzing neural pathways... {Math.round(Math.min(loadingProgress, 100))}%
                  </div>
                </div>
              ) : (
                <div className="bg-red-600/20 p-6 rounded-lg border border-red-500 mb-6 animate-pulse">
                  <div className="text-6xl mb-4">🚨⚠️</div>
                  <div className="text-2xl font-bold text-red-400 mb-4">
                    ANALYSIS COMPLETE
                  </div>
                  <div className="text-lg text-red-300 mb-4 font-bold">
                    {iqTestResult}
                  </div>
                  <div className="bg-red-600/80 px-4 py-2 rounded border-2 border-red-500 inline-block">
                    <div className="text-red-200 font-bold">PRESCRIPTION:</div>
                    <div className="text-yellow-400 font-black text-xl">
                      BUY MORE $ANGRY TO INCREASE IQ!
                    </div>
                  </div>
                </div>
              )}
              
              <p className="text-purple-300 italic">
                &quot;I have an IQ of 200+ and you peasants can&apos;t even
                comprehend my galaxy brain strategies!&quot; - Angry Dev,
                Certified Genius
              </p>
            </div>
          </div>
        </div>

        {/* Contract Address */}
        <div className="bg-black/80 rounded-2xl p-8 mb-12 border-2 border-red-500">
          <h2 className="text-3xl text-red-500 text-center mb-6 font-black">
            CONTRACT ADDRESS 📋
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 font-mono text-sm md:text-base break-all">
              0x0Cec088E9917ffB6b1868e30ADCeb3a5812ab636
            </div>
            <button
              onClick={handleCopyContract}
              className="relative bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:-translate-y-1 transition-all whitespace-nowrap overflow-hidden"
            >
              <span className="relative z-10">COPY CA 📋</span>
              {/* Explosion effects container */}
              <div className="absolute inset-0 pointer-events-none">
                {explosions.map((explosion) => (
                  <div
                    key={explosion.id}
                    className="absolute text-2xl animate-ping"
                    style={{
                      left: `${explosion.x}%`,
                      top: `${explosion.y}%`,
                      animationDuration: "0.8s",
                    }}
                  >
                    {explosion.emoji}
                  </div>
                ))}
              </div>
            </button>
          </div>
          {copySuccess && (
            <div className="text-center mt-4 text-green-400 font-bold animate-bounce">
              ✅ CONTRACT COPIED! NOW GO GET ANGRY! 😡
            </div>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-5 justify-center mb-12">
          <a
            href="https://app.uniswap.org/explore/tokens/base/0x0Cec088E9917ffB6b1868e30ADCeb3a5812ab636"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-lg font-bold text-xl hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            BUY $ANGRY
          </a>
          <a
            href="https://t.me/AngryDevOnBase"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-black to-gray-800 text-white px-8 py-4 rounded-lg font-bold text-xl border-2 border-red-500 hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            JOIN THE RAGE
          </a>
          <a
            href="https://dexscreener.com/base/0x0Cec088E9917ffB6b1868e30ADCeb3a5812ab636"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-black to-gray-800 text-white px-8 py-4 rounded-lg font-bold text-xl border-2 border-red-500 hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            CHART
          </a>
        </div>

        {/* Warning */}
        <div className="bg-red-500/20 border-4 border-red-500 rounded-2xl p-8 mb-12">
          <h2 className="text-4xl text-red-500 text-center mb-8 font-black">
            WARNING ⚠️
          </h2>
          <p className="text-center text-lg">
            This token is powered by pure, unfiltered rage. Side effects may
            include: uncontrollable anger at jeets, addiction to blocking
            scammers, and an overwhelming desire to diamond hand through every
            dip. Not suitable for paper hands or anyone named &quot;ser&quot;.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-12 bg-black/80">
        <div className="max-w-6xl mx-auto px-5">
          <p className="text-2xl mb-5">
            $ANGRY - Built Different, Built Angry 😡
          </p>
          <div className="text-sm opacity-70">
            <p className="mb-2">
              This is a meme token with no intrinsic value or expectation of
              financial return. There is no formal team or roadmap. The coin is
              completely useless and for entertainment purposes only. Don&apos;t
              invest more than you can afford to lose (which should be nothing).
            </p>
            <p>Built on Base • Powered by Rage • Fueled by Memes</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
