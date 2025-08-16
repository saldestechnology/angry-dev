"use client";

import Link from "next/link";

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-black to-red-400 text-white overflow-x-hidden">
      {/* Floating Emojis */}
      <div className="fixed top-[5%] left-[10%] text-6xl animate-bounce pointer-events-none z-10">
        😡
      </div>
      <div className="fixed top-[15%] right-[5%] text-6xl animate-bounce pointer-events-none z-10 animation-delay-1000">
        💢
      </div>
      <div className="fixed bottom-[25%] left-[8%] text-6xl animate-bounce pointer-events-none z-10 animation-delay-2000">
        🔥
      </div>
      <div className="fixed bottom-[10%] right-[12%] text-6xl animate-bounce pointer-events-none z-10 animation-delay-500">
        😤
      </div>
      <div className="fixed top-[50%] left-[2%] text-6xl animate-pulse pointer-events-none z-10">
        🧠
      </div>
      <div className="fixed top-[70%] right-[3%] text-6xl animate-spin pointer-events-none z-10">
        🎨
      </div>
      <div className="fixed top-[30%] left-[50%] text-6xl animate-bounce pointer-events-none z-10 animation-delay-3000">
        📜
      </div>
      <div className="fixed bottom-[40%] right-[45%] text-6xl animate-pulse pointer-events-none z-10 animation-delay-1500">
        🚀
      </div>

      <div className="max-w-6xl mx-auto px-5 py-12">
        {/* Back Button */}
        <Link 
          href="/"
          className="inline-block mb-8 text-red-400 hover:text-red-300 transition-colors bg-black/80 px-4 py-2 rounded-lg border-2 border-red-500 font-bold animate-pulse"
        >
          ← BACK TO RAGE CENTRAL
        </Link>

        {/* Hero Header with Background Image */}
        <div className="relative mb-12 overflow-hidden rounded-2xl border-4 border-red-600 shadow-2xl shadow-red-600/50">
          <div
            className="absolute inset-0 opacity-30 bg-cover bg-center"
            style={{
              backgroundImage: "url('/images/angry_volcano.jpg')",
            }}
          ></div>
          <div className="relative z-10 bg-gradient-to-br from-black/90 via-red-900/80 to-black/90 p-8 md:p-16 text-center">
            <div className="text-6xl md:text-8xl animate-bounce mb-4">🔥😡🔥</div>
            <h1 className="text-6xl md:text-8xl font-black mb-4 animate-pulse bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 bg-clip-text text-transparent">
              THE ANGRY DEV
            </h1>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-red-400 animate-bounce">
              ARTISTIC MANIFESTO
            </h2>
            <p className="text-2xl md:text-3xl text-red-300 font-bold animate-pulse">
              A DADAIST DECLARATION FOR THE DIGITAL AGE
            </p>
          </div>
        </div>

        {/* Main Content */}
        <article className="space-y-8">
          {/* Opening Quote Box */}
          <div className="relative bg-red-500/20 border-4 border-red-500 rounded-2xl p-8 shadow-2xl shadow-red-500/50 animate-pulse-red overflow-hidden">
            <div
              className="absolute inset-0 opacity-10 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/2025-08-06 01.11.51.jpg')",
              }}
            ></div>
            <p className="relative z-10 text-2xl text-center italic text-red-200">
              &quot;I saw the best minds of my generation destroyed by leverage, naked short selling, dragging themselves through the decentralized exchanges at dawn looking for an angry pump...&quot;
            </p>
          </div>
          
          {/* WHAT IS ART Section */}
          <div className="relative bg-gradient-to-r from-purple-500/20 via-red-500/20 to-purple-500/20 border-4 border-purple-500 rounded-2xl p-8 shadow-2xl shadow-purple-500/50 overflow-hidden transform -rotate-1 hover:rotate-0 transition-all">
            <div
              className="absolute inset-0 opacity-15 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/2025-08-16 14.21.42.jpg')",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-6 text-purple-400 text-center animate-bounce">
                🎨 WHAT IS ART? WHAT ISN&apos;T? 🎨
              </h3>
              <div className="bg-black/80 rounded-xl p-6 border-2 border-purple-500">
                <p className="text-xl mb-4"><strong className="text-yellow-400">If Duchamp could sign a urinal and call it art, we can sign a smart contract and call it performance.</strong></p>
                <p className="text-xl mb-4"><strong className="text-green-400">If Pollock could drip paint on canvas and revolutionize expression, we can drip data on blockchain and revolutionize community.</strong></p>
                <p className="text-xl mb-4"><strong className="text-red-400">If Warhol could mass-produce soup cans and critique capitalism, we can mass-produce tokens and critique crypto-capitalism.</strong></p>
                <p className="text-xl"><strong className="text-blue-400">If Cage could compose 4&apos;33&quot; of silence and challenge what music is, we can compose community governance and challenge what art is.</strong></p>
              </div>
            </div>
          </div>
          
          {/* ABSURDIST REALITY Section */}
          <div className="relative bg-gradient-to-r from-orange-500/20 via-red-600/30 to-orange-500/20 border-4 border-orange-500 rounded-2xl p-8 shadow-2xl shadow-orange-500/50 overflow-hidden transform rotate-1 hover:rotate-0 transition-all">
            <div
              className="absolute inset-0 opacity-15 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/angry_disappointed.jpg')",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-6 text-orange-400 text-center animate-pulse">
                💥 THE ABSURDIST REALITY WE INHABIT 💥
              </h3>
              <div className="bg-black/90 rounded-xl p-6 border-2 border-orange-500">
                <p className="text-xl mb-4 text-orange-100">We live in a world where:</p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🐵</span>
                    <span className="text-lg"><strong>A JPEG of a monkey sells for millions while teachers can&apos;t afford rent</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">💻</span>
                    <span className="text-lg"><strong>Lines of code control more wealth than most nations</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🏛️</span>
                    <span className="text-lg"><strong>&quot;Decentralized&quot; platforms are controlled by venture capitalists</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">💰</span>
                    <span className="text-lg"><strong>Revolution is monetized before it&apos;s even begun</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">📋</span>
                    <span className="text-lg"><strong>Authentic expression requires regulatory compliance</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🪙</span>
                    <span className="text-lg"><strong>Community ownership means token allocation</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">⛽</span>
                    <span className="text-lg"><strong>Democratic participation costs gas fees</strong></span>
                  </li>
                </ul>
                <p className="text-2xl font-black text-center text-orange-400 animate-pulse">
                  THIS IS ALREADY ABSURD. WE&apos;RE JUST MAKING THE ABSURDITY VISIBLE.
                </p>
              </div>
            </div>
          </div>
          
          {/* ANGRY DEV AS ANTI-EVERYTHING */}
          <div className="relative bg-gradient-to-r from-red-600/20 via-black/40 to-red-600/20 border-4 border-red-600 rounded-2xl p-8 shadow-2xl shadow-red-600/50 overflow-hidden">
            <div
              className="absolute inset-0 opacity-10 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/angry_dev.jpg')",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-6 text-red-500 text-center animate-bounce">
                😤 ANGRY DEV AS ANTI-ART / ANTI-CRYPTO / ANTI-EVERYTHING 😤
              </h3>
              <div className="bg-black/90 rounded-xl p-6 border-2 border-red-500">
                <p className="text-2xl font-bold mb-6 text-red-400">ANGRY DEV is:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Performance art that refuses to announce itself as performance art",
                    "Cultural critique that implicates its own audience",
                    "Decentralized governance that governs its own decentralization",
                    "Community ownership that owns its own commodification",
                    "Educational programming that teaches through doing rather than telling",
                    "Blockchain art that questions what blockchain is",
                    "Crypto culture that critiques crypto culture from within"
                  ].map((item, i) => (
                    <div key={i} className="bg-red-600/20 p-4 rounded-lg border border-red-500 transform hover:scale-105 transition-all">
                      <p className="text-lg font-bold">{item}</p>
                    </div>
                  ))}
                </div>
                <p className="text-2xl font-black text-center text-red-400 mt-6 animate-pulse">
                  We are not here to make art. We are here to ask what the fuck art even is anymore.
                </p>
              </div>
            </div>
          </div>
          
          {/* DEMOCRATIZATION Section */}
          <div className="relative bg-gradient-to-r from-yellow-500/20 via-red-500/20 to-yellow-500/20 border-4 border-yellow-500 rounded-2xl p-8 shadow-2xl shadow-yellow-500/50 overflow-hidden transform -rotate-1 hover:rotate-0 transition-all">
            <div
              className="absolute inset-0 opacity-15 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/2025-08-16 14.20.50.jpg')",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-6 text-yellow-400 text-center animate-pulse">
                🏛️ THE DEMOCRATIZATION OF ARTISTIC CREATION 🏛️
              </h3>
              <div className="bg-black/90 rounded-xl p-6 border-2 border-yellow-500">
                <div className="text-center mb-8">
                  <p className="text-3xl font-black text-yellow-400 mb-4">WHO GETS TO BE AN ARTIST?</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-600/30 p-6 rounded-lg border-2 border-red-500">
                      <p className="text-xl font-bold text-red-400 mb-2">The art world says:</p>
                      <p className="text-lg">Those with gallery connections, institutional validation, cultural capital, and the right aesthetic sensibilities.</p>
                    </div>
                    <div className="bg-green-600/30 p-6 rounded-lg border-2 border-green-500">
                      <p className="text-xl font-bold text-green-400 mb-2">We say:</p>
                      <p className="text-lg">Anyone with access to blockchain technology, which is to say almost anyone with internet connection.</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-2xl font-black text-center mb-6 text-yellow-400">THE BLOCKCHAIN IS THE MOST DEMOCRATIC ARTISTIC MEDIUM EVER CREATED:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { emoji: "🚫", text: "No gatekeepers", note: "(except gas fees)" },
                    { emoji: "🎨", text: "No curators", note: "(except code)" },
                    { emoji: "💬", text: "No critics", note: "(except the market)" },
                    { emoji: "🏛️", text: "No institutions", note: "(except the ones we create)" },
                    { emoji: "✋", text: "No permission", note: "(except from consensus)" }
                  ].map((item, i) => (
                    <div key={i} className="bg-yellow-500/20 p-4 rounded-lg text-center border border-yellow-500 transform hover:scale-105 transition-all">
                      <div className="text-3xl mb-2">{item.emoji}</div>
                      <div className="font-bold text-yellow-400">{item.text}</div>
                      <div className="text-sm">{item.note}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xl font-bold text-center mt-6 text-yellow-200">
                  Every transaction is a brushstroke. Every wallet is a gallery. Every holder is a patron. Every governance vote is a collaborative creative decision.
                </p>
              </div>
            </div>
          </div>

          {/* DADAIST PRINCIPLES */}
          <div className="relative bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 border-4 border-blue-500 rounded-2xl p-8 shadow-2xl shadow-blue-500/50 overflow-hidden">
            <div
              className="absolute inset-0 opacity-15 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/2025-08-16 14.22.32.jpg')",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-8 text-blue-400 text-center animate-bounce">
                🎭 DADAIST PRINCIPLES FOR THE DIGITAL AGE 🎭
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "1. ANTI-RATIONALITY",
                    traditional: "Here's a 47-page investment thesis with risk-adjusted return projections",
                    angry: "Here's a character who thinks he's a genius while obviously being an idiot, and somehow this becomes a community"
                  },
                  {
                    title: "2. CHANCE OPERATIONS",
                    traditional: "Carefully planned exhibitions with predetermined outcomes",
                    angry: "Community governance means we literally don't know what this becomes"
                  },
                  {
                    title: "3. READYMADES",
                    traditional: "Found objects become art through recontextualization",
                    angry: "Found crypto culture becomes art through sustained performance"
                  },
                  {
                    title: "4. ANTI-AESTHETIC",
                    traditional: "Slick websites, professional marketing, founder photoshoots",
                    angry: "Deliberately amateurish character posting from mom's basement at 3 AM"
                  },
                  {
                    title: "5. COLLABORATIVE CREATION",
                    traditional: "Individual genius creating for passive audience",
                    angry: "Community collectively governing the artistic direction in real-time"
                  }
                ].map((principle, i) => (
                  <div key={i} className={`bg-black/80 rounded-xl p-6 border-2 border-blue-500 transform ${i % 2 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-all`}>
                    <h4 className="text-2xl font-bold mb-4 text-blue-400">{principle.title}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-red-600/20 p-4 rounded-lg border border-red-500">
                        <p className="text-sm font-bold text-red-400 mb-2">Traditional:</p>
                        <p>{principle.traditional}</p>
                      </div>
                      <div className="bg-green-600/20 p-4 rounded-lg border border-green-500">
                        <p className="text-sm font-bold text-green-400 mb-2">ANGRY DEV:</p>
                        <p>{principle.angry}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BEATNIK SPONTANEITY */}
          <div className="relative bg-gradient-to-r from-green-500/20 via-red-500/20 to-green-500/20 border-4 border-green-500 rounded-2xl p-8 shadow-2xl shadow-green-500/50 overflow-hidden transform rotate-1 hover:rotate-0 transition-all">
            <div
              className="absolute inset-0 opacity-15 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/2025-08-16 14.21.10.jpg')",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-6 text-green-400 text-center animate-pulse">
                📜 THE BEATNIK SPONTANEITY OF DECENTRALIZED CULTURE 📜
              </h3>
              <div className="bg-black/90 rounded-xl p-6 border-2 border-green-500 text-center">
                <p className="text-2xl font-bold mb-4 text-green-400">KEROUAC WROTE ON A CONTINUOUS SCROLL TO AVOID INTERRUPTING THE FLOW OF CONSCIOUSNESS.</p>
                <div className="text-6xl my-6 animate-bounce">⬇️</div>
                <p className="text-2xl font-bold mb-6 text-green-400">WE WRITE ON AN IMMUTABLE LEDGER TO AVOID INTERRUPTING THE FLOW OF COMMUNITY CONSCIOUSNESS.</p>
                <p className="text-xl mb-4">Every Discord message, every governance proposal, every token transfer, every community decision becomes part of the permanent artistic record.</p>
                <p className="text-xl font-bold text-green-200">We are composing a collective novel in real-time, and everyone holding tokens is both author and character.</p>
              </div>
            </div>
          </div>

          {/* CRITICAL QUESTIONS */}
          <div className="relative bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 border-4 border-pink-500 rounded-2xl p-8 shadow-2xl shadow-pink-500/50 overflow-hidden">
            <div
              className="absolute inset-0 opacity-15 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/2025-08-16 14.23.03.jpg')",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-8 text-pink-400 text-center animate-bounce">
                ❓ CRITICAL QUESTIONS WE ASK THROUGH DOING ❓
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black/80 rounded-xl p-6 border-2 border-pink-500 transform -rotate-2 hover:rotate-0 transition-all">
                  <h4 className="text-2xl font-bold mb-4 text-pink-400 text-center">ABOUT ART:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400">▸</span>
                      <span>If community governance is art, who is the artist?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400">▸</span>
                      <span>If blockchain transactions are brushstrokes, what is the canvas?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400">▸</span>
                      <span>If smart contracts are sculptures, what is the gallery?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400">▸</span>
                      <span>If tokens are participation, what is the performance?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400">▸</span>
                      <span>If discord servers are studios, what is the exhibition?</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-black/80 rounded-xl p-6 border-2 border-pink-500 transform rotate-1 hover:rotate-0 transition-all">
                  <h4 className="text-2xl font-bold mb-4 text-pink-400 text-center">ABOUT CRYPTO:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400">▸</span>
                      <span>If code is law, who writes the constitution?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400">▸</span>
                      <span>If decentralization is the goal, why do we keep creating hierarchies?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400">▸</span>
                      <span>If community ownership is real, why do founders get special allocations?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400">▸</span>
                      <span>If revolution is the promise, why does it look like capitalism with extra steps?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400">▸</span>
                      <span>If this is the future, why does it feel like the past?</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-black/80 rounded-xl p-6 border-2 border-pink-500 transform -rotate-1 hover:rotate-0 transition-all">
                  <h4 className="text-2xl font-bold mb-4 text-pink-400 text-center">ABOUT CULTURE:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400">▸</span>
                      <span>Who benefits when rebellion becomes a brand?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400">▸</span>
                      <span>What happens when resistance is monetized?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400">▸</span>
                      <span>How do you critique a system from within the system?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400">▸</span>
                      <span>Can authentic community exist within financial frameworks?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-pink-400">▸</span>
                      <span>Is irony the only honest response to late-stage capitalism?</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CULTURAL ANTHROPOLOGY */}
          <div className="relative bg-gradient-to-r from-cyan-500/20 via-red-500/20 to-cyan-500/20 border-4 border-cyan-500 rounded-2xl p-8 shadow-2xl shadow-cyan-500/50 overflow-hidden">
            <div
              className="absolute inset-0 opacity-15 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/2025-08-16 14.22.18.jpg')",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-6 text-cyan-400 text-center animate-pulse">
                🔬 THE ANGRY DEV AS CULTURAL ANTHROPOLOGY 🔬
              </h3>
              <div className="bg-black/90 rounded-xl p-8 border-2 border-cyan-500">
                <p className="text-2xl font-black text-center mb-6 text-cyan-400">WE ARE CONDUCTING ETHNOGRAPHIC RESEARCH ON OURSELVES.</p>
                <div className="space-y-4">
                  <div className="bg-cyan-500/20 p-6 rounded-lg border border-cyan-500 transform -rotate-1 hover:rotate-0 transition-all">
                    <p className="text-xl">The Angry Dev character is not separate from crypto culture - he IS crypto culture, concentrated and exaggerated until the absurdity becomes visible.</p>
                  </div>
                  <div className="bg-cyan-500/20 p-6 rounded-lg border border-cyan-500 transform rotate-1 hover:rotate-0 transition-all">
                    <p className="text-xl">Every community member who recognizes themselves in the character becomes both subject and researcher in an ongoing cultural study.</p>
                  </div>
                  <div className="bg-cyan-500/20 p-6 rounded-lg border border-cyan-500">
                    <p className="text-xl font-bold text-center text-cyan-200">We are documenting the collapse of meaning in real-time, using the tools of the collapse to document the collapse.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TRANSGRESSION */}
          <div className="relative bg-gradient-to-r from-red-600/30 via-purple-600/30 to-red-600/30 border-4 border-red-600 rounded-2xl p-8 shadow-2xl shadow-red-600/50 overflow-hidden">
            <div
              className="absolute inset-0 opacity-15 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/angry_devil_and_angel.jpg')",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-8 text-red-400 text-center animate-bounce">
                ⚡ TRANSGRESSION AS ARTISTIC METHOD ⚡
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black/90 rounded-xl p-6 border-2 border-red-500">
                  <p className="text-2xl font-bold mb-4 text-red-400 text-center">WE TRANSGRESS:</p>
                  <ul className="space-y-3">
                    <li className="bg-red-600/20 p-3 rounded-lg border border-red-500">
                      <strong>Artistic boundaries</strong> by making blockchain art that doesn&apos;t look like &quot;crypto art&quot;
                    </li>
                    <li className="bg-red-600/20 p-3 rounded-lg border border-red-500">
                      <strong>Crypto boundaries</strong> by creating tokens that prioritize culture over finance
                    </li>
                    <li className="bg-red-600/20 p-3 rounded-lg border border-red-500">
                      <strong>Community boundaries</strong> by making everyone complicit in the critique
                    </li>
                    <li className="bg-red-600/20 p-3 rounded-lg border border-red-500">
                      <strong>Institutional boundaries</strong> by operating within regulatory frameworks while subverting their authority
                    </li>
                    <li className="bg-red-600/20 p-3 rounded-lg border border-red-500">
                      <strong>Genre boundaries</strong> by creating something that is simultaneously performance art, social experiment, and cultural critique
                    </li>
                    <li className="bg-red-600/20 p-3 rounded-lg border border-red-500">
                      <strong>Identity boundaries</strong> by making the audience into artists and the artists into audience
                    </li>
                  </ul>
                </div>
                
                <div className="bg-black/90 rounded-xl p-6 border-2 border-purple-500">
                  <p className="text-2xl font-bold mb-4 text-purple-400 text-center">WE REFUSE:</p>
                  <ul className="space-y-3">
                    <li className="bg-purple-600/20 p-3 rounded-lg border border-purple-500">
                      The separation between art and life
                    </li>
                    <li className="bg-purple-600/20 p-3 rounded-lg border border-purple-500">
                      The separation between artist and audience
                    </li>
                    <li className="bg-purple-600/20 p-3 rounded-lg border border-purple-500">
                      The separation between critique and participation
                    </li>
                    <li className="bg-purple-600/20 p-3 rounded-lg border border-purple-500">
                      The separation between individual and community
                    </li>
                    <li className="bg-purple-600/20 p-3 rounded-lg border border-purple-500">
                      The separation between serious and absurd
                    </li>
                    <li className="bg-purple-600/20 p-3 rounded-lg border border-purple-500">
                      The separation between authentic and performative
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* QUESTION OF VALUE */}
          <div className="relative bg-gradient-to-r from-green-600/20 via-yellow-600/20 to-green-600/20 border-4 border-green-600 rounded-2xl p-8 shadow-2xl shadow-green-600/50 overflow-hidden transform -rotate-1 hover:rotate-0 transition-all">
            <div
              className="absolute inset-0 opacity-15 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/2025-08-16 14.23.25.jpg')",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-8 text-green-400 text-center animate-pulse">
                💰 THE QUESTION OF VALUE 💰
              </h3>
              <div className="bg-black/90 rounded-xl p-6 border-2 border-green-500">
                <div className="space-y-6">
                  <div className="bg-red-600/20 p-6 rounded-lg border-2 border-red-500">
                    <p className="text-xl"><strong className="text-red-400">TRADITIONAL ART MARKET:</strong> &quot;This painting is worth $50 million because an auction house says so&quot;</p>
                  </div>
                  <div className="bg-blue-600/20 p-6 rounded-lg border-2 border-blue-500">
                    <p className="text-xl"><strong className="text-blue-400">CRYPTO ART MARKET:</strong> &quot;This NFT is worth $50 million because the blockchain says so&quot;</p>
                  </div>
                  <div className="bg-green-600/20 p-6 rounded-lg border-2 border-green-500">
                    <p className="text-xl"><strong className="text-green-400">ANGRY DEV:</strong> &quot;This cultural participation is valuable because we collectively decide it is&quot;</p>
                  </div>
                </div>
                <p className="text-xl mt-6 text-center">We reject both traditional and crypto art market logics in favor of <strong className="text-yellow-400">participation-value</strong>: the value of cultural engagement, community collaboration, and collaborative artistic creation.</p>
                <p className="text-xl font-bold mt-4 text-center text-green-200">The tokens have value because the community finds value in the cultural experience, not because markets assign financial value to the tokens.</p>
              </div>
            </div>
          </div>

          {/* COMMUNITY AS MEDIUM */}
          <div className="relative bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-purple-600/20 border-4 border-purple-600 rounded-2xl p-8 shadow-2xl shadow-purple-600/50 overflow-hidden">
            <div
              className="absolute inset-0 opacity-15 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/2025-08-16 14.22.55.jpg')",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-8 text-purple-400 text-center animate-bounce">
                👥 COMMUNITY AS COLLABORATIVE ARTISTIC MEDIUM 👥
              </h3>
              <div className="bg-black/90 rounded-xl p-6 border-2 border-purple-500">
                <p className="text-2xl font-bold text-center mb-6 text-purple-400">THE COMMUNITY IS:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: "🎨", role: "The canvas", desc: "collective decision-making creates the work" },
                    { icon: "🎨", role: "The paint", desc: "individual participation becomes collective expression" },
                    { icon: "🖌️", role: "The brush", desc: "governance mechanisms as artistic tools" },
                    { icon: "🏛️", role: "The gallery", desc: "platform for displaying the work" },
                    { icon: "👁️", role: "The audience", desc: "experiencing the work in real-time" },
                    { icon: "📝", role: "The critic", desc: "evaluating and interpreting the work" },
                    { icon: "🎭", role: "The artist", desc: "creating the work through participation" }
                  ].map((item, i) => (
                    <div key={i} className={`bg-purple-600/20 p-4 rounded-lg text-center border border-purple-500 transform ${i % 2 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-all`}>
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <div className="font-bold text-purple-400">{item.role}</div>
                      <div className="text-sm">{item.desc}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-xl mb-2"><strong>Traditional art:</strong> Individual vision imposed on passive materials</p>
                  <p className="text-xl mb-4"><strong>ANGRY DEV:</strong> Collective vision emerging from active participation</p>
                  <p className="text-xl font-bold text-purple-200">We are creating the first truly democratic artistic medium: governance-as-art, community-as-canvas, participation-as-performance.</p>
                </div>
              </div>
            </div>
          </div>

          {/* REGULATORY ABSURD */}
          <div className="relative bg-gradient-to-r from-orange-600/20 via-red-600/20 to-orange-600/20 border-4 border-orange-600 rounded-2xl p-8 shadow-2xl shadow-orange-600/50 overflow-hidden transform rotate-1 hover:rotate-0 transition-all">
            <div
              className="absolute inset-0 opacity-15 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/2025-08-16 14.23.46.jpg')",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-black mb-8 text-orange-400 text-center animate-pulse">
                📋 THE REGULATORY ABSURD 📋
              </h3>
              <div className="bg-black/90 rounded-xl p-8 border-2 border-orange-500 text-center">
                <div className="space-y-6">
                  <p className="text-xl bg-orange-600/20 p-6 rounded-lg border border-orange-500">
                    The fact that we must justify artistic expression through &quot;utility token&quot; frameworks demonstrates the complete bureaucratic capture of cultural creation.
                  </p>
                  <p className="text-xl bg-orange-600/20 p-6 rounded-lg border border-orange-500">
                    We comply with crypto-asset regulations while creating art specifically about the absurdity of requiring art to justify itself through commercial utility.
                  </p>
                  <p className="text-xl bg-orange-600/20 p-6 rounded-lg border border-orange-500">
                    This whitepaper exists because authorities demand it, not because art needs permission. The requirement itself becomes artistic material.
                  </p>
                  <p className="text-xl font-bold text-orange-200">
                    Every regulatory checkbox we tick becomes another layer of the performance, another demonstration of the authoritarian capture we critique.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FINAL DECLARATION */}
          <div className="relative bg-gradient-to-r from-red-700/30 via-black/50 to-red-700/30 border-4 border-red-700 rounded-2xl p-8 shadow-2xl shadow-red-700/50 overflow-hidden">
            <div
              className="absolute inset-0 opacity-20 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/angry_volcano.jpg')",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-5xl font-black mb-8 text-red-500 text-center animate-pulse">
                🔥 FINAL DECLARATION 🔥
              </h3>
              <div className="bg-black/90 rounded-xl p-8 border-2 border-red-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-green-600/20 rounded-xl p-6 border-2 border-green-500">
                    <p className="text-2xl font-bold mb-4 text-green-400 text-center">WE DECLARE:</p>
                    <ul className="space-y-2 text-sm">
                      <li>• Art requires no permission from institutions, markets, or authorities</li>
                      <li>• Community governance is a legitimate artistic medium</li>
                      <li>• Cultural critique must implicate its own culture</li>
                      <li>• Authentic decentralization requires authentic democracy</li>
                      <li>• Education happens through participation, not consumption</li>
                      <li>• The personal is political is cultural is financial is artistic</li>
                      <li>• Absurdity is the only honest response to absurd systems</li>
                      <li>• Everyone is an artist, especially when they don&apos;t think they are</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-600/20 rounded-xl p-6 border-2 border-red-500">
                    <p className="text-2xl font-bold mb-4 text-red-400 text-center">WE REJECT:</p>
                    <ul className="space-y-2 text-sm">
                      <li>• The commodification of resistance</li>
                      <li>• The institutionalization of rebellion</li>
                      <li>• The professionalization of culture</li>
                      <li>• The financialization of community</li>
                      <li>• The bureaucratization of art</li>
                      <li>• The separation of art from life</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-600/20 rounded-xl p-6 border-2 border-blue-500">
                    <p className="text-2xl font-bold mb-4 text-blue-400 text-center">WE EMBRACE:</p>
                    <ul className="space-y-2 text-sm">
                      <li>• The chaos of authentic democratic participation</li>
                      <li>• The beauty of collective artistic creation</li>
                      <li>• The power of community self-governance</li>
                      <li>• The necessity of cultural self-criticism</li>
                      <li>• The absurdity of our historical moment</li>
                      <li>• The potential for genuine alternatives</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* THE ANGRY DEV IS ALL OF US */}
          <div className="relative bg-gradient-to-r from-purple-700/30 via-red-700/40 to-purple-700/30 border-4 border-purple-700 rounded-2xl p-8 shadow-2xl shadow-purple-700/50 overflow-hidden">
            <div
              className="absolute inset-0 opacity-20 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/angry_feelings.jpg')",
              }}
            ></div>
            <div className="relative z-10">
              <h3 className="text-5xl font-black mb-8 text-purple-400 text-center animate-bounce">
                😡 THE ANGRY DEV IS ALL OF US 😡
              </h3>
              <div className="bg-black/90 rounded-xl p-8 border-2 border-purple-700 text-center">
                <p className="text-2xl mb-6 font-bold text-purple-300">Once again the Angry Dev has been left out.</p>
                <p className="text-xl mb-6">But this time we realize: we are all the Angry Dev. We all contain the desperation, the delusion, the desperate hope that this time will be different, that this technology will save us, that this community will be the one that finally gets it right.</p>
                <p className="text-xl mb-6">By performing the Angry Dev collectively, we learn to see ourselves clearly. By governing him democratically, we learn to govern ourselves authentically. By creating him collaboratively, we learn to create culture together.</p>
                <p className="text-xl mb-6">The Angry Dev is our shadow self made visible, our collective unconscious made conscious, our cultural contradictions made apparent.</p>
                <p className="text-xl mb-6">And through this visibility, this consciousness, this apparent contradiction, we find the possibility of something different.</p>
                <p className="text-2xl font-black text-purple-200">Something angry. Something beautiful. Something real.</p>
              </div>
            </div>
          </div>

          {/* Signature */}
          <div className="relative bg-black/80 border-4 border-red-500 rounded-2xl p-12 shadow-2xl shadow-red-500/50 text-center">
            <p className="text-3xl font-black mb-4 text-red-400">SIGNED IN SOLIDARITY AND ABSURDITY,</p>
            <p className="text-3xl font-black mb-4 text-red-400">THE ANGRY DEV COLLECTIVE</p>
            <p className="text-2xl font-black mb-8 text-red-300">ARTISTS, DEGENERATES, REVOLUTIONARIES, FOOLS</p>
            <p className="text-xl italic mb-8 text-red-200">Written in mom&apos;s basement at 3:47 AM while waiting for the markets to open</p>
            <hr className="border-red-500 mb-8" />
            <p className="text-lg italic text-red-100">
              This manifesto is both artistic statement and legal document, cultural critique and regulatory compliance, serious theory and elaborate joke. The tension between these categories is intentional and necessary. Art exists in the spaces between definitions, which is exactly where we intend to stay.
            </p>
          </div>
        </article>
        
        {/* Back to Top */}
        <div className="text-center mt-12 space-y-4">
          <Link 
            href="/"
            className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-lg font-bold text-xl hover:shadow-2xl hover:-translate-y-1 transition-all animate-pulse"
          >
            🔥 BACK TO RAGE CENTRAL 🔥
          </Link>
          <div className="text-6xl animate-bounce">😡💢🔥</div>
        </div>
      </div>
    </div>
  );
}