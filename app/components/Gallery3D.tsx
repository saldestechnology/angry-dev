'use client';

import Image from "next/image";

export default function Gallery3D() {
  const images = [
    { src: "/images/angry_dev.jpg", alt: "Angry Dev" },
    { src: "/images/angry_devil_and_angel.jpg", alt: "Devil and Angel Angry" },
    { src: "/images/angry_disappointed.jpg", alt: "Disappointed Angry" },
    { src: "/images/angry_feelings.jpg", alt: "Angry Feelings" },
    { src: "/images/angry_volcano.jpg", alt: "Angry Volcano" },
    { src: "/images/borrow_money_from_mum_and_dad_to_dev.jpg", alt: "Borrowing Money to Dev" },
    { src: "/images/2025-08-06 01.11.43.jpg", alt: "Hair-Pulling Market Crash" },
    { src: "/images/2025-08-06 01.11.51.jpg", alt: "Crying Over Empty Wallet" },
    { src: "/images/2025-08-06 01.11.58.jpg", alt: "Laser-Eyed Breakdown" },
    { src: "/images/2025-08-06 10.49.56.jpg", alt: "Chart Watching Depression" },
    { src: "/images/2025-08-06 10.50.04.jpg", alt: "Business Suit Defeat" },
    { src: "/images/2025-08-06 10.50.11.jpg", alt: "Couch Rage Mode" },
    { src: "/images/2025-08-06 10.50.17.jpg", alt: "Late-Night Coding Fury" },
    { src: "/images/2025-08-16 14.20.29.jpg", alt: "Angry Dev Art Piece" },
    { src: "/images/2025-08-16 14.20.32.jpg", alt: "Crypto Chaos Manifesto" },
    { src: "/images/2025-08-16 14.20.34.jpg", alt: "Digital Age Rage" },
    { src: "/images/2025-08-16 14.20.37.jpg", alt: "Blockchain Breakdown" },
    { src: "/images/2025-08-16 14.20.47.jpg", alt: "Market Manipulation Madness" },
    { src: "/images/2025-08-16 14.20.50.jpg", alt: "Decentralized Despair" },
    { src: "/images/2025-08-16 14.20.53.jpg", alt: "Token Troubles" },
    { src: "/images/2025-08-16 14.20.56.jpg", alt: "Smart Contract Stupidity" },
    { src: "/images/2025-08-16 14.20.59.jpg", alt: "Governance Gone Wrong" },
    { src: "/images/2025-08-16 14.21.02.jpg", alt: "Community Chaos" },
    { src: "/images/2025-08-16 14.21.04.jpg", alt: "Artistic Anger" },
    { src: "/images/2025-08-16 14.21.07.jpg", alt: "Performance Art Pain" },
    { src: "/images/2025-08-16 14.21.10.jpg", alt: "Dadaist Developer" },
    { src: "/images/2025-08-16 14.21.12.jpg", alt: "Cultural Critique Catastrophe" },
    { src: "/images/2025-08-16 14.21.15.jpg", alt: "Blockchain Beatnik" },
    { src: "/images/2025-08-16 14.21.18.jpg", alt: "Crypto Capitalism Collapse" },
    { src: "/images/2025-08-16 14.21.21.jpg", alt: "Democratic Disaster" },
    { src: "/images/2025-08-16 14.21.24.jpg", alt: "Regulatory Rage" },
    { src: "/images/2025-08-16 14.21.27.jpg", alt: "Utility Token Uprising" },
    { src: "/images/2025-08-16 14.21.29.jpg", alt: "Gas Fee Fury" },
    { src: "/images/2025-08-16 14.21.32.jpg", alt: "Consensus Catastrophe" },
    { src: "/images/2025-08-16 14.21.34.jpg", alt: "Immutable Insanity" },
    { src: "/images/2025-08-16 14.21.37.jpg", alt: "Ledger Lunacy" },
    { src: "/images/2025-08-16 14.21.39.jpg", alt: "Mining Madness" },
    { src: "/images/2025-08-16 14.21.42.jpg", alt: "Fork Frustration" },
    { src: "/images/2025-08-16 14.21.45.jpg", alt: "Hash Rate Hysteria" },
    { src: "/images/2025-08-16 14.21.47.jpg", alt: "Wallet Woes" },
    { src: "/images/2025-08-16 14.21.49.jpg", alt: "Exchange Existentialism" },
    { src: "/images/2025-08-16 14.21.52.jpg", alt: "Liquidity Loss" },
    { src: "/images/2025-08-16 14.21.54.jpg", alt: "Yield Yearning" },
    { src: "/images/2025-08-16 14.21.57.jpg", alt: "Staking Sorrow" },
    { src: "/images/2025-08-16 14.22.00.jpg", alt: "DeFi Desperation" },
    { src: "/images/2025-08-16 14.22.02.jpg", alt: "Protocol Panic" },
    { src: "/images/2025-08-16 14.22.08.jpg", alt: "Validator Vexation" },
    { src: "/images/2025-08-16 14.22.10.jpg", alt: "Node Nightmare" },
    { src: "/images/2025-08-16 14.22.13.jpg", alt: "Chain Chaos" },
    { src: "/images/2025-08-16 14.22.15.jpg", alt: "Bridge Breakdown" },
    { src: "/images/2025-08-16 14.22.18.jpg", alt: "Layer 2 Lament" },
    { src: "/images/2025-08-16 14.22.20.jpg", alt: "Rollup Rage" },
    { src: "/images/2025-08-16 14.22.23.jpg", alt: "Sidechain Sorrow" },
    { src: "/images/2025-08-16 14.22.25.jpg", alt: "Oracle Outrage" },
    { src: "/images/2025-08-16 14.22.27.jpg", alt: "Flash Loan Fury" },
    { src: "/images/2025-08-16 14.22.30.jpg", alt: "MEV Madness" },
    { src: "/images/2025-08-16 14.22.32.jpg", alt: "Slippage Suffering" },
    { src: "/images/2025-08-16 14.22.34.jpg", alt: "Impermanent Loss Lament" },
    { src: "/images/2025-08-16 14.22.37.jpg", alt: "Rug Pull Rage" },
    { src: "/images/2025-08-16 14.22.39.jpg", alt: "Honeypot Horror" },
    { src: "/images/2025-08-16 14.22.41.jpg", alt: "Sandwich Attack Anger" },
    { src: "/images/2025-08-16 14.22.44.jpg", alt: "Front-Running Frustration" },
    { src: "/images/2025-08-16 14.22.46.jpg", alt: "Bot Battle Breakdown" },
    { src: "/images/2025-08-16 14.22.48.jpg", alt: "Whale Watching Woes" },
    { src: "/images/2025-08-16 14.22.51.jpg", alt: "Diamond Hands Delusion" },
    { src: "/images/2025-08-16 14.22.53.jpg", alt: "Paper Hands Panic" },
    { src: "/images/2025-08-16 14.22.55.jpg", alt: "HODL Hysteria" },
    { src: "/images/2025-08-16 14.22.57.jpg", alt: "FUD Fighter" },
    { src: "/images/2025-08-16 14.22.59.jpg", alt: "FOMO Frenzy" },
    { src: "/images/2025-08-16 14.23.01.jpg", alt: "Moon Mission Madness" },
    { src: "/images/2025-08-16 14.23.03.jpg", alt: "Lambo Dreams Destroyed" },
    { src: "/images/2025-08-16 14.23.06.jpg", alt: "Rekt Reality" },
    { src: "/images/2025-08-16 14.23.08.jpg", alt: "Bag Holder Blues" },
    { src: "/images/2025-08-16 14.23.10.jpg", alt: "Exit Liquidity Exodus" },
    { src: "/images/2025-08-16 14.23.13.jpg", alt: "Pump and Dump Depression" },
    { src: "/images/2025-08-16 14.23.15.jpg", alt: "Shill Squad Sorrow" },
    { src: "/images/2025-08-16 14.23.17.jpg", alt: "Influencer Insanity" },
    { src: "/images/2025-08-16 14.23.20.jpg", alt: "Twitter Trader Trauma" },
    { src: "/images/2025-08-16 14.23.22.jpg", alt: "Discord Drama" },
    { src: "/images/2025-08-16 14.23.25.jpg", alt: "Telegram Troubles" },
    { src: "/images/2025-08-16 14.23.29.jpg", alt: "Reddit Rage" },
    { src: "/images/2025-08-16 14.23.31.jpg", alt: "4chan Chaos" },
    { src: "/images/2025-08-16 14.23.34.jpg", alt: "Meme Magic Madness" },
    { src: "/images/2025-08-16 14.23.36.jpg", alt: "Wojak Woes" },
    { src: "/images/2025-08-16 14.23.40.jpg", alt: "Pepe Pain" },
    { src: "/images/2025-08-16 14.23.44.jpg", alt: "Chad Challenge" },
    { src: "/images/2025-08-16 14.23.46.jpg", alt: "Virgin Vexation" },
    { src: "/images/2025-08-16 14.23.54.jpg", alt: "Cope Cage" },
    { src: "/images/2025-08-16 14.23.57.jpg", alt: "Seethe Supreme" },
  ];

  // Create size patterns for masonry layout
  const getSizeClass = (index: number) => {
    // Pattern for different sized tiles
    if (index % 15 === 0) return "col-span-2 row-span-2"; // Large square
    if (index % 7 === 3 || index % 11 === 5) return "col-span-2 row-span-1"; // Wide
    if (index % 9 === 1 || index % 13 === 7) return "col-span-1 row-span-2"; // Tall
    return "col-span-1 row-span-1"; // Regular
  };

  // Split images into columns for mobile masonry effect
  const columnCount = 3;
  const columns: Array<Array<typeof images[0] & { originalIndex: number }>> = Array.from({ length: columnCount }, () => []);
  
  images.forEach((image, index) => {
    columns[index % columnCount].push({ ...image, originalIndex: index });
  });

  return (
    <div className="gallery-section mb-16 w-full px-4">
      {/* Desktop Grid Layout */}
      <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px]">
        {images.map((image, index) => (
          <div
            key={index}
            className={`
              relative rounded-xl overflow-hidden shadow-xl shadow-red-500/30 
              transition-all duration-300 border-2 border-red-500 
              hover:scale-105 hover:shadow-red-500/60 hover:z-20
              ${getSizeClass(index)}
            `}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover filter saturate-125 contrast-110 hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-red-500/20 pointer-events-none" />
            
            {/* Hover Effects */}
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300" />
            
            {/* Angry emoji overlay */}
            <div className="absolute top-3 right-3 text-3xl opacity-0 hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
              {index % 4 === 0 ? "😡" : index % 4 === 1 ? "💢" : index % 4 === 2 ? "🔥" : "😤"}
            </div>
            
            {/* Image title overlay on hover */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 translate-y-full hover:translate-y-0 transition-transform duration-300">
              <p className="text-white font-bold text-sm lg:text-base drop-shadow-lg">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Masonry Columns */}
      <div className="md:hidden flex gap-4">
        {columns.map((column, columnIndex) => (
          <div key={columnIndex} className="flex-1 flex flex-col gap-4">
            {column.map((image, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden shadow-xl shadow-red-500/30 border-2 border-red-500"
                style={{ 
                  height: `${Math.floor(Math.random() * 100) + 200}px` // Random heights for masonry effect
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover filter saturate-125 contrast-110"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-red-500/20 pointer-events-none" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}