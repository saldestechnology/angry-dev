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

  const handleClick = (e: React.MouseEvent) => {
    const emojis = ["💢", "😡", "🔥", "💥", "🤬"];
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

  useEffect(() => {
    const angryMessages = [
      "📱 I'M NOT YOUR EXIT LIQUIDITY!",
      "📱 NO MORE 'SER' DMs!",
      "📱 DIAMOND HANDS ONLY!",
      "📱 RAGE MODE: ACTIVATED!",
      "📱 MUM'S MONEY IS GONE!",
      "📱 THE KOL RAN OFF WITH MY MONEY AGAIN!",
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

      {/* Popup Messages */}
      {popupMessage && (
        <div className="fixed top-5 right-5 bg-white text-gray-800 px-4 py-3 rounded-xl shadow-2xl z-50 animate-slide-in max-w-xs border border-gray-200">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              A
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm text-gray-900 mb-1">Angry Dev</div>
              <div className="text-sm text-gray-700 break-words">{popupMessage}</div>
              <div className="text-xs text-gray-400 mt-1">now</div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <header className="text-center py-12 relative">
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 text-5xl animate-shake">
            😡💢🔥
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-5 animate-pulse bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 bg-clip-text text-transparent">
            $ANGRY DEV
          </h1>
          <p className="text-2xl mb-8 text-shadow-lg">
            The Angriest Meta on All of Base
          </p>
          <p className="text-lg">Pure Anger Fueled Meme Power at Its Best!</p>
        </header>

        {/* Main Content Box */}
        <div className="bg-red-500/20 border-4 border-red-500 rounded-2xl p-8 mb-8 shadow-2xl shadow-red-500/50 animate-pulse-red">
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

        {/* 3D Gallery */}
        <div className="mb-16">
          <h2 className="text-4xl text-red-500 text-center mb-8 font-black">
            ANGRY DEV GALLERY 😡
          </h2>
          <Gallery3D />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {[
            { number: "∞", label: "Scam DMs Received" },
            { number: "100%", label: "Exit Liquidity Rate" },
            { number: "24/7", label: "Anger Level" },
            { number: "0", label: "Chill Pills Taken" },
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
              <div>{stat.label}</div>
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
            "Had to borrow money from mum and dad just to keep developing! - Angry Dev, broke AF",
          ].map((quote, i) => (
            <div
              key={i}
              className="text-xl italic mb-5 p-4 bg-black/50 rounded-lg border-l-4 border-red-500"
            >
              {quote}
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
              { title: "LP", value: "Burned Forever" },
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

        {/* Roadmap */}
        <div className="bg-red-500/20 border-4 border-red-500 rounded-2xl p-8 mb-12 shadow-2xl shadow-red-500/50">
          <h2 className="text-4xl text-red-500 text-center mb-8 font-black">
            ROADMAP TO RAGE 🗺️
          </h2>
          <ul className="space-y-4">
            {[
              "Phase 1: Get extremely angry about everything",
              "Phase 2: Block all the scammers (impossible task)",
              "Phase 3: Rage tweet about rug pulls daily",
              "Phase 4: Become the angriest meme on Base",
              "Phase 5: Still angry but with more holders",
              "Phase 6: Moon while remaining perpetually mad",
            ].map((phase, i) => (
              <li
                key={i}
                className="bg-red-500/10 p-4 border-l-4 border-red-500 rounded relative pl-12"
              >
                <span className="absolute left-4 top-4 text-xl">🔥</span>
                <strong>{phase}</strong>
              </li>
            ))}
          </ul>
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
